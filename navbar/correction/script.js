const btn = document.querySelector(".btn")
const nav = document.querySelector(".liste-nav")
console.log(nav);
document.addEventListener("click", () => {
    btn.classList.toggle('active')
    nav.classList.toggle('active-menu')
})
