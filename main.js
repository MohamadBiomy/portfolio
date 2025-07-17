// DOM elements 
const logo = document.querySelector("header .logo p")
const animatedElements = document.querySelectorAll(".animated")
const navigators = document.querySelectorAll("nav a")
const sections = document.querySelectorAll("section")
const projectsContainer = document.querySelector("#projects .projects-container")
const copyEmail = document.querySelector(".copy")

// Logo
logo.addEventListener("click", () => {
  window.scrollTo(0, 0)
})

// Add animations to animated elements
animatedElements.forEach(section => {
  section.style.opacity = "0"
  window.addEventListener('scroll', () => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 10; // adjust if needed
    if (sectionTop < triggerPoint) {
      section.style.animation = "appear-from-bottom .5s forwards"
    }
  });
  window.addEventListener("load", () => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 10; // adjust if needed
    if (sectionTop < triggerPoint) {
      section.style.animation = "appear-from-bottom .5s forwards"
    }
  })
})

// Navigators
navigators.forEach(link => {
  link.addEventListener("click", () => {
    
    const choosedSection = document.getElementById(link.dataset.link)

    if (choosedSection) {
      window.scrollTo(0, choosedSection.offsetTop - 60)
    }

  })
})

// Projects
fetch("./data/projects.json").then(res => res.json())
.then(data => {
  data.forEach(project => {
    const projectElement = createProjectElement(project)
    projectsContainer.append(projectElement)
  })
})

// Coping email
copyEmail.addEventListener("click", () => {
  const email = "mohamadbiomy.dev@gmail.com";
  // Use Clipboard API if available
  if (navigator.clipboard) {
    navigator.clipboard.writeText(email).then(() => {
      copyEmail.dataset.message = "Copied!";
      copyEmail.classList.add("copied");
      setTimeout(() => {
        copyEmail.dataset.message = "";
        copyEmail.classList.remove("copied");
      }, 2000);
    });
  } else {
    // Fallback for older browsers
    const tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    copyEmail.dataset.message = "Copied!";
    copyEmail.classList.add("copied");
    setTimeout(() => {
      copyEmail.dataset.message = "";
      copyEmail.classList.remove("copied");
    }, 2000);
  }
})



/* --------- FUNCTIONS --------- */

function createProjectElement(data) {
  const project = document.createElement("div");
  project.className = "project";
  const projectCover = document.createElement("div");
  projectCover.className = "project-cover";
  project.append(projectCover)
  const caption = document.createElement("h5")
  caption.innerHTML = data.caption
  projectCover.append(caption)
  projectCover.style.backgroundImage = `url(${data.image})`
  const description = document.createElement("p")
  description.innerHTML = data.description
  project.append(description)
  const bottom = document.createElement("div")
  bottom.className = "bottom"
  project.append(bottom)
  const repo = document.createElement("div")
  repo.className = "repo"
  repo.innerHTML = `<i class="fa-brands fa-github"></i> Github Repo`
  repo.addEventListener("click", () => window.open(data.repo, "_blank"))
  bottom.append(repo)
  const liveSite = document.createElement("div")
  liveSite.className = "live-site"
  liveSite.innerHTML = `Live site <i class="fa-solid fa-arrow-right"></i>`
  liveSite.addEventListener("click", () => window.open(data.liveSite, "_blank"))
  bottom.append(liveSite)
  return project
}