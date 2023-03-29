const slides = document.querySelectorAll(".heading-section");
const previousBtns = document.querySelectorAll(".previous-btn");
const nextBtns = document.querySelectorAll(".next-btn");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const navigation = document.querySelector(".mobile-nav-bg");

// SLIDER

let currentSlide = 0;

previousBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    changeSlide(currentSlide - 1);
  });
});
nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    changeSlide(currentSlide + 1);
  });
});
function changeSlide(n) {
  if (n >= slides.length) {
    n = 0;
  }
  if (n < 0) {
    n = slides.length - 1;
  }
  slides[currentSlide].classList.toggle("active");
  slides[n].classList.toggle("active");
  currentSlide = n;
}

//  MOBILE NAGIVATION

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
  menuBtn.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
  menuBtn.classList.remove("hidden");
});
