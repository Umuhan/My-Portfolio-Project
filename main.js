document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

const initApp = () => {
  const menuBtn = document.querySelector(".burger-btn");
  const list = document.querySelector(".nav-list");
  menuBtn.addEventListener("click", toggleButtonAndMenu);
  list.addEventListener("click", toggleButtonAndMenu);
};

const toggleButtonAndMenu = () => {
  const menuBtn = document.querySelector(".burger-btn");
  const list = document.querySelector(".nav-list");
  menuBtn.classList.toggle("open");
  list.classList.toggle("open");
};
