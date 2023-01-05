let drag = "false";
let colors = document.getElementsByClassName("color");
let container = document.getElementById("grid-container");
let num = 16;
let totalNum = num * num;
container.style.gridTemplateColumns = `repeat(${num} 1fr)`;
container.style.gridTemplateRows = `repeat(${num} 1fr)`;

document.addEventListener("mousedown", () => (drag = "true"));
document.addEventListener("mouseup", () => (drag = "false"));

for (i = 0; i < totalNum; i++) {
  const box = document.createElement("div");
  box.classList.add("grid-item");
  container.insertAdjacentElement("beforeend", box);
  if ((drag = "true")) {
    box.addEventListener("mouseover", changeColor);
  } else {
    box.addEventListener("click", changeColor);
  }
}

for (let i of colors) {
  i.addEventListener("click", (e) => {
    setActiveColor(e.target.textContent);
  });
}

let activeColorPaint = "";

function setActiveColor(color) {
  let activeColor = document.getElementById("active-color");
  activeColor.innerText = color;
  activeColor.style = `color: ${color}`;
  activeColorPaint = color;
}
function changeColor() {
  this.style = `background-color: ${activeColorPaint}`;
}
