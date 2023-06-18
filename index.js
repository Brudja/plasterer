(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  const closeMenu = () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.remove("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.remove("is-open");
  };

  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });


  document.addEventListener("click", (event) => {
    const targetElement = event.target;
    if (
      targetElement.closest("[data-menu]") ||
      targetElement === menuBtnRef ||
      menuBtnRef.contains(targetElement)
    ) {
      return;
    }
    closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    if (event.key === "Escape" && expanded) {
      closeMenu();
    }
  });

  mobileMenuRef.addEventListener("click", (event) => {
    const targetElement = event.target;
    if (targetElement.closest("[data-menu]")) {
      if (targetElement.closest("li")) {
        closeMenu();
      }
      return;
    }
    closeMenu();
  });
})();







