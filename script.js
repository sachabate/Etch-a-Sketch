// JavaScript script
let gridSize = 50;
const colorPicker = document.getElementById("colorSelect");

// color selection
let workingColor = colorPicker.value;
colorPicker.addEventListener("input", function(){
    workingColor = colorPicker.value;
    console.log(workingColor)
}, false);

// mouse click detect
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// grid generation
const grid = document.querySelector('#grid');
drawGrid();
function drawGrid() {
    for (let index = 0; index < gridSize; index++) {
        const div = document.createElement('div');
        div.classList.add('column');
        div.classList.add(index);

        for (let i = 0; i < gridSize; i++) {
            const gridElement = document.createElement('div');
            gridElement.classList.add('gridElement');
            gridElement.addEventListener('mouseover', paint);
            gridElement.addEventListener('mousedown', paint);
            div.appendChild(gridElement);
        }
        grid.appendChild(div);
    }
}

const gridButtons = document.querySelectorAll('button.gridButton');
gridButtons.forEach((button) => {
    button.addEventListener('click', () => {
        gridSize = button.id;
        drawNewGrid();
    })
})

function clearGrid() {
    grid.innerHTML = '';
}

function drawNewGrid() {
    clearGrid();
    drawGrid();
}

shake = document.querySelector('#shake');
shake.addEventListener('click', () => {
    drawNewGrid();
})

// element painting
function paint(e) {
    if (e.type === 'mouseover' && !mouseDown) {return};
    e.target.style.backgroundColor = workingColor;
    console.log(workingColor);
}

// drawGrid();