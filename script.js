let colorMenu = document.querySelector(".uitklapmenu");
let menuImg = document.querySelector(".uitklapmenu img");
let colorChoice = document.querySelector(".uitklapmenu ul");
let colors = document.querySelectorAll(".uitklapmenu ul li");
let colorsLinks = document.querySelectorAll(".uitklapmenu ul li a");
let home = document.querySelector("#menu-item-1 a");
let red = document.querySelector("#menu-item-2 a");
let blue = document.querySelector("#menu-item-3 a");
let green = document.querySelector("#menu-item-4 a");
let yellow = document.querySelector("#menu-item-5 a");
let purple = document.querySelector("#menu-item-6 a");
let bgPage = document.querySelector(".bg");

let titleH2 = document.querySelector("h2");

menuImg.addEventListener('mouseover', function(){
  colorMenu.classList.toggle('visibility');
});

home.addEventListener("click", function(){
  const bgColor = document.body.style.backgroundColor;

  if (bgColor === 'white'){
    document.body.style.backgroundColor = "white";
  }
  else {
    document.body.style.backgroundColor = "white"
  }

  colorMenu.classList.add('visibility');

  document.querySelector(".bgName p").innerHTML = "";
}); 

red.addEventListener("click", function(){
  const bgColor = document.body.style.backgroundColor;

  if (bgColor === 'red'){
    document.body.style.backgroundColor = "white";
  }
  else {
    document.body.style.backgroundColor = "red"
  } 

  colorMenu.classList.add('visibility');

  document.querySelector(".bgName p").innerHTML = "rood";
}); 

blue.addEventListener("click", function(){
  const bgColor = document.body.style.backgroundColor;

  if (bgColor === 'blue'){
    document.body.style.backgroundColor = "white";
  }
  else {
    document.body.style.backgroundColor = "blue"
  }

  colorMenu.classList.add('visibility');

  document.querySelector(".bgName p").innerHTML = "blauw";
}); 

green.addEventListener("click", function(){
  const bgColor = document.body.style.backgroundColor;

  if (bgColor === 'green'){
    document.body.style.backgroundColor = "white";
  }
  else {
    document.body.style.backgroundColor = "green"
  }

  colorMenu.classList.add('visibility');

  document.querySelector(".bgName p").innerHTML = "groen";
}); 

yellow.addEventListener("click", function(){
  const bgColor = document.body.style.backgroundColor;

  if (bgColor === 'yellow'){
    document.body.style.backgroundColor = "white";
  }
  else {
    document.body.style.backgroundColor = "yellow"
  }

  colorMenu.classList.add('visibility');

  document.querySelector(".bgName p").innerHTML = "geel";
}); 

purple.addEventListener("click", function(){
  const bgColor = document.body.style.backgroundColor;

  if (bgColor === 'blue'){
    document.body.style.backgroundColor = "white";
  }
  else {
    document.body.style.backgroundColor = "purple"
  }

  colorMenu.classList.add('visibility');

  document.querySelector(".bgName p").innerHTML = "paars";
}); 