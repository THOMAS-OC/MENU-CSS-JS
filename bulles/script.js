const btn = document.querySelector(".btn-center")
console.log("hello");
const list_btn = document.querySelectorAll(".btn-item")

btn.addEventListener('click', () => {
    btn.classList.toggle("active")

    for (let i = 1; i<9; i++){
        document.querySelector(`.item${i}`).classList.toggle("return")
    }
    // document.querySelector(".item1").classList.toggle("return")
})