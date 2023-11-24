const addSmallGrid = document.querySelector('.small');
const addMediumGrid = document.querySelector('.medium');
const addBigGrid = document.querySelector('.big');
const gridArea = document.querySelector('.grid_area');

addSmallGrid.addEventListener('click', () => {
    gridArea.innerHTML = '';
    for (let i = 1; i <= 256; i++) {
        gridArea.setAttribute('style', 'grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);');
        const box = document.createElement('div');
        gridArea.appendChild(box);
        box.classList.add('grid-element');


        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'black';
        })
    }
});

addMediumGrid.addEventListener('click', () => {
    gridArea.innerHTML = '';
    for (let i = 1; i <= 4096; i++) {
        gridArea.setAttribute('style', 'grid-template-columns: repeat(64, 1fr); grid-template-rows: repeat(64, 1fr);');
        const box = document.createElement('div');
        gridArea.appendChild(box);
        box.classList.add('grid-element');

        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'black';
        })
    }
});

addBigGrid.addEventListener('click', () => {
    gridArea.innerHTML = '';
    for (let i = 1; i <= 10000; i++) {
        gridArea.setAttribute('style', 'grid-template-columns: repeat(100, 1fr); grid-template-rows: repeat(100, 1fr);');
        const box = document.createElement('div');
        gridArea.appendChild(box);
        box.classList.add('grid-element');


        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'black';
        })
    }
});



