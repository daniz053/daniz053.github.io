var anythingIWant = document.body;
var isDark = false;

var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click", changeToDarkMode);

function changeToDarkMode() {
  if(isDark === true) {
  
  darkModeButton.textContent = "dark mode";
  anythingIWant.style.background = "white";
  anythingIWant.style.color = "black";
  isDark = false;
  console.log("dark mode is off.");
    
  } else if(isDark === false){
    
  darkModeButton.textContent = "light mode";
  anythingIWant.style.background = "black";
  anythingIWant.style.color = "white";
  isDark = true;
  console.log("dark mode is on!");
    
  }
}

const btn = document.getElementById('colorchange');

btn.addEventListener('click', function onClick(event) {
  document.body.style.color = 'green';
});

function myFunction() {
    var x = document.getElementById("hello");
    if (x.innerHTML === "Hello fellow New Yorker...") {
      x.innerHTML = "don't you miss trees to?";
    } else {
      x.innerHTML = "Hello fellow New Yorker...";
    }
  }