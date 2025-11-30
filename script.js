const getSize = document.querySelector(".size")
const canvas = document.querySelector(".canvas")



getSize.addEventListener('click', () => {


    for (let i = 1; i <= 256; i++) {
        const div = document.createElement('div')
        div.classList.add("square")
        div.addEventListener('mouseover', () => {
            div.classList.add("black-square")
        })
        canvas.appendChild(div)
    }
})
