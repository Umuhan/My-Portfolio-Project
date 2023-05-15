const primaryNav = document.querySelector(".nav-contact");
const navToggle = document.querySelector(".menu-toggle");

navToggle.addEventListener("click", () => {
  console.log("menu toggle clicked");
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
});
