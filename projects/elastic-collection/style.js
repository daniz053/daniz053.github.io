const div1 = document.getElementById("data_brand");
const div2 = document.getElementById("data_datePublished");
const div3 = document.getElementById("data_printCovers");
const div4 = document.getElementById("data_imgs");

async function getPeople() {
  const response = await fetch(
    "https://api.airtable.com/v0/appi4i01ehJf6jzVP/Table%201?api_key=keyOInlFujAUpPC0f"
  );
  const data = response.json();
  return data;
}

getPeople().then((data) => {
  makeList(data.records);
});

function makeList(records) {
  console.log(`making list of ${records.length} records...`);

  for (let i = 0; i < records.length; i++) {
    const recordField = records[i].fields;
    const attachments = recordField.Attachments;

    if (attachments) {
      const listItem1 = document.createElement("div");
      const listItem2 = document.createElement("div");
      const listItem3 = document.createElement("div");
      const listItem4 = document.createElement("div");

      listItem1.appendChild(composeText(recordField.Brand));
      listItem2.appendChild(composeText(recordField.DatePublished));
      listItem3.appendChild(composeText(recordField.PrintCovers));
      listItem4.appendChild(composeImage(attachments));

      div1.appendChild(listItem1);
      div2.appendChild(listItem2);
      div3.appendChild(listItem3);
      div4.appendChild(listItem4);
    }
  }
}

function composeText(text) {
  return document.createTextNode(text);
}

function composeImage(attachments) {
  const attachment = attachments[0];
  const img = document.createElement("img");
  img.setAttribute("id", attachment.id);
  img.setAttribute("src", attachment.thumbnails.full.url);

  return img;
}










// const menu = document.querySelector(".menu");
// const menuItems = document.querySelectorAll(".menuItem");
// const hamburger= document.querySelector(".hamburger");
// const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// hamburger.addEventListener("click", toggleMenu);

// menuItems.forEach( 
//   function(menuItem) { 
//     menuItem.addEventListener("click", toggleMenu);
//   }
// )
