//HÄmta dom elementen
const dropdownContainer = document.querySelector(".dropdown-container") as HTMLElement
const hamburgerMenu = document.querySelector('.hamburger-1') as HTMLImageElement
const starpageContainer = document.querySelector(".starpage-container") as HTMLElement
const addButton = document.querySelector(".add-pic") as HTMLElement
const addContainer = document.querySelector(".addpic-container") as HTMLElement
const savedButton = document.querySelector(".saved-pic") as HTMLElement
const savedPicsContainer = document.querySelector(".savedpics-container") as HTMLElement
const uploadContainer = document.querySelector(".uploaded-container") as HTMLElement
const uploadButton = document.querySelector('.upload-pics') as HTMLElement


//ta mig tillbaka till startpage
function  returnFunction (){

hamburgerMenu.addEventListener('click',() => {
starpageContainer.style.display = "flex"
dropdownContainer.style.display = "none"

})
}
// ta mig till addpic vyn
function addPicContainer (){
    addButton.addEventListener('click',() => {
        addContainer.style.display = "flex"
        dropdownContainer.style.display = "none"
        
        })

    
}
// ta mig till savedpics vyn
function savedPicContainer (){
    savedButton.addEventListener('click', ()=>{
        savedPicsContainer.style.display ="flex"
        dropdownContainer.style.display = "none"
        /* heart.style.visibility = "hidden" */

    })
}
//ta mig till uploads vyn
function uploadPicContainer(){
    uploadButton.addEventListener('click', ()=>{
        uploadContainer.style.display = "flex"
        dropdownContainer.style.display= "none"
    })
}



//exportera skitteen
export default { returnFunction, addPicContainer,savedPicContainer,uploadPicContainer };