//signin-signup Start

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const box = document.querySelector(".box");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
    box.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    box.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
    box.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    box.classList.remove("sign-up-mode2");
});

//signin-signup End

// Header Start

const hamburger = document.querySelector('.header-box .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header-box .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header-box .nav-bar .nav-list ul li a');
const header = document.querySelector('.header-box.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

// document.addEventListener('scroll', () => {
// 	var scroll_position = window.scrollY;
// 	if (scroll_position > -1) {
// 		header.style.backgroundColor = '#212529';
// 	} else {
// 		header.style.backgroundColor = 'transparent';
// 	}
// });

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


//header End
