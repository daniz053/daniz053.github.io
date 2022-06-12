fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json))

  var ul = document.querySelector("ul");

  async function getTodos() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos"
    );
    let data = response.json();
    return data;
  }
  
  getTodos().then((response) => {
      console.log(response);
      var text="";
      response.forEach(element => {
          var tag = document.createElement ("li");
          var text = document.createTextNode (element.title);
          if (element.completed != false) {
              tag.style.textDecoration = "line-Through";
              tag.style.fontStyle = "italic";
              tag.style.color = "grey";
          }
  
          var el = document.getElementById("result");
          tag.appendChild(text);
          el.appendChild(tag);
          });
      })
  
  getTodos();

// async function getPeople() { 
//   let response = await fetch(
//     "https://jsonplaceholder.typicode.com/comments"
//   ); 
//   let data = response.json(); 
//   return data; 
// }

// getPeople().then((data) => {
//   makeList(data.records);
// });

// function makeList(records) {
//   for (let i = 0; i < records.length; i++) {
//     let name = records[i].fields.name;
//     let body = records[i].fields.body;
//     let listItem = document.createElement("li");
    
//     if(id > 8) {
//       listItem.style.color = 'black';
//     }
    
//     listItem.appendChild(document.createTextNode(name));
//     ul.appendChild(listItem);
//   }
// }