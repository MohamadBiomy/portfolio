// DOM elements 
const logo = document.querySelector("header .logo p")
const sections = document.querySelectorAll("section:not(#hero)")
// const oLetters = document.querySelectorAll("h2 span")




// Logo
logo.addEventListener("click", () => {
  window.scrollTo(0, 0)
})

// Add animations to sections
sections.forEach(section => {
  section.style.opacity = "0"
  window.addEventListener('scroll', () => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 10; // adjust if needed

    if (sectionTop < triggerPoint) {
      section.style.animation = "appear-from-bottom .5s forwards"
    }
  });
})

// O letters
// oLetters.forEach(o => {
//   o.style.position = "relative"
//   o.parentElement.addEventListener("mouseenter", () => {
//     o.style.position = "static"
//   })
//   o.parentElement.addEventListener("mouseleave", () => {
//     setTimeout(() => {
//       o.style.position = "relative"
//     }, 400)
//   })
// })