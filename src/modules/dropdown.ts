
const dropdownContainer = document.querySelector(".dropdown-container") as HTMLElement
const hamburgerMenu = document.querySelector('.hamburger-1') as HTMLImageElement
const starpageContainer = document.querySelector(".starpage-container") as HTMLElement
const addButton = document.querySelector(".add-pic") as HTMLElement
const addContainer = document.querySelector(".addpic-container") as HTMLElement
const savedButton = document.querySelector(".saved-pic") as HTMLElement
const savedPicsContainer = document.querySelector(".savedpics-container") as HTMLElement
const uploadContainer = document.querySelector(".uploaded-container") as HTMLElement
const uploadButton = document.querySelector('.upload-pics') as HTMLElement

function  returnFunction (){

hamburgerMenu.addEventListener('click',() => {
starpageContainer.style.display = "flex"
dropdownContainer.style.display = "none"

})
}

function addPicContainer (){
    addButton.addEventListener('click',() => {
        addContainer.style.display = "flex"
        dropdownContainer.style.display = "none"
        
        })

    
}

function savedPicContainer (){
    savedButton.addEventListener('click', ()=>{
        savedPicsContainer.style.display ="flex"
        dropdownContainer.style.display = "none"
        /* heart.style.visibility = "hidden" */

    })
}

function uploadPicContainer(){
    uploadButton.addEventListener('click', ()=>{
        uploadContainer.style.display = "flex"
        dropdownContainer.style.display= "none"
    })
}




export default { returnFunction, addPicContainer,savedPicContainer,uploadPicContainer };