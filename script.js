// JavaScript script
const GRID_SIZE = 16;

const grid = document.querySelector('#grid');
for (let index = 0; index < GRID_SIZE * GRID_SIZE; index++) {
    const div = document.createElement('div');
    div.classList.add('gridElement');
    grid.appendChild(div);
}