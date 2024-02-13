
function backToMenu(){
    const addContainer = document.querySelector(".addpic-container") as HTMLElement
const dropdownContainer = document.querySelector(".dropdown-container") as HTMLElement
const hamburgerMenu = document.querySelector('.hamburger-2') as HTMLImageElement

hamburgerMenu.addEventListener('click',() => {
    addContainer.style.display = "none"
dropdownContainer.style.display = "flex"

})
}

const upload = document.getElementById("upload") as HTMLElement;
const fileChosen = document.getElementById("file-chosen")!;

function showFile() {
    upload?.addEventListener('change', function() {
        if (fileChosen) {
            fileChosen.textContent = (this as HTMLInputElement).files![0].name;
        }
    });
}

showFile();











function handleFileUpload() {
    const uploadInput = document.getElementById('upload') as HTMLInputElement;
    const fileChosen = document.getElementById('file-chosen') as HTMLElement;
    const submitBtn = document.querySelector('.addBtn') as HTMLElement;
    const descriptionInput = document.querySelector('.add-description') as HTMLInputElement;
    const photographerInput = document.querySelector('.photographer') as HTMLInputElement;
    /* const uploadPicSection = document.querySelector('.uploaded-pic') as HTMLElement */

    uploadInput.addEventListener('change', (event) => {
        const file = (event.target as HTMLInputElement).files![0];
        if (file) {
            fileChosen.textContent = file.name;
        } else {
            fileChosen.textContent = 'No file chosen';
        }
    });

    submitBtn.addEventListener('click', () => {
        const file = uploadInput.files![0];
        if (!file) {
            alert('Please choose a file.');
            return;
        }

        const description = descriptionInput.value;
        const photographer = photographerInput.value;

        // Perform additional validation if needed

        const uploadedImage = document.createElement('img');
        uploadedImage.src = URL.createObjectURL(file);
        uploadedImage.alt = 'Uploaded Image';
        uploadedImage.style.maxWidth = '100%';

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = `Description: ${description}`;

        const photographerElement = document.createElement('p');
        photographerElement.textContent = `Photographer: ${photographer}`;

        uploadInput.value = '';
        descriptionInput.value = '';
        photographerInput.value = '';

        const uploadedImageContainer = document.querySelector('.uploaded-pic')!;
        uploadedImageContainer.innerHTML = '';
        uploadedImageContainer.appendChild(uploadedImage);
        uploadedImageContainer.appendChild(descriptionElement);
        uploadedImageContainer.appendChild(photographerElement);
    });
}







export default {backToMenu, showFile, handleFileUpload}