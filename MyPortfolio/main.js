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

// 스크롤 시  화면 fade out
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
const homeContainer = document.querySelector(".home__container");

document.addEventListener("scroll", () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});

// 상단으로 올라가기 버튼
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

//네비바 버튼(반응형) 클릭시 이벤트
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  console.log("토글버튼이 눌렸다.");
  navbarMenu.classList.toggle("open");
});

// 버튼클릭시 이벤트 발생
const active = document.querySelectorAll("div.work__categories button");
active.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(e.target.innerText);
    // let buttonID = e.target.innerText;
    button.classList.toggle("active");
    // if (buttonID.includes("All")) {
    //   button.classList.toggle("active");
    // } else if (buttonID.includes("Front-end")) {
    //   button.classList.toggle("active");
    // } else {
    //   button.classList.toggle("active");
    // }
  });
});

// Utilities Function
// 화면전환 메서드(화살표함수)
const scrollIntoView = (selector) => {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
};
