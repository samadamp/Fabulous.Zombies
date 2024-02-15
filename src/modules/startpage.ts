
//Hämta dom-element från html och lägger dem i variabler
const randomContainer = document.querySelector(".randomphoto-container") as HTMLElement;
const allPicsContainer = document.querySelector(".all-photos") as HTMLElement;
const allSavedPicsContainer = document.querySelector(".allsaved-pics") as HTMLElement;
const savedPicsContainer = document.querySelector(".savedpics-container") as HTMLElement
const inputField = document.querySelector(".search-photo") as HTMLInputElement;
const starpageContainer = document.querySelector(".starpage-container") as HTMLElement;
const dropdownContainer = document.querySelector(".dropdown-container") as HTMLElement;
const hamburgerMenu = document.querySelector('.hamburger') as HTMLImageElement;
const onSavedContainer = document.querySelector(".onsaved-container") as HTMLElement;
const onSavedPicSection = document.querySelector(".onsaved-pic") as HTMLElement;



//Varibaler för att lagra datan och API:et
let randomPic: any[] = [];
let allPhotos: any[] = [];

const key: string = "yRKpxgkuO4RUYgUui3EYuQH1iVwBKnaBsKXeaoiRAFo";
/* const key: string = "BpgiryeRx9j4PiE3soKO1TORVgwtI9SI4zU0jQxM-4I"; */
const randomurl: string = "https://api.unsplash.com/photos/random?client_id=";
const allurl: string = "https://api.unsplash.com/photos/?client_id=";
const localStorageKey: string = "favorite_images";

//hämta slumpmässigbild
async function fetchRandoPhotos(): Promise<void> {
    try {
        const response = await fetch(`${randomurl}${key}`);

        if (!response.ok) {
            throw new Error("Failed to fetch photos");
        }

        const data = await response.json();

        if (typeof data === 'object' && data !== null) {
            randomPic.push(data);
        } else {
            console.error("Invalid data format received from the API");
        }

        console.log(randomPic);
        randomPhotos(data);
    } catch (error) {
        console.error("ERROR FETCHING PHOTOS", error);
    }
};


//hämta alla foton från API:et
async function fetchAllPhotos(): Promise<void>  {
    try {
        const response = await fetch(`${allurl}${key}`);

        if (!response.ok) {
            throw new Error("Failed to fetch photos");
        }

        const data = await response.json();

        if (Array.isArray(data)) {
            data.forEach((photo: any) => {
                const photographerName = photo.user && photo.user.name;
                photo.photographerName = photographerName || "Unknown Photographer";
            });

            allPhotos = data;
        } else {
            console.error("Invalid data format received from the API");
        }

        console.log(allPhotos);
        showAllPics(allPhotos);
    } catch (error) {
        console.error("ERROR FETCHING PHOTOS", error);
    }
};


// Funktion för att visa ett random foto
function randomPhotos(photo?: any):void {
    if (photo) {
        
        randomContainer.innerHTML = `<img src="${photo.urls.small}" alt="${photo.alt_description}" style="width: 90%; height: auto;" /> `;
    }
};

// funktion för att uppdatera heart toggle sakimoj
function updateHeartIconState() {
    const heartIcons = document.querySelectorAll(".heart-icon");
    heartIcons.forEach((heartIcon) => {
        const imageUrl = heartIcon.closest(".img-container")?.querySelector("img")?.src ?? '';
        if (imageUrl) {
            if (isFavorite(imageUrl)) {
                heartIcon.classList.add("red-heart");
            } else {
                heartIcon.classList.remove("red-heart");
            }
        }
    
        heartIcon.addEventListener("click", () => {
            heartIcon.classList.toggle("red-heart");
            const photo = allPhotos.find((p) => p.urls.small === imageUrl);
            if (photo) {
                if (heartIcon.classList.contains("red-heart")) {
                    updateLocalStorage(imageUrl, photo.alt_description, photo.photographerName);
                } else {
                    removeFromLocalStorage(imageUrl);
                }
            }
        });
    });
};





//function för att visa/rendera ut alla foton på hemsidan
function showAllPics(photos: any[]): void{
    allPicsContainer.innerHTML = "";

    for (let i = 0; i < photos.length; i += 2) {
        const pairContainer = document.createElement("div");
        pairContainer.classList.add("pair-container");

        for (let j = i; j < i + 2 && j < photos.length; j++) {
            const photo = photos[j];

            const imgContainer = document.createElement("div");
            imgContainer.classList.add("img-container");

            const img = document.createElement("img");
            img.src = photo.urls.small;
            img.alt = photo.alt_description;
            img.style.width = "100px";
            img.style.height = "100px";

            imgContainer.appendChild(img);

            const photographerName = document.createElement("p");
            photographerName.textContent = `Photographer: ${photo.photographerName}`;
            imgContainer.appendChild(photographerName);

            const heartIcon = document.createElement("div");
            heartIcon.classList.add("heart");
            heartIcon.innerHTML = '<img src="./src/img/heart.svg" alt="heart" class="heart-icon" />';
            imgContainer.appendChild(heartIcon);

            pairContainer.appendChild(imgContainer);
        }

        allPicsContainer.appendChild(pairContainer);
    }

    updateHeartIconState();
};

//hantera inmatningen i sökfältet
function inputHandler()  {
    const input = inputField.value.toLowerCase();
    let matches = [];
    if (input.length > 0) {
        for (let i = 0; i < allPhotos.length; i++) {
            let potentialmatch = allPhotos[i].photographerName?.toLowerCase();
            if (potentialmatch && potentialmatch.includes(input)) {
                matches.push(allPhotos[i]);
            }
        }
        console.log(matches);
        showMatches(matches);
    } else {
        showAllPics(allPhotos);
    }
};
//lyssnar på inmatnignen
inputField.addEventListener("keyup", inputHandler);


//Visa de foton som matchar de man sökt på
function showMatches(matches: any[]):void {
    allPicsContainer.innerHTML = '';

    matches.forEach((photo, index) => {
        const pairContainer = document.createElement("div");
        pairContainer.classList.add("pair-container");

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");

        const img = document.createElement("img");
        img.src = photo.urls.small;
        img.alt = photo.alt_description;
        img.style.width = "100px";
        img.style.height = "100px";

        imgContainer.appendChild(img);

        const photographerName = document.createElement("p");
        photographerName.textContent = `Photographer: ${photo.photographerName}`;
        imgContainer.appendChild(photographerName);

        const heartIcon = document.createElement("div");
        heartIcon.classList.add("heart");
        heartIcon.innerHTML = '<img src="./src/img/heart.svg" alt="heart" class="heart-icon" />';
        imgContainer.appendChild(heartIcon);

        pairContainer.appendChild(imgContainer);
        allPicsContainer.appendChild(pairContainer);

        const imageUrl = photo.urls.small;
        if (isFavorite(imageUrl)) {
            heartIcon.querySelector(".heart-icon")?.classList.add("red-heart");
        }
    });
    updateHeartIconState();
};

//kontroller om en bild är en favo dvs att man gillat den
function isFavorite(imageUrl: string): any{
    const favorites = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    return favorites.some((item: { imageUrl: string }) => item.imageUrl === imageUrl);
};
//uppdaterar local storage med en bild man gillat
function updateLocalStorage(imageUrl: string, description: string, photographer: string):void {
    let favorites = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    const index = favorites.findIndex((item: { imageUrl: string }) => item.imageUrl === imageUrl);

    if (index !== -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push({ imageUrl, description, photographer });
    }

    localStorage.setItem(localStorageKey, JSON.stringify(favorites));
    console.log(JSON.parse(localStorage.getItem(localStorageKey) || "[]"));

    displaySavedImages();

  
};
//tar bort en bild from localstorage när man tar bort gillningen
function removeFromLocalStorage(imageUrl: string):void {
    let favorites = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    const index = favorites.findIndex((item: { imageUrl: string }) => item.imageUrl === imageUrl);
    if (index !== -1) {
        favorites.splice(index, 1);
        localStorage.setItem(localStorageKey, JSON.stringify(favorites));
        console.log(JSON.parse(localStorage.getItem(localStorageKey) || "[]"));
        displaySavedImages();
    }
};
//Visar dem spara bilderna på i saved pics vyn
function displaySavedImages() {
    const favorites = JSON.parse(localStorage.getItem(localStorageKey) || "[]");

    allSavedPicsContainer.innerHTML = "";

    for (let i = 0; i < favorites.length; i += 2) {
        const pairContainer = document.createElement("div");
        pairContainer.classList.add("pair-container");

        for (let j = i; j < i + 2 && j < favorites.length; j++) {
            const favorite = favorites[j];

            const imgContainer = document.createElement("div");
            imgContainer.classList.add("img-container");

            const img = document.createElement("img");
            img.src = favorite.imageUrl;
            img.alt = "saved-image";
            img.classList.add("saved-image", "clicked-image");

            imgContainer.appendChild(img);

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = `Description: ${favorite.description}`;
            imgContainer.appendChild(descriptionElement);

            const photographerElement = document.createElement("p");
            photographerElement.textContent = `Photographer: ${favorite.photographer}`;
            imgContainer.appendChild(photographerElement);

            const heartIcon = document.createElement("div");
            heartIcon.classList.add("heart");
            heartIcon.innerHTML = '<img src="./src/img/heart.svg" alt="heart" class="heart-icon" />';
            imgContainer.appendChild(heartIcon);

            if (isFavorite(favorite.imageUrl)) {
                heartIcon.querySelector(".heart-icon")?.classList.add("red-heart");
            }

            heartIcon.addEventListener("click", () => {
                heartIcon.classList.toggle("red-heart");
                if (favorite.imageUrl) {
                    updateLocalStorage(favorite.imageUrl, favorite.description, favorite.photographer);
                }
            });

            pairContainer.appendChild(imgContainer);

            img.addEventListener("click", () => {
                savedPicsContainer.style.display = "none";
                onSavedContainer.style.display = "flex";

                onSavedPicSection.innerHTML = "";

                const clickedImgContainer = document.createElement("div");
                clickedImgContainer.classList.add("clicked-image-container");

                const clickedImg = document.createElement("img");
                clickedImg.src = favorite.imageUrl;
                clickedImg.alt = favorite.description;

                const clickedDescription = document.createElement("p");
                clickedDescription.textContent = `Description: ${favorite.description}`;

                const clickedPhotographer = document.createElement("p");
                clickedPhotographer.textContent = `Photographer: ${favorite.photographer}`;

                clickedImgContainer.appendChild(clickedImg);
                clickedImgContainer.appendChild(clickedDescription);
                clickedImgContainer.appendChild(clickedPhotographer);

                onSavedPicSection.appendChild(clickedImgContainer);
            });
        }

        allSavedPicsContainer.appendChild(pairContainer);
    }
};
// köra dessa functioneer när fönstert laddas
window.onload = () => {
    fetchRandoPhotos();
    fetchAllPhotos();
    displaySavedImages();
};
//lyssna på klick på hamburgerbilden
hamburgerMenu.addEventListener('click', () => {
    starpageContainer.style.display = "none";
    dropdownContainer.style.display = "flex";
});
//exportert functionerna tillandingpage
export default {
    fetchRandoPhotos,
    fetchAllPhotos,
    randomPhotos,
    showAllPics,
    displaySavedImages,
};
