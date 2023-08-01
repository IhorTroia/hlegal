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
