"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

// 스크롤시 네비바 화면 변경
document.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  // console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// 네비바 메뉴버튼 클릭시 화면전환
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
  const link = e.target.dataset.link;
  if (link == null) {
    return;
  } else {
    // console.log(e.target.dataset.link);
    scrollIntoView(link);
  }
});

// contact me 버튼 눌렀을 때 화면 전환
const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// 화면전환 메서드
const scrollIntoView = (selector) => {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
};
