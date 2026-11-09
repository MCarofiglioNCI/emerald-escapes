// main.js
// Shared behaviour between pages: navbar

const siteHeader = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navMain = document.getElementById("nav-main");

// Toggle to open mobile menu
navToggle.addEventListener("click", () => {
  const isOpen = navMain.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// Shrink sticky navbar on scroll
window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 50);
});

// Theme toggle to switch between light and dark mode
const themeToggle = document.querySelector(".theme-toggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  // Show  icon for the theme you'd switch to, and aria laber for screen readers
  if (theme === "dark") {
    themeToggle.textContent = "☀️";
    themeToggle.setAttribute("aria-label", "Switch to light mode");
  } else {
    themeToggle.textContent = "🌙";
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
  }
}

// Use the saved theme if there is one, otherwise start in light mode
// NOTE: When running the files locally, theme is saved per-page instead of site-wide, tested on Firefox
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);


themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});
