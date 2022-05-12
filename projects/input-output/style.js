console.clear();
const elements = document.querySelectorAll('[data-js="filter"]');
if (elements.length) {
  import('https://assets.stoumann.dk/js/css-filter.mjs')
    .then(module => {
    const jsClass = module.default;
    elements.forEach(element => {
      new jsClass(element, element.dataset, presets);
    });
  })
}
const video = document.querySelector('.video');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
var takePhotoButton = document.querySelector('button#takePhoto');
const filterBtn = [...document.querySelectorAll('.filter')];
let interval;

function getVedio(){
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
  .then(localMediaStream => {
    console.log(localMediaStream)
    video.srcObject = localMediaStream;
    // video.src = window.URL.createObjectURL(localMediaStream);
    video.play();
  })
  .catch(err =>
    console.error('Oops')
  )
};

function paintToCanvas(){
  const width = video.videoWidth;
  const height = video.videoHeight;
  let filterType = this.dataset.filter || 0;
  console.log(this.dataset, 'hi', filterType);
  
  canvas.width = width;
  canvas.height = height;
  
  clearInterval(interval);
  

  return interval = setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    
    let pixels = ctx.getImageData(0, 0, width, height);

    if(filterType == 1){
      pixels = rainbowEffect(pixels);  
    } else if(filterType == 2){
      pixels = pinkEffect(pixels);
    } else if(filterType == 3){
      pixels = greenEffect(pixels);   
    }else if(filterType == 4){
      pixels = blueEffect(pixels);
    }else if(filterType == 5){
      pixels = orangeEffect(pixels);
    }else if(filterType == 6){
      pixels = ghostEffect(pixels);
    }
    ctx.putImageData(pixels, 0, 0);
  },16);
}

function rainbowEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function pinkEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 200] = pixels.data[i + 3]; // GREEN
    pixels.data[i - 150] = pixels.data[i + 6]; // Blue
  }
  return pixels;
}

function greenEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=2) {
    pixels.data[i + 200] = pixels.data[i + 0] * 0.5; // RED
    pixels.data[i + 200] = pixels.data[i + 0] * 0.5; // GREEN
    pixels.data[i + 300] = pixels.data[i + 0] * 0.5; // Blue
  }
      return pixels;
    }
function blueEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i + 0] = pixels.data[i + 0] - 50; // RED
    pixels.data[i + 1] = pixels.data[i + 1] * 0.5; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] + 100; // Blue
  }
      return pixels;
    }
function orangeEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=2) {
    pixels.data[i + 550] = pixels.data[i + 200] * 255; // RED
    pixels.data[i - 1] = pixels.data[i - 1] + 0; // GREEN
    pixels.data[i - 1] = pixels.data[i - 1] + 0; // Blue
  }
      return pixels;
    }
function ghostEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=3) {
            pixels.data[i * 2] = pixels.data[i + 0]; // RED
            pixels.data[i + 0] = pixels.data[i + 0]; // GREEN
            pixels.data[i - 0] = pixels.data[i + 200]; // Blue
          }
          return pixels;
        }
        

getVedio();
video.addEventListener('canplay', paintToCanvas);
filterBtn.map(node => node.addEventListener('click', paintToCanvas));

function setup() {
  createCanvas(1260, 950);
  background(0, 50);
  // let button = document.querySelector('button#reset');
  // button.mousePressed(resetSketch);
}

function draw() {
  strokeWeight(20);
  stroke(100);;
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function mousePressed() {
  clear();
}
