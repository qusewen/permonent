const burger = document.querySelector('.burger')
const burgerContent = document.querySelector('.buurger_content')
const prevSlide = document.querySelector('.prev__slide')
const nextSlide = document.querySelector('.next__slide')
const photoSlide = document.querySelector('.img_slide')
const prevSlideRev = document.querySelector('.reviews__slider_prev')
const nextSlideRev = document.querySelector('.reviews__slider_next')
const reviwSlider = document.querySelector('.reviews__slider_img')
burger.addEventListener('click', openBurger)
function openBurger(){
    burgerContent.classList.toggle('activeBurger')
}
let a = 1;
let b = 1;

let details = document.querySelectorAll("details");
for(i=0;i<details.length;i++) {
	details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
	var details = event.target.parentNode.children;
	for(i=0;i<details.length;i++) {
		if (details[i].tagName != "DETAILS" || !details[i].hasAttribute('open') || event.target == details[i]) continue;
		details[i].removeAttribute("open");
	}
}
handlePrevsl()
prevSlide.addEventListener('click', handlePrevsl)




function handlePrevsl() {
	a--
	if(a < 0){
		a = 11
	}

	photoSlide.innerHTML = ''
	const mewImg = document.createElement('img')
	mewImg.classList.add('img_slide_photo')
	mewImg.src = `assets/img/sl${a}.jpg`
	photoSlide.append(mewImg)
}
nextSlide.addEventListener('click', handleNextsl)
function handleNextsl() {
	a++
	if(a > 11){
		a = 0
	}

	photoSlide.innerHTML = ''
	const mewImg = document.createElement('img')
	mewImg.classList.add('img_slide_photo')
	mewImg.src = `assets/img/sl${a}.jpg`
	photoSlide.append(mewImg)
}
handlNextrev()
nextSlideRev.addEventListener('click', handlNextrev)
function handlNextrev(){
	b++
	if(b > 7){
		b = 0
	}
	reviwSlider.innerHTML = ''
	const mewImg = document.createElement('img')
	mewImg.classList.add('img_slide_photo')
	mewImg.src = `assets/img/rew${b}.jpg`
	reviwSlider.append(mewImg)
}
