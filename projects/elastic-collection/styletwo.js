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
function cleanArray(printcovers){
  for(i=0;i < printcovers.length;i++){
      if(typeof printcovers[i] == "undefined"){
          printcovers[i]="";//OR SPLICE IT OU WITH splice()
      }
  }
}
cleanArray(printcovers);
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

for (var i in printcovers)
{
  Logger.log(printcovers[i].id + " :: " + ((printcovers[i].fields["brand"] == null) ? "brand unknown" : printcovers[i].fields["brand unknown"]));
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
    printcoverValue.innerText = "$" + printcover.fields.value;
    printcoverContainer.appendChild(printcoverValue);




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
