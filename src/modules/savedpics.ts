


function backToMenu(){
    const hamburgerMenu = document.querySelector('.hamburger-3') as HTMLImageElement
    const dropdownContainer = document.querySelector(".dropdown-container") as HTMLElement
    const savedPicContainer = document.querySelector(".savedpics-container") as HTMLElement

hamburgerMenu.addEventListener('click',() => {
    savedPicContainer.style.display = "none"
dropdownContainer.style.display = "flex"

})
}
























export default{backToMenu}