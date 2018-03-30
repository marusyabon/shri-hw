let list= document.querySelectorAll(".img_wrap");
let slideShow = document.getElementById('slideshow');
let slides = document.getElementsByClassName("mySlides");
let close_slides = document.querySelector(".close_slides");
let slideIndex = 1;

for (let i=0; i < list.length; i++){
	list[i].onclick = function() {
		//slideIndex = i + 1;
		showSlides(slideIndex = i + 1);
	  };
}

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n){
	slideShow.style.display = "block";

	let arr = [];

	for (let i=0; i < list.length; i++){
		arr.push(list[i].cloneNode(true));
		arr[i].className = "mySlides";
		slideShow.appendChild(arr[i]);
	}
	let i;

	if (n >slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display="none";
		slides[i].firstChild.className="";
	}
	let active_slide =  slides[slideIndex-1];
	active_slide.style.display = "block";
	active_slide.firstChild.classList.add("active");

}
function hideSlides(){
	slideShow.style.display = "none";	
}


slideShow.addEventListener('click', onWrapClick);
close_slides.addEventListener('click', hideSlides);

//по клику на фон закрыть предпросмотр
function onWrapClick(e){
	if (e.target === slideShow) {
	    hideSlides();
	}
}
//обрабатываем события клавиатуры
window.document.onkeyup = function(e) {
	if(e.which == 27) {
	    hideSlides()
	}
}
window.document.onkeydown = function(e) {
	if(slideShow.style.display == "block"){
		if(e.which == 39 || e.which == 40) {
			e.preventDefault()
		    plusSlides(1);
		}

		if(e.which == 37 || e.which == 38) {
			e.preventDefault()
		    plusSlides(-1);
		}
	}
}

//обрабатываем событие мыши скролл
if (slideShow.addEventListener) {
  if ('onwheel' in document) {
    // IE9+, FF17+, Ch31+
    slideShow.addEventListener("wheel", onWheel);
  } else if ('onmousewheel' in document) {
    // устаревшие браузеры
    slideShow.addEventListener("mousewheel", onWheel);
  } else {
    // Firefox < 17
    slideShow.addEventListener("MozMousePixelScroll", onWheel);
  }
} else { // IE8-
  slideShow.attachEvent("onmousewheel", onWheel);
}

function onWheel(e) {
  e = e || window.event;

  e.preventDefault();

  let delta = e.deltaY || e.detail || e.wheelDelta;

  delta > 0 ? plusSlides(1) : plusSlides(-1);
    
}

