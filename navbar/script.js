const navBar = document.querySelector("nav")
const navButton = document.querySelector(".btnResponsive")
navBarIsActive = false
const size = window.innerWidth

navButton.addEventListener('click', ()=>{

    if (!navBarIsActive){
        console.log(navBarIsActive);
        // Agrandissement du menu
        navBar.className.height = "45vh"
        navBarIsActive = true
        // Changement du boutton
        navButton.className += " btnResponsiveActive";
        // Apparition des items menu
        document.querySelector("ul").className += " ulactive"

    }
    else{
        console.log(navBarIsActive);
        navBar.style.height = "100px"
        navBar.style.flexDirection = "row"
        navBarIsActive = false
        document.querySelector("ul").className -= " ulactive"

    }
})  

if (size > 900){
    navBar.style.height = "100px"
}