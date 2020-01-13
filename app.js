const gridContainer = document.getElementById('grid-container');

const grid = {
    // default options
    size: 64,
    mode: 'black',
    // builds the matrix of divs based on current size
    build() {
        for (let i = 0; i < this.size; i++) {
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            gridContainer.appendChild(rowDiv);
        }
        const rows = document.getElementsByClassName('row')
        for (let row of rows) {
            for (let i = 0; i < this.size; i++) {
                let cell = this.cellSetup();
                row.appendChild(cell);
            } 
        }
    },
    // method to reset size with upper and lower bounds
    // max and min on the number input don't seem to work?
    setSize(input) {
        if (input > 150)
            input = 150;
        else if (input < 2)
            input = 2;
        this.size = input;
    },
    
    // during a build, this method is called to build each cell 
    cellSetup() {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        return this.addCellMode(cell)
    },

    // during each cell setup, this method is called to set cell up based on mode
    addCellMode(cell) {
        if (this.mode === 'black') {
            cell.addEventListener('mouseover', function() {
                this.classList.add('black');
            })
            return cell;
        } else if (this.mode === 'scale') {
            cell.style.opacity = 0.0;
            cell.classList.add('black');
            cell.addEventListener('mouseover', function() {
                this.style.opacity = Number(this.style.opacity) + 0.1;
            })
            return cell;
        }
    },

    setMode(mode) {
        this.mode = mode;
    },

    // destroys all cells and rows one by one 
        // saw this on stackex, prevents memory leak I think?
    // then sets the size based on input field and does a build
    reset() {
        const rows = document.getElementsByClassName('row')
        for (let row of rows) {
            while (row.firstChild) {
                row.removeChild(row.firstChild)
            }
        } 
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild)
        }
        grid.setSize(document.querySelector('#grid-size').value);
        grid.build();
    }
}

const controls = {
    set() {
        const buttons = document.querySelectorAll("button");
        for (let button of buttons) {
            button.addEventListener("click", this[button.id])
        }
    },

    // methods for different button click listeners 
    hitReset() {
        grid.reset();
    },
    hitBlack() {
        grid.setMode('black');
        grid.reset();
    },
    hitScale() {
        grid.setMode('scale');
        grid.reset();
    },
}

grid.build();
controls.set();

