//mouse

var mouseDown = false;
document.body.onmousedown= function(){
mouseDown= true;
console.log(mouseDown)
};
document.body.onmouseup = function(){
mouseDown = false;
console.log(mouseDown)
};
//cells size
let inputNum = document.getElementById('value').value;
let value = document.getElementById('value')

//create div
function create(inputNum){
let container = document.getElementById("grid-container");
let squares = container.querySelectorAll('div')
squares.forEach(div => div.remove());
container.style.gridTemplateColumns = `repeat(${inputNum} , 1fr)`;
container.style.gridTemplateRows = `repeat(${inputNum} , 1fr)`;
let total = inputNum*inputNum
if(inputNum >= 2 && inputNum <= 100){
for (i = 0; i < total ; i++) {
  const box = document.createElement("div");
  box.classList.add("grid-item");
  container.insertAdjacentElement("beforeend", box);
  
}
}else return
paint()
}

//choose color 
let colors = document.getElementsByClassName("color");
for (let i of colors) {
  i.addEventListener("click", (i) => {
    setActiveColor(i.target.textContent);
  });
}

//set active color

let activeColorPaint = "";

function setActiveColor(color) {
  let activeColor = document.getElementById("active-color");
  activeColor.innerText = color;
  activeColor.style = `color: ${color}`;
  activeColorPaint = color;
}

//paint
function paint(){
let gridCells = document.getElementsByClassName('grid-item')
for (let i of gridCells){
    i.addEventListener("mouseenter", (e) =>{
    changeColor(e)
  });
    i.addEventListener("mousedown",(e) =>{
     changeColorClick(e)
    });
  }
}

console.log(mouseDown)

function changeColorClick(e) {
  e.target.style = `background-color: ${activeColorPaint}`;
}

function changeColor(e) {
  if (mouseDown){
  e.target.style = `background-color: ${activeColorPaint}`;
};
}

  
