/**
 * ============================================================================
 * PUSHPAMANGALAM GOLD AND DIAMONDS — INTERACTIVE BEHAVIOUR & CONFIG HYDRATION
 * ============================================================================
 * 1. Hydrates contact numbers, WhatsApp deep links, addresses, and social URLs
 *    from window.SITE_CONFIG (js/config.js).
 * 2. Powers mobile drawer navigation with accessible focus & keyboard handling.
 * 3. Adds sticky header shadow on scroll and active section highlighting.
 * 4. Applies subtle scroll-reveal motion when elements enter the viewport.
 * ============================================================================
 */

(function () {
  "use strict";

  const cfg = window.SITE_CONFIG || {};

  /**
   * Build a clean WhatsApp click-to-chat URL with an optional custom enquiry message.
   */
  function buildWhatsAppUrl(customMessage) {
    const number = (cfg.whatsappNumber || "919800000000").replace(/[^\d]/g, "");
    const message =
      customMessage ||
      cfg.whatsappDefaultMessage ||
      "Namaskaram! I would like to enquire about Pushpamangalam Gold and Diamonds.";
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Hydrate dynamic placeholder bindings from js/config.js so changing values
   * in one file keeps the whole website synchronized.
   */
  function hydrateSiteConfig() {
    // 1. Phone numbers & tel: links
    document.querySelectorAll("[data-phone-href]").forEach((el) => {
      if (cfg.phoneHref) el.setAttribute("href", cfg.phoneHref);
    });
    document.querySelectorAll("[data-phone-display]").forEach((el) => {
      if (cfg.phoneDisplay) el.textContent = cfg.phoneDisplay;
    });

    // 2. General & collection-specific WhatsApp links
    document.querySelectorAll("[data-whatsapp-link]").forEach((el) => {
      const category = el.getAttribute("data-whatsapp-category");
      const customMsg = category
        ? `Namaskaram Pushpamangalam Gold and Diamonds! I would like to enquire about your "${category}" collection at the Cherthala showroom.`
        : el.getAttribute("data-whatsapp-message") || cfg.whatsappDefaultMessage;
      el.setAttribute("href", buildWhatsAppUrl(customMsg));
    });

    // 3. Cherthala & Mannancherry address / directions links
    if (cfg.cherthalaShowroom) {
      document.querySelectorAll("[data-cherthala-address]").forEach((el) => {
        el.textContent = cfg.cherthalaShowroom.address;
      });
      document.querySelectorAll("[data-cherthala-directions]").forEach((el) => {
        el.setAttribute("href", cfg.cherthalaShowroom.directionsUrl);
      });
    }

    if (cfg.mannancherryBranch) {
      document.querySelectorAll("[data-mannancherry-address]").forEach((el) => {
        el.textContent = cfg.mannancherryBranch.address;
      });
    }

    // 4. Store hours
    document.querySelectorAll("[data-store-hours]").forEach((el) => {
      if (cfg.storeHours) el.textContent = cfg.storeHours;
    });

    // 5. Google Reviews link & text
    if (cfg.googleReviews) {
      document.querySelectorAll("[data-google-reviews-url]").forEach((el) => {
        el.setAttribute("href", cfg.googleReviews.profileUrl);
      });
    }

    // 6. Social links
    if (cfg.social) {
      document.querySelectorAll("[data-social]").forEach((el) => {
        const key = el.getAttribute("data-social");
        if (cfg.social[key]) {
          el.setAttribute("href", cfg.social[key]);
        }
      });
    }

    // 7. Auto-update copyright year
    const yearEl = document.getElementById("current-year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  /**
   * Mobile Navigation Drawer (Accessible Toggle)
   */
  function initMobileNav() {
    const openBtn = document.getElementById("mobile-menu-open");
    const closeBtn = document.getElementById("mobile-menu-close");
    const drawer = document.getElementById("mobile-drawer");
    const backdrop = document.getElementById("mobile-drawer-backdrop");

    if (!openBtn || !drawer || !backdrop) return;

    function openDrawer() {
      drawer.classList.add("is-open");
      backdrop.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
      openBtn.setAttribute("aria-expanded", "true");
      document.body.classList.add("nav-open");
      if (closeBtn) closeBtn.focus();
    }

    function closeDrawer() {
      drawer.classList.remove("is-open");
      backdrop.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true");
      openBtn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }

    openBtn.addEventListener("click", openDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    backdrop.addEventListener("click", closeDrawer);

    // Close drawer when any navigation link inside it is tapped
    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });

    // Close on Escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && drawer.classList.contains("is-open")) {
        closeDrawer();
        openBtn.focus();
      }
    });
  }

  /**
   * Sticky Header Elevation & Active Nav Link Tracking
   */
  function initScrollEffects() {
    const header = document.getElementById("site-header");
    const navLinks = Array.from(document.querySelectorAll(".nav-link"));
    const sections = navLinks
      .map((link) => {
        const id = link.getAttribute("href");
        return id && id.startsWith("#") ? document.querySelector(id) : null;
      })
      .filter(Boolean);

    function onScroll() {
      const scrollY = window.scrollY;
      if (header) {
        header.classList.toggle("is-scrolled", scrollY > 12);
      }

      // Highlight active navigation link
      let currentId = "";
      const offset = 150;
      sections.forEach((sec) => {
        if (scrollY >= sec.offsetTop - offset) {
          currentId = `#${sec.id}`;
        }
      });

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === currentId);
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /**
   * Subtle Scroll Reveal Animation
   */
  function initScrollReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
  }

  document.addEventListener("DOMContentLoaded", () => {
    hydrateSiteConfig();
    initMobileNav();
    initScrollEffects();
    initScrollReveal();
  });
})();
