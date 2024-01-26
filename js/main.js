const swiperCreate = new Swiper(".swiper-create", {
  slidesPerView: 1.05,
  spaceBetween: 12,

  navigation: {
    nextEl: ".swiper-button-next.create",
    prevEl: ".swiper-button-prev.create",
  },

  pagination: {
    el: ".swiper-pagination.create",
    clickable: true,
  },

  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
const swiperGallery = new Swiper(".swiper-gallery", {
  slidesPerView: 1,
  spaceBetween: 17,

  navigation: {
    nextEl: ".swiper-button-next.gallery",
    prevEl: ".swiper-button-prev.gallery",
  },

  pagination: {
    el: ".swiper-pagination.gallery",
    clickable: true,
  },

  breakpoints: {
    769: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
      loop: true,
    },
  },
});

const createBtns = document.querySelectorAll(".create__btn");
const createLists = document.querySelectorAll(".create__list");

const welcomeImg = document.querySelector(".welcome__img");
const aboutImg = document.querySelector(".about__content-img");

const mediaQuery = window.matchMedia("(max-width: 480px)").matches;

for (let i = 0; i < createBtns.length; i++) {
  createBtns[i].addEventListener("click", () => {
    for (let i of createBtns) i.classList.remove("active");
    createBtns[i].classList.add("active");

    for (let i of createLists) i.classList.add("none");
    createLists[i].classList.remove("none");
  });
}

const headerFixed = document.querySelector(".header.fixed");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) headerFixed.classList.add("active");
  else headerFixed.classList.remove("active");

  if (window.scrollY < 800)
    welcomeImg.style.bottom = `-${window.scrollY / 10}px`;

  if (window.scrollY < 1200)
    aboutImg.style.bottom = `-${window.scrollY / 20}px`;
});

function blockScroll() {
  scrollY = window.pageYOffset;
  document.body.style.top = `-${window.pageYOffset}px`;
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
}
function unblockScroll() {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  window.scrollTo(0, scrollY);
}

const burgerOpen = document.querySelectorAll(".burger__menu-img");
const burgerMenu = document.querySelector(".burger__menu");
const burgerClose = document.querySelector(".burger__menu-close");

for (let i of burgerOpen) {
  i.addEventListener("click", () => {
    burgerMenu.classList.add("active");
    blockScroll();
  });
}
burgerClose.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  unblockScroll();
});

const burgerCloth = document.querySelectorAll("span.burger__item-text");
const burgerClothList = document.querySelectorAll(".burger__list-abs");

for (let i = 0; i < burgerCloth.length; i++) {
  burgerCloth[i].addEventListener("click", () => {
    burgerClothList[i].classList.toggle("active");
  });
}

const burgerAnchors = document.querySelectorAll("a.burger__item-text");

for (let i of burgerAnchors) {
  i.addEventListener("click", () => {
    unblockScroll();
    burgerMenu.classList.remove("active");
  });
}

new WOW().init();

document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    let href = this.getAttribute("href").substring(1);
    console.log(document.getElementById(href));
    const scrollTarget = document.getElementById(href);

    const offsetPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

const acc = document?.getElementsByClassName("accordion");

acc[0].classList.add("active");
if (window.matchMedia("(max-width: 768px)").matches) {
  acc[0].nextElementSibling.style.maxHeight =
    acc[0].nextElementSibling.scrollHeight + 60 + "px";
} else {
  acc[0].nextElementSibling.style.maxHeight =
    acc[0].nextElementSibling.scrollHeight + "px";
}

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    for (let j of acc) {
      if (acc[i] != j) {
        j.classList.remove("active");
        j.nextElementSibling.style.maxHeight = null;
      }
    }
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
