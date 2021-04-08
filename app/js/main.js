const iconMenu = document.querySelector('.menu__icon');
const menuNav = document.querySelector('.menu__nav');

if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuNav.classList.toggle('_active');
  });
}