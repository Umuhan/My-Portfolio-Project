const projects = [
  {
    name: 'Project 1',
    description: 'Project 1 description',
    image: 'path/to/image1.jpg',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/live1',
    sourceLink: 'https://example.com/source1',
  },

  {
    name: 'Project 2',
    description: 'Project 2 description',
    image: 'path/to/image2.jpg',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/live2',
    sourceLink: 'https://example.com/source2',
  },

  {
    name: 'Project 3',
    description: 'Project 2 description',
    image: 'path/to/image2.jpg',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/live2',
    sourceLink: 'https://example.com/source2',
  },

  {
    name: 'Project 4',
    description: 'Project 2 description',
    image: 'path/to/image2.jpg',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/live2',
    sourceLink: 'https://example.com/source2',
  },

  {
    name: 'Project 5',
    description: 'Project 2 description',
    image: 'path/to/image2.jpg',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/live2',
    sourceLink: 'https://example.com/source2',
  },

  {
    name: 'Project 6',
    description: 'Project 2 description',
    image: 'path/to/image2.jpg',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/live2',
    sourceLink: 'https://example.com/source2',
  },
];

const projectsContainer = document.querySelector('.projects-container');

projects.forEach((project) => {
  const projectElement = document.createElement('div');
  projectElement.classList.add('project-box');

  const imageElement = document.createElement('div');
  imageElement.classList.add('project-img');
  projectElement.appendChild(imageElement);

  const contentElement = document.createElement('div');
  contentElement.classList.add('project-content');
  projectElement.appendChild(contentElement);

  const titleElement = document.createElement('h3');
  titleElement.classList.add('project-title');
  titleElement.innerHTML = "Most-Post Storie's <br/> Gain+Glory";
  contentElement.appendChild(titleElement);

  const langListElement = document.createElement('ul');
  langListElement.classList.add('project-lang-used');
  contentElement.appendChild(langListElement);

  project.technologies.forEach((technology) => {
    const langItemElement = document.createElement('li');
    langItemElement.classList.add('lang');
    langItemElement.textContent = technology;
    langListElement.appendChild(langItemElement);
  });

  //  "See Project" button
  const buttonElement = document.createElement('button');
  buttonElement.classList.add('btn', 'project-btn');
  buttonElement.textContent = 'See Project';
  contentElement.appendChild(buttonElement);

  // Append for projects container
  projectsContainer.appendChild(projectElement);
});

const toggleButtonAndMenu = () => {
  const menuBtn = document.querySelector('.burger-btn');
  const list = document.querySelector('.nav-list');
  menuBtn.classList.toggle('open');
  list.classList.toggle('open');
};

const initApp = () => {
  const menuBtn = document.querySelector('.burger-btn');
  const list = document.querySelector('.nav-list');
  menuBtn.addEventListener('click', toggleButtonAndMenu);
  list.addEventListener('click', toggleButtonAndMenu);
};

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// model

const modelSection = document.querySelector('.model');
const modelCloseButton = document.querySelector('.model-close');
const overlay = document.getElementById('overlay');
const projectButtons = document.querySelectorAll('.project-btn');

function showPopup() {
  modelSection.style.display = 'block';
  overlay.style.display = 'block';
}

function hidePopup() {
  modelSection.style.display = 'none';
  overlay.style.display = 'none';
}

// document.querySelector(".btn-live").addEventListener("click", showPopup);
modelCloseButton.addEventListener('click', hidePopup);

projectButtons.forEach((button) => {
  button.addEventListener('click', showPopup);
});
