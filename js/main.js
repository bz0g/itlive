// Header start

const hamburger = document.querySelector('.header-box .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header-box .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header-box .nav-bar .nav-list ul li a');
const header = document.querySelector('.header-box.container');
const video = document.querySelector('.video')
const about = document.querySelector('.about-bottom')

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#212529';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

//header end


//reveal start 

function reveal() {
	var reveals = document.querySelectorAll(".reveal");
  
	reveals.forEach((reveal) => {
	  var windowHeight = window.innerHeight;
	  var elementTop = reveal.getBoundingClientRect().top;
	  var elementVisible = 100;
  
	  if (elementTop < windowHeight - elementVisible) {
		reveal.classList.add("active");
	  } else {
		reveal.classList.remove("active");
	  }
	});
  }
  
  window.addEventListener("scroll", reveal);

