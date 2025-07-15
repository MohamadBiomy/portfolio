// DOM elements 
const logo = document.querySelector("header .logo p")
const animatedElements = document.querySelectorAll(".animated")
const navigators = document.querySelectorAll("nav a")
const sections = document.querySelectorAll("section")


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