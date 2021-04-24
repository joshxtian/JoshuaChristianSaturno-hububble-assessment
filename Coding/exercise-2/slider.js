let slidePosition = 0;

const slides = document.getElementsByClassName("slide");
const pagination = document.getElementsByClassName("slider-pagination-page");
const totalSlides = slides.length;
slides[0].classList.add("active");
pagination[0].classList.add("active");
const buttonNext = document.getElementsByClassName("slider-next");
const buttonPrev = document.getElementsByClassName("slider-prev");

var paginateList = document.getElementsByClassName("slider-pagination");

for (var i = 0; i < buttonNext.length; i++) {
  buttonNext[i].addEventListener("click", () => moveToNextSlide());
}

for (var i = 0; i < buttonNext.length; i++) {
  buttonPrev[i].addEventListener("click", () => moveToPrevSlide());
}

const moveToSlide = (index) => {
  slidePosition = index;
  updateSlidePosition();
  updatePaginatePosition();
};

for (var i = 0, len = paginateList[0].children.length; i < len; i++) {
  (function (index) {
    paginateList[0].children[i].onclick = () => {
      moveToSlide(index);
    };
  })(i);
}

const updateSlidePosition = () => {
  for (let slide of slides) {
    slide.classList.remove("active");
  }
  slides[slidePosition].classList.add("active");
};

const updatePaginatePosition = () => {
  for (let paginate of pagination) {
    paginate.classList.remove("active");
  }
  pagination[slidePosition].classList.add("active");
};

const moveToNextSlide = () => {
  if (slidePosition == totalSlides - 1) slidePosition = 0;
  else slidePosition++;
  updateSlidePosition();
  updatePaginatePosition();
};
const moveToPrevSlide = () => {
  if (slidePosition == 0) slidePosition = totalSlides - 1;
  else slidePosition--;
  console.log(slidePosition);
  updateSlidePosition();
  updatePaginatePosition();
};
