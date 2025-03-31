// ============================================
// Hamburger Menu Toggle
// ============================================

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

// ============================================
// Back to Top Button
// ============================================

const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
  window.addEventListener("scroll", () => {
    const shouldShow = window.scrollY > 200;
    if (backToTopButton.style.display !== (shouldShow ? "block" : "none")) {
      backToTopButton.style.display = shouldShow ? "block" : "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ============================================
// Fade-in Effect for Sections
// ============================================

const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target); // Stop observing once visible
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// ============================================
// Dark / Light Mode Toggle
// ============================================

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");
const currentTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

if (currentTheme === "dark") {
  setDarkMode();
} else {
  setLightMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}

// ============================================
// Dynamic Year in Footer
// ============================================

const yearElement = document.getElementById("currentYear");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}