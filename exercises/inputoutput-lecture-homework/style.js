function setup() {
    createCanvas(windowWidth, windowHeight);
  
    input = createInput();
    input.position(30, 230);
  
    button = createButton('submit');
    button.position(input.x + input.width, 230);
    button.mousePressed(greet);
  
    greeting = createElement('h2', 'fill this page with your thoughts to see the answer you need...');
    greeting.position(20, 10);
  
    textAlign(CENTER);
    textSize(50);
  }
  
  function greet() {
    const name = input.value();
    greeting.html('fill this page with your thoughts to see the answer you need...');
    greeting.html('you said:' + name + '!');
    input.value('');
  
    for (let i = 0; i < 200; i++) {
      push();
      fill(random(20), 20, 0);
      translate(random(width), random(height));
      rotate(random(2 * PI));
      text(name, 0, 0);
      pop();
    }
  }
  var anythingIWant = document.body;
  var isDark = false;
  
  var darkModeButton = document.getElementById("buttonDarkMode");
  darkModeButton.addEventListener("click", changeToDarkMode);
  
  function changeToDarkMode() {
    if(isDark === true) {
    
    darkModeButton.textContent = "show message";
    document.body.style.background = "#fe0094";
    document.body.style.color = "black";
    isDark = false;
    console.log("dark mode is off.");
      
    } else if(isDark === false){
      
    darkModeButton.textContent = "hide message";
    document.body.style.background = "black";
    document.body.style.color = "#ff00a6";
    isDark = true;
    console.log("dark mode is on!");
      
    }
  }
