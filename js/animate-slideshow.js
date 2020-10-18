/* animate black arrow icon (solemate.html) */
let arrowBlack = document.getElementById('arrow-black')

let arrowBlackLogo = bodymovin.loadAnimation({
  container: arrowBlack,
  renderer: 'svg',
  loop: true,
  path: "../assets/animate-icons/arrowDownBlack.json"
});

/* animate black arrow icon (pantunes.html) */
let arrow = document.getElementById('arrow')

let arrowLogo = bodymovin.loadAnimation({
  container: arrow,
  renderer: 'svg',
  loop: true,
  path: "../assets/animate-icons/arrowDown.json"
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
