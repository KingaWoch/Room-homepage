const slides = document.querySelectorAll(".heading-section");
const previousBtns = document.querySelectorAll(".previous-btn");
const nextBtns = document.querySelectorAll(".next-btn");

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
