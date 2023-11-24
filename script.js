const addSmallGrid = document.querySelector('.small');
const gridArea = document.querySelector('.grid_area');

addSmallGrid.addEventListener('click', () => {
    for (let i = 1; i <= 256; i++) {
        const div = document.createElement('div');
        gridArea.appendChild(div);
        div.classList.add('grid-element');
    }
});



