/* SLIDESHOW */
let slideIndex = 0;// Initial call to display the first slide

// Next/previous controls
const plusSlides = (n) => {// n is the number of slides to move forward or backward
  showSlides(slideIndex += n);
}

// Thumbnail image controls
const currentSlide = (n) => {// n is the index of the slide to display
  showSlides(slideIndex = n);
}

const showSlides = (n) =>  {// This function displays the current slide and hides the others
  let i;
  let slides = document.getElementsByClassName("mySlides");// Get all elements with the class "mySlides"
  let dots = document.getElementsByClassName("dot");// Get all elements with the class "dot"
  if (n > slides.length) {slideIndex = 1}// If n is greater than the number of slides, reset to the first slide
  if (n < 1) {slideIndex = slides.length}// If n is less than 1, set to the last slide
  for (i = 0; i < slides.length; i++) {// Loop through all slides and hide them
    slides[i].style.display = "none";// Hide the slide
  }
  for (i = 0; i < dots.length; i++) {// Loop through all dots and remove the "active" class
    dots[i].className = dots[i].className.replace(" active", "");// Remove the "active" class from the dot
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);// Initial call to display the first slide

/* Countdown */
const startCountdown = () => {
  let countdownInput = document.getElementById("countdownInput").value; // Get the value from the input field
  let timerElement = document.getElementById("timer"); // Get the element to display the timer  
  let countdown = parseInt(countdownInput); // Convert the input value to an integer

  if (isNaN(countdown) || countdown < 0) { // Check if the input is a valid number and non-negative
    timerElement.innerHTML = "Please enter a valid non-negative number.";
    return;
  }
  timerElement.innerHTML = countdown; // Display the initial countdown value

  const interval = setInterval(() => { // Set an interval to update the countdown every second  
    countdown--; // Decrement the countdown value
    if (countdown < 0) { // If the countdown reaches below zero, stop the interval and display "Time's up!"
      clearInterval(interval);  
      timerElement.innerHTML = "Time's up!";
    } else { // Otherwise, update the timer display with the current countdown value
      timerElement.innerHTML = countdown;
    }   
  }, 1000); // Update every 1000 milliseconds (1 second)
}

const countdown = () => {
  var seconds = document.getElementById("countdownInput").value;
  const tick = () => {
    seconds = seconds -1;
    timer.innerHTML = seconds;
    var time = setTimeout(tick,1000);
    if (seconds == -1) {
      timer.innerHTML = "Time's up!"
      clearTimeout(time);
      timer.innerHTML = "";
    }
  }
}
