var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
function(d,e,s){
	if(d.getElementById("likebtn_wjs"))return;
	a=d.createElement(e);m=d.getElementsByTagName(e)[0];
	a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)
	(document,"script","//w.likebtn.com/js/w/widget.js");}