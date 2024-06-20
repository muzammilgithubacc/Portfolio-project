let hamBurger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");


hamBurger.addEventListener("click" , ()=>{
    hamBurger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener(
    "click" , ()=>{
        hamBurger.classList.remove("active");
    navMenu.classList.remove("active");
    }
))



// companies section script

const wrapper = document.querySelector('.wrapper')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
  if(!pressed) {
    return
  }

  this.scrollLeft += startX - e.clientX
})


