// Mobile menu toggle (optional; keeps existing behavior if you add .is-menu-open in CSS)
(function () {
  const header = document.querySelector(".site-header");
  const btn = document.querySelector(".menu-btn");
  const navLinks = document.querySelectorAll(".nav a");

  if (header && btn) {
    btn.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-menu-open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((a) => {
      a.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 760px)").matches) {
          header.classList.remove("is-menu-open");
          btn.setAttribute("aria-expanded", "false");
        }
      });
    });
  }
})();

// "Poruči buket" => go to contact form + preselect "Pojedinačno cveće"
(function () {
  const orderBtn = document.getElementById("orderBouquetBtn");
  const form = document.getElementById("contactForm");
  const select = document.getElementById("orderType");

  if (!orderBtn || !form || !select) return;

  orderBtn.addEventListener("click", (e) => {
    e.preventDefault();

    /* REQUIRED: set default option */
    select.value = "pojedinacno";

    form.scrollIntoView({ behavior: "smooth", block: "start" });

    const firstInput = form.querySelector("input, select, textarea, button");
    if (firstInput) {
      setTimeout(() => firstInput.focus({ preventScroll: true }), 300);
    }

    history.replaceState(null, "", "#kontakt");
  });
})();

/* ========================= */
/* ADDED: FADE-IN ON SCROLL  */
/* ========================= */
(function () {
  const selectors = [
    "section.section",
    ".about-card",
    ".offer-card",
    ".gallery-card",
    ".contact-card",
    ".contact-form",
  ];

  const elements = Array.from(document.querySelectorAll(selectors.join(",")));
  if (elements.length === 0) return;

  elements.forEach((el) => el.classList.add("reveal"));

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  elements.forEach((el) => observer.observe(el));
})();
/* ========================= */
/* END ADDED                 */
/* ========================= */
