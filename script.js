function drawGrid(size = 16) {

  clearGrid();
  
  let gridRow = document.createElement("div");

  for (let row = 0; row < size; row++) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");

    for (let column = 0; column < size; column++) {
      let box = document.createElement("div");
      gridRow.appendChild(box);
    }

    body.appendChild(gridRow);
  }

  let panels = document.querySelectorAll(".gridRow > div");
  panels.forEach((panel) => panel.addEventListener("mouseover", fillPanel));
}

function clearGrid() {

    while (body.hasChildNodes) {
      if (body.childElementCount === 1) {
        break;
      }
      body.removeChild(body.lastElementChild);
    }  
}

function fillPanel() {
  this.style.backgroundColor = "black";
}

function setGridSize() {
  let size = 0;
  do {
    size = parseInt(prompt("Enter number of square: "));
  } while(size > 100 || size < 1);

  drawGrid(size);
  console.log(size);
}

let body = document.querySelector("body");
drawGrid();

let changeGridBtn = document.querySelector("button");
changeGridBtn.addEventListener("click", setGridSize);
