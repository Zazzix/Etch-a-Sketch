const getSize = document.querySelector(".size")
const canvas = document.querySelector(".canvas")


getSize.addEventListener('click', () => {


    for (i = 1; i <= 32; i++) {
        const div = document.createElement('div')
        div.classList.add("square")
        canvas.appendChild(div)
    }
})