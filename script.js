let colors = document.getElementsByClassName("color");

for (let i of colors) {
  i.addEventListener("click", (e) => {
    setActiveColor(e.target.textContent);
  });
}

let activeColorPaint = "";

function setActiveColor(color) {
  console.log(color);
  let activeColor = document.getElementById("active-color");
  activeColor.innerText = color;
  activeColor.style = `color: ${color}`;
  activeColorPaint = color;
}
