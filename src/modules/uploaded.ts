
const uploadContainer = document.querySelector(".uploaded-container") as HTMLElement
const dropdownContainer = document.querySelector(".dropdown-container") as HTMLElement
const hamburgerMenu = document.querySelector('.hamburger-5') as HTMLImageElement


function backToMenu(){

    hamburgerMenu.addEventListener('click',() => {
        uploadContainer.style.display = "none"
    dropdownContainer.style.display = "flex"
    
    })
    }






    export default{backToMenu}