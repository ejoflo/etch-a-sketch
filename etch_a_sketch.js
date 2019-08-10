let gridSize = 16;
let fullGrid = document.getElementById('fullGrid');

function gridSizer () {
    let gridButton = document.querySelector('#gridSize');
    let gridSquare = document.querySelectorAll('.square');

    gridButton.addEventListener('click', () => {
        gridSize = prompt('Enter the size of your grid: ', '16');        
        while (gridSize < 1) {
            gridSize = prompt('Please enter a grid size larger than 0: ', '16');    
        }
        clearGrid();
        createGrid(gridSize);
        changeColor();
    });
}

function createGrid (size) {
    let gridSquare = document.createElement('div');

    fullGrid.setAttribute('style', 'grid-template: repeat(' + size + ', 1fr) / repeat(' + size + ', 1fr);');
    
    for (let i = 0; i < (size * size); i++) {
        gridSquare = document.createElement('div');
        gridSquare.classList = 'square'; 
        fullGrid.appendChild(gridSquare);
    }
}

function changeColor () {
    let colorSquare = document.querySelectorAll('.square');

    for (let i = 0; i < colorSquare.length; i++) {
        colorSquare[i].addEventListener('mouseenter', () => {
            colorSquare[i].classList = 'colorSquare';
        });
    }
}

function randomColor () {
    let randomSquare = document.querySelectorAll('.square');
    let r, g, b;

    for (let i = 0; i < randomSquare.length; i++) {
        randomSquare[i].addEventListener('mouseenter', () => {
            r = Math.random() * 255;
            g = Math.random() * 255;
            b = Math.random() * 255;
            randomSquare[i].classList = 'randomColorSquare';
            randomSquare[i].setAttribute('style', 'background-color: rgb(' + r + ',' + g + ',' + b + ')');
        });
    }
}

function fadedColor () {
    let fadedSquare = document.querySelectorAll('.square');
    let opacity = new Array(fadedSquare.length).fill(0.5);
    
    for (let i = 0; i < fadedSquare.length; i++) {
        fadedSquare[i].addEventListener('mouseenter', () => {
            fadedSquare[i].classList = 'fadedSquare';
            fadedSquare[i].setAttribute('style', 'opacity: ' + opacity[i]);
            if (fadedSquare[i].style.opacity <= 1) { 
                opacity[i] = opacity[i] + 0.1;
            }
        });
    }
}

function oneColorGrid () {
    let oneColorButton = document.querySelector('#colorGrid');
   
    oneColorButton.addEventListener('click', () => {
        clearGrid();
        createGrid(gridSize);
        changeColor();
    });
}

function randomGrid () {
    let randomButton = document.querySelector('#randomGrid');
   
    randomButton.addEventListener('click', () => {
        clearGrid();
        createGrid(gridSize);
        randomColor();
    });
}

function fadeGrid () {
    let fadedButton = document.querySelector('#fadeGrid');
   
    fadedButton.addEventListener('click', () => {
        clearGrid();
        createGrid(gridSize);
        fadedColor();
    });
}

function clearGrid () {
    while (fullGrid.hasChildNodes()) {
        fullGrid.removeChild(fullGrid.firstChild);
    }
}

createGrid(gridSize);
changeColor();
randomGrid();
fadeGrid();
oneColorGrid();
gridSizer();
