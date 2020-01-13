// Build the matrix of divs

const gridContainer = document.getElementById('grid-container');

const grid = {
    gridSize: 64,
    setSize(num) {
        this.gridSize = num;
    },
    build() {
        for (let i = 0; i < this.gridSize; i++) {
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            gridContainer.appendChild(rowDiv);
        }

        const rows = document.getElementsByClassName('row')

        for (let row of rows) {
            for (let i = 0; i < this.gridSize; i++) {
                let colDiv = document.createElement('div');
                colDiv.classList.add('cell');
                colDiv.addEventListener('mouseover', function() {this.classList.add('black')})
                row.appendChild(colDiv);
            } 
        }
    }
}

grid.build();


