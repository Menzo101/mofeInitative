
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
 
hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalLd = null;

document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider(){
    if(slides.length > 0)
   slides[slideIndex].classList.add("displaySlide");
   intervalLd = setInterval(nextSlide, 3000);
}
function showSlide(index){

    if(index >= slides.length){
      slideIndex = 0;
    }
    else if( index < 0){
     slideIndex = slides.length - 1;
    }
   slides.forEach(slide => {
    slide.classList.remove("displaySlide");
   });
   slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    slideIndex++;
    showSlide(slideIndex)
}
function nextSlide(){
   slideIndex++;
   showSlide(slideIndex)
}



















// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");
 
// hamburger.addEventListener("click",() =>{
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })


// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }))
