// Build the matrix of divs
const gridSize = 200;

const gridContainer = document.getElementById('grid-container');

for (let i = 0; i < gridSize * .8; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    gridContainer.appendChild(rowDiv);
}

const rows = document.getElementsByClassName('row')

for (let row of rows) {
    for (let i = 0; i < gridSize; i++) {
        let colDiv = document.createElement('div');
        colDiv.classList.add('cell');
        colDiv.addEventListener('mouseover', function() {this.classList.add('drawn')})
        row.appendChild(colDiv);
    } 
}

