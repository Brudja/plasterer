(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const nav = document.querySelector("[data-menu-nav]");
  
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
  
    // Обработчик клика на элементы внутри меню
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