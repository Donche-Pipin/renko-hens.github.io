export default class Header {

  constructor() {
    this.header = document.querySelector('.header');
    this.button;
    this.menu;
    
    try {
      this.button = this.header.querySelector('.header__menu-button');
      this.menu = this.header.querySelector('.header__menu');
    } catch (e) {
      console.log(e);
      return;
    }

    this.button.addEventListener('click', this.toggleMenu.bind(this));
  }

  toggleMenu() {

    const hideMenu = () => {
      this.menu.classList.remove('header__menu_active');
      this.menu.classList.remove('header__menu_fade-out');

      this.menu.removeEventListener('animationend', hideMenu);
    };
    
    if (!this.menu.classList.contains('header__menu_active')) {
      this.menu.classList.add('header__menu_active');
      this.menu.classList.add('header__menu_fade-in');
    } else {
      this.menu.classList.remove('header__menu_fade-in');
      this.menu.classList.add('header__menu_fade-out');

      this.menu.addEventListener('animationend', hideMenu);
    }
  }

  closeMenu() {
    this.menu.className.remove('header__menu_active');
  }
}