 window.addEventListener("mousemove", function(event){
   console.log(event);
   console.log("X:" , event.pageX);
   console.log("Y:" , event.pageY);
 });
  
//  let myCursor = document.querySelector(".customCursor");
 
//  window.addEventListener("mousemove", function(event){
//    console.log(event);
//    console.log("X:" , event.pageX);
//    console.log("Y:" , event.pageY);
//    console.log(myCursor);
//    myCursor.style.top = event.pageY + "px";
//    myCursor.style.left = event.pageX + "px";
//  });
 
 
 let myCursor = document.querySelector(".customCursor");
 
 window.addEventListener("mousemove", function(event){
   console.log(event);
   console.log("X:" , event.pageX);
   console.log("Y:" , event.pageY);
   console.log(myCursor);
   //subtract half the heigth and width from each
   myCursor.style.top = event.pageY - 50 + "px";
   myCursor.style.left = event.pageX - 50 + "px";

 });
 var color = [, "#3C9EE7", "#E7993C", 
        "#E73C99", "#3CE746", "#E7993C"];
  
    document.querySelector("div").addEventListener(
            "mouseover", function () {
                  
        document.querySelector("div").style.background 
            = color[Math.floor(Math.random() * color.length)];
    })

