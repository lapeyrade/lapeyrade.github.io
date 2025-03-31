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
// Dark / Light Mode Toggle
// ============================================

const themeButtons = document.querySelectorAll("#modeToggle, #modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

// Apply saved theme on load
if (currentTheme === "dark") {
  setDarkMode();
}

// Add event listeners to toggle buttons
themeButtons.forEach(button => button.addEventListener("click", setTheme));

function setTheme() {
  if (document.body.getAttribute("theme") === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

// Set Dark Mode
function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");
  updateIcons();
}

// Set Light Mode
function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");
  updateIcons();
}

// Update Theme Icons
function updateIcons() {
  themeIcons.forEach(icon => {
    icon.src = document.body.getAttribute("theme") === "dark"
      ? icon.dataset.dark
      : icon.dataset.light;
  });
}

// ============================================
// Dynamic Year in Footer
// ============================================

const yearElement = document.getElementById("currentYear");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}