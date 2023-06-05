// Header start

const hamburger = document.querySelector('.header-box .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header-box .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header-box .nav-bar .nav-list ul li a');
const header = document.querySelector('.header-box.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});