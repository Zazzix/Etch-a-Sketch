const getSize = document.querySelector(".size")
const canvas = document.querySelector(".canvas")




getSize.addEventListener('click', () => {

    let size = parseInt(prompt("Enter the Grid size from 1 to 100"));

    if (!isNaN(size) && size > 0 && size <= 100) {
        createGrid(size)
    } else {
        size = parseInt(prompt("Enter the Grid size from 1 to 100"));
        createGrid(size)
    }

})

function createGrid(size) {
    if (canvas.children.length > 0) {
        canvas.textContent = ""
    }
    canvas.style.gridTemplateColumns = `repeat(${size}, auto)`;
    canvas.style.gridTemplateRows = `repeat(${size}, auto)`;
    // canvas.setAttribute("gridTemplateColumns", "repeat(size, auto)");
    // canvas.setAttribute("gridTemplateRows", "repeat(size, auto)");
    // grid-template-columns: repeat(16, auto);
    // grid-template-rows: repeat(16, auto);
    for (let i = 1; i <= (size ** 2); i++) {
        const div = document.createElement('div')
        div.classList.add("square")
        div.addEventListener('mouseover', () => {
            div.classList.add("black-square")
        })
        canvas.appendChild(div)
    }
}