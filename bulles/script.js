const btn = document.querySelector(".btn-center")

btn.addEventListener('click', () => {
    btn.classList.toggle("active")

    for (let i = 1; i<9; i++){
        document.querySelector(`.item${i}`).classList.toggle("return")
    }
})