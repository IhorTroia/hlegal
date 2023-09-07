(() => {
  const headerBurgerBtn = document.querySelector(".header__box-burger");
  const headerNavigation = document.querySelector(".header__nav");
  const headerCloseBtn = document.querySelector(".header__nav-close");

  headerBurgerBtn.addEventListener("click", () => {
    headerNavigation.classList.add("active");
  });

  headerCloseBtn.addEventListener("click", () => {
    headerNavigation.classList.remove("active");
  });
})();

(() => {
  const popupOpenBtn = document.querySelector(".service__btn");
  const popup = document.querySelector(".popup");
  const popupCloseBtn = document.querySelector(".popup__close");

  popupOpenBtn.addEventListener("click", () => {
    popup.classList.add("active");
  });

  popupCloseBtn.addEventListener("click", () => {
    popup.classList.remove("active");
  });
})();


(() => {
  const tabsItems = document.querySelectorAll(".tabs__list-item");
  const contentsItems = document.querySelectorAll(".tabs__content-item");

  tabsItems.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      contentsItems.forEach((content) => {
        content.classList.remove("active");
      });
      tabsItems.forEach((tab) => {
        tab.classList.remove("active");
      });
      tabsItems[index].classList.add("active");
      contentsItems[index].classList.add("active");
    });
  });
})();

const teamSwiper = new Swiper(".teamSlider__swiper", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".teamSlider__swiper-pagination",
    clickable: true,
  },
});

const aboutSwiper = new Swiper(".aboutSlider__swiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".aboutSlider__swiper-pagination",
    clickable: true,
  },
});
