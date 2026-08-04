const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}
