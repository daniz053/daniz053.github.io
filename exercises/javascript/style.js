var anythingIWant = document.body;
var isDark = false;

var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click", changeToDarkMode);

function changeToDarkMode() {
  if(isDark === true) {
  
  darkModeButton.textContent = "activate dark mode";
  document.body.style.background = "#ff00a6";
  document.body.style.color = "black";
  isDark = false;
  console.log("dark mode is off.");
    
  } else if(isDark === false){
    
  darkModeButton.textContent = "activate light mode";
  document.body.style.background = "black";
  document.body.style.color = "#ff00a6";
  isDark = true;
  console.log("dark mode is on!");
    
  }
}

  let colorImage = document.getElementById("colorImage");
  let button2 = document.getElementById("button2");
  
  function changeToBW() {
  
      if (colorImage.getAttribute('src') === "bimbo.png") {
          colorImage.setAttribute('src', "tweet.png");
      }
      else {
          colorImage.setAttribute('src', "bimbo.png");
      }
  }
  
  button2.addEventListener("click", changeToBW);


function toggleImage(){
  document.querySelector('#image').classList.toggle('hidden');
}

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function runClock(clock, timediff=0) {
  

  var now = new Date()
  
  
  var hour = ((now.getUTCHours() + timediff) % 12)
  
 
  var min = now.getUTCMinutes()
  var sec = now.getUTCSeconds()
  var ms = now.getUTCMilliseconds()
  
  
  var hourHand = clock.querySelector(".hour")
  var minHand = clock.querySelector(".minute")
  var secHand = clock.querySelector(".second")
  
  
  var secRotation = (sec * 6) + (ms * 0.006)
  
 
  var minRotation = (min * 6) + (sec * 0.1)
  
 
  var hourRotation = (hour * 30) + (min * 0.1)
  
 
  hourHand.style.transform = "rotate(" + hourRotation + "deg)"
  minHand.style.transform = "rotate(" + minRotation + "deg)"
  secHand.style.transform = "rotate(" + secRotation + "deg)"
  
 
  requestAnimationFrame(function () {
    runClock(clock, timediff)
  })
}
runClock(document.querySelector(".clock-newyork"), -4)

