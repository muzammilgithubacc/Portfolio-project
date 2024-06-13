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


