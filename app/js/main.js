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
