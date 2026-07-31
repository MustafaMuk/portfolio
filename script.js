const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".primary-navigation");
const navigationLinks = document.querySelectorAll(".primary-navigation a");
const yearElement = document.querySelector("#current-year");
const revealElements = document.querySelectorAll("[data-reveal]");

function updateHeader() {
  header?.classList.toggle("scrolled", window.scrollY > 12);
}

function closeNavigation() {
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Open navigation");
  navigation?.classList.remove("open");
  document.body.classList.remove("nav-open");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";

  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.setAttribute(
    "aria-label",
    isOpen ? "Open navigation" : "Close navigation"
  );

  navigation?.classList.toggle("open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => {
    element.classList.add("revealed");
  });
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -45px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    closeNavigation();
  }
});
