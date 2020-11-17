// welcome
// function welcome() {
// 	var welcome = document.getElementById("welcome");
// 	var id = setInterval(welcome, 10);
// 	function welcome() {
// 		if (width == 100) {
// 			clearInterval(id);
// 		} else {
// 			clearInterval(welcome)
// 		}
// 	}
// }
// And Welcome

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const fade = document.querySelectorAll('.project-item .project-info')

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 450) {
		header.style.backgroundColor = '#29323c';
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

// project
document.addEventListener('scroll', () => {
	const skill = document.getElementsByClassName('project-info')[0];
	const skill2 = document.getElementsByClassName('project-info')[1];
	const skill3 = document.getElementsByClassName('project-info')[2];
	const skillImg = document.getElementsByClassName("project-img")[0];
	const skillImg2 = document.getElementsByClassName("project-img")[1];
	const skillImg3 = document.getElementsByClassName("project-img")[2];
	var scroll_position = window.scrollY;
	if (scroll_position > 1227) {
		skill.style.transition = '1s';
		skill.style.opacity = '1';
		skillImg.style.transition = '2s';
		skillImg.style.opacity = '1';
	}
	else {
		skill.style.opacity = '0';
		skillImg.style.opacity = '0';
	}

	if (scroll_position > 1800) {
		skill2.style.transition = '1.5s';
		skill2.style.opacity = '1';
		skillImg2.style.transition = '1s';
		skillImg2.style.opacity = '1';
	} else {
		skill2.style.opacity = '0';
		skillImg2.style.opacity = '0';
	}

	if (scroll_position > 1900) {
		skill3.style.transition = '1.5s';
		skill3.style.opacity = '1';
		skillImg3.style.transition = '1s';
		skillImg3.style.opacity = '1';
	} else {
		skill3.style.opacity = '0';
		skillImg3.style.opacity = '0';
	}
});
// And project

// slider next or prev
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	console.log(i);
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		slides[i].className = slides[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
}
// And slider next or prev

// Slidder
function imgSlider(anything) {
	document.getElementById("slider").src = anything;
}
// And slider


// Cursor
var cursor = document.querySelector('.cursor');
var cursor1 = document.querySelector('.cursor1');
document.addEventListener('mousemove', function (e) {
	var x = e.clientX;
	var y = e.clientY;
	// console.log(x, y);
	cursor.style.left = x + "px";
	cursor.style.top = y + "px";
	cursor1.style.left = x + "px";
	cursor1.style.top = y + "px";
});
let links = Array.from(document.querySelectorAll('a'));
console.log(links);
// End cursor