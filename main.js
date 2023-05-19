const toggleButtonAndMenu = () => {
  const menuBtn = document.querySelector(".burger-btn");
  const list = document.querySelector(".nav-list");
  menuBtn.classList.toggle("open");
  list.classList.toggle("open");
};

const initApp = () => {
  const menuBtn = document.querySelector(".burger-btn");
  const list = document.querySelector(".nav-list");
  menuBtn.addEventListener("click", toggleButtonAndMenu);
  list.addEventListener("click", toggleButtonAndMenu);
};

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

// model

const modelSection = document.querySelector(".model");
const modelCloseButton = document.querySelector(".model-close");
const overlay = document.getElementById("overlay");
const projectButtons = document.querySelectorAll(".project-btn");

function showPopup() {
  modelSection.style.display = "block";
  overlay.style.display = "block";
}

function hidePopup() {
  modelSection.style.display = "none";
  overlay.style.display = "none";
}

// document.querySelector(".btn-live").addEventListener("click", showPopup);
modelCloseButton.addEventListener("click", hidePopup);

projectButtons.forEach((button) => {
  button.addEventListener("click", showPopup);
});
