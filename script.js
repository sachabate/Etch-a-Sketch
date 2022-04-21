// JavaScript script
const GRID_SIZE = 50;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const grid = document.querySelector('#grid');
for (let index = 0; index < GRID_SIZE; index++) {
    const div = document.createElement('div');
    div.classList.add('column');
    div.classList.add(index);

    for (let i = 0; i < GRID_SIZE; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('gridElement');
        gridElement.addEventListener('mouseover', paint);
        gridElement.addEventListener('mousedown', paint);
        div.appendChild(gridElement);
    }
    grid.appendChild(div);
}

function paint(e) {
    if (e.type === 'mouseover' && !mouseDown) {return};
    e.target.style.backgroundColor = 'black';
}
