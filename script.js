function populateContainer(size) {
  let tempContainer = document.createDocumentFragment();

  for (let column = 0; column < size; column++) {
    let rowBlock = document.createElement('div');
    rowBlock.classList.add('rowBlock')

    for (let row = 0; row < size; row++) {
      let block = document.createElement('div');
      block.classList.add('block');
      block.style = "background-color: hsl(0, 0%, 100%);"
      rowBlock.appendChild(block);
    }

    tempContainer.appendChild(rowBlock);
  }

  container.appendChild(tempContainer);
  container.addEventListener('mouseover', fillBlock);
  changeSizebtn.addEventListener('click', changeDialog);

}

function fillBlock(e) {
  e.stopPropagation();
  let styleText = e.target.style.cssText;
  let bgValues = (styleText.slice(22, styleText.length - 2)).split(',');
  let newBGValues = [];
  for (bgValues of bgValues) {
    newBGValues.push(Number(bgValues) - 26);
  }
  e.target.style.cssText = `background-color: rgb(${newBGValues.toString()})`; 
  // e.target.classList.add('hovered');
}

function changeDialog() {
  let newSize;
  do {
    newSize = Number(prompt('New Size must be between 1 and 100'));
  } while (newSize < 1 || newSize > 100);

  clearBoard();
  populateContainer(newSize);
}

function clearBoard() {
  console.log(container);
  while (container.firstElementChild) {
    container.removeChild(container.firstElementChild);
  }
}

let size = 16;
let container = document.querySelector('.container');
let changeSizebtn = document.querySelector('.changeSizeBtn');
populateContainer(size);