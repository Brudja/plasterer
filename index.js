(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  // Функция для закрытия меню
  const closeMenu = () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.remove("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.remove("is-open");
  };

  // Обработчик клика на кнопку меню
  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });

  // Обработчик клика вне меню
  document.addEventListener("click", (event) => {
    const targetElement = event.target;
    // Проверяем, является ли кликнутый элемент меню или его потомком
    if (
      targetElement.closest("[data-menu]") ||
      targetElement === menuBtnRef ||
      menuBtnRef.contains(targetElement)
    ) {
      // Кликнули внутри меню или на кнопку меню, ничего не делаем
      return;
    }
    // Клик вне меню или кнопки меню, закрываем меню
    closeMenu();
  });

  // Обработчик нажатия на клавишу "Escape"
  document.addEventListener("keydown", (event) => {
    // Проверяем, открыто ли меню
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    if (event.key === "Escape" && expanded) {
      closeMenu();
    }
  });

  mobileMenuRef.addEventListener("click", (event) => {
    const targetElement = event.target;
    // Проверяем, является ли кликнутый элемент дочерним элементом меню
    if (targetElement.closest("[data-menu]")) {
      // Клик внутри меню, проверяем, является ли кликнутый элемент элементом списка
      if (targetElement.closest("li")) {
        // Кликнули на элемент списка, закрываем меню
        closeMenu();
      }
      // Кликнули на другой элемент внутри меню, ничего не делаем
      return;
    }
    // Клик вне меню, закрываем меню
    closeMenu();
  });
})();







