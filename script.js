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
  // var randomColor = Math.floor(Math.random()*16777215).toString(16);
  // this.style.backgroundColor = '#' + randomColor;

  if(!this.style.backgroundColor) {
    this.style.backgroundColor = 'rgb(230, 230, 230)';
  } else {
    let val = this.style.backgroundColor.toString()
      .slice(4, this.style.backgroundColor.toString().length - 1).split(', ');
    this.style.backgroundColor = `rgb(${val[0] - 26}, ${val[0] - 26},
      ${val[0] - 26})`;
  }
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
