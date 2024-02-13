const hamburgerMenu = document.querySelector('.hamburger-4') as HTMLImageElement
const dropdownContainer = document.querySelector(".dropdown-container") as HTMLElement
const onsavedPicContainer = document.querySelector(".onsaved-container") as HTMLElement
const backBtn = document.querySelector('.backBtn') as HTMLImageElement
const savedPicsContainer= document.querySelector('.savedpics-container') as HTMLElement
function backToMenu(){

hamburgerMenu.addEventListener('click',() => {
    onsavedPicContainer.style.display = "none"
dropdownContainer.style.display = "flex"

})
}

function backOneStep(){
    backBtn.addEventListener('click', () => {
        onsavedPicContainer.style.display = "none"
        savedPicsContainer.style.display = "flex"

    })
}






export default{backToMenu, backOneStep}