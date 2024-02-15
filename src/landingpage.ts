//importerar min scss och alla mina ts moduler.

import "./scss/styles.scss";
import startpageFunctions from "./modules/startpage";
import dropdownFunctions from "./modules/dropdown"
import addpicFunctions from "./modules/addpic"
import savedpicsFunctions from "./modules/savedpics"
import onsavedpicFunctions from "./modules/onsaved"
import uploadedFunctions from "./modules/uploaded";

uploadedFunctions.backToMenu();
onsavedpicFunctions.backToMenu();
onsavedpicFunctions.backOneStep();
savedpicsFunctions.backToMenu();
addpicFunctions.handleFileUpload();
addpicFunctions.backToMenu();
addpicFunctions.showFile();
dropdownFunctions.returnFunction();
dropdownFunctions.addPicContainer();
dropdownFunctions.savedPicContainer();
dropdownFunctions.uploadPicContainer();



startpageFunctions.fetchRandoPhotos().then(() => {
    startpageFunctions.randomPhotos();
});


///FRÅGA???/////
/* startpageFunctions.fetchAllPhotos(); */
/* startpageFunctions.showAllPhotos();
startpageFunctions.showMatches */


const logo = document.querySelector('.logo') as HTMLElement;
const landingContainer = document.querySelector(".landing-container") as HTMLElement;
const starpageContainer = document.querySelector(".starpage-container") as HTMLElement

//när man klickar på logan så ska landingpage gömmas och man kommer till startpage
logo?.addEventListener("click", ()=>{
    landingContainer.style.display = "none"
    starpageContainer.style.display = "flex"


})






