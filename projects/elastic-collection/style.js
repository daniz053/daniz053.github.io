console.log("hi there");
let wrapper = document.querySelector(".wrapper");

var Airtable = require('airtable');
var base = new Airtable({ apiKey: "keyOInlFujAUpPC0f" }).base(
  "appi4i01ehJf6jzVP"
);


// get our collection base, select all the records
// specify functions that will receive the data
base("elastic")
  .select({})
  .eachPage(gotPageOfPrintcovers, gotAllPrintcovers);

// an empty array to hold our data
var printcovers = [];

// callback function that receives our data
function gotPageOfPrintcovers(records, fetchNextPage) {
  console.log("gotPageOfPrintcovers()");
  // add the records from this page to our array
  printcovers.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllPrintcovers(err) {
  console.log("gotAllPrintcovers()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogPrintcovers();
  showPrintcovers();
}


function consoleLogPrintcovers() {
  console.log("consoleLogPrintcovers()");
  printcovers.forEach(printcover => {
    console.log("Printcovers:", printcover);
  });
}


function showPrintcovers() {
  console.log("showPrintcovers()");
  printcovers.forEach((printcover) => {
    


    let printcoverContainer = document.createElement("div");
    printcoverContainer.classList.add("printcoverContainer");
    wrapper.appendChild(printcoverContainer);

    let attachmentsHolder = document.createElement("img");
    if ( printcover.fields.attachments ) {
      console.log('test', printcover.fields.attachments);
      attachmentsHolder.src = printcover.fields.attachments[0].url;
      attachmentsHolder.classList.add("printcoverAttachments");
      printcoverContainer.appendChild(attachmentsHolder);
    }

    let printcoverBrand = document.createElement("h1");
    printcoverBrand.classList.add("printcover");
    printcoverBrand.innerText = "Brand: " + printcover.fields.brand;
    printcoverContainer.appendChild(printcoverBrand);

    let printcoverDatepublished = document.createElement("p");
    printcoverDatepublished.classList.add("datepublished");
    printcoverDatepublished.innerText = "Year Published: " + printcover.fields.datepublished;
    printcoverContainer.appendChild(printcoverDatepublished);

    let printcoverValue = document.createElement("p");
    printcoverValue.classList.add("value");
    printcoverValue.innerText = "Value: $" + printcover.fields.value;
    printcoverContainer.appendChild(printcoverValue);

  });
    
    // clean up names of tags to be lower case without spaces
    let datepublished = printcover.fields.datepublished;
    datepublished.forEach(function(datepublished) {
      let datepublishedClassName = slugify(datepublished);
      console.log('datepublishedClassName', datepublishedClassName);
      attachmentsHolder.classList.add(datepublishedClassName);
    });

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

const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

const texts = [
  "Click",
  "Here",
  "To",
  "Visit",
  "The",
  "Queer",
  "Eroticism",
  "Print",
  "Archives"
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }

      doMorph();
  } else {
      doCooldown();
  }
}

animate();
