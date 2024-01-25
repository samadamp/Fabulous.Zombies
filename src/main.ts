import "./scss/styles.scss";
import moment from 'moment';
import analogfunctions from "./modules/analog";
import  VisualTimer  from './modules/visual';
import pausTimer from './modules/paus.ts';
import timerModule from './modules/settimer';
timerModule.createTimerElements();
pausTimer.startPauseTimer("breakCountdown",5);
VisualTimer.initializeTimer();
analogfunctions.startAnalogTimer();

const handleTimerButtonClick = (timerStyle: string): void => {
  // Dölj alla timers
  document.querySelectorAll('.timer-content').forEach((timer) => {
    (timer as HTMLElement).style.display = 'none';
  });
analogfunctions.startAnalogTimer();

const startTimerBtn: HTMLButtonElement | null = document.getElementById('startTimerBtn') as HTMLButtonElement;

if (startTimerBtn) {
    startTimerBtn.addEventListener('click', () => {
    });
}

  // Visa den valda timern baserat på timerStyle
  switch (timerStyle) {
    case 'analogTimer':
      const analogTimer = document.getElementById('analogTimer');
      if (analogTimer) {
        analogTimer.style.display = 'flex';
      }
      break;
    case 'digitalTimer':
      const digitalTimer = document.getElementById('digitalTimer');
      if (digitalTimer) {
        digitalTimer.style.display = 'flex';
      }
      break;
    case 'visualTimer':
      const visualTimer = document.getElementById('visualTimer');
      if (visualTimer) {
        visualTimer.style.display = 'flex';
      }
      break;
      case 'setTimer':
      const setTimer = document.getElementById('setTimer');
      if (setTimer) {
        setTimer.style.display = 'flex';
      }
      break;
    // Lägg till andra cases för ytterligare timers om det behövs
    default:
      break;
  }
};

const timerBtns = document.querySelectorAll('nav a');

timerBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    const timerStyle = btn.getAttribute('href');

    if (timerStyle) {
      const trimmedTimerStyle = timerStyle.substring(1);
      handleTimerButtonClick(trimmedTimerStyle);
    }
  });
});


const logo = document.querySelector('.logo-box') as HTMLElement;
const nav = document.querySelector('nav') as HTMLElement;
const poster = document.querySelector('.poster') as HTMLElement;
const timesUpWrapper: HTMLButtonElement | null = document.querySelector('.alarm-wrapper') as HTMLButtonElement;




if(poster){
  poster.addEventListener("click", ()=>{
    nav.classList.toggle('show');
    poster.style.display = "none"
    /* poster.style.height = "1px */
    logo.style.visibility = "visible"
   
  })
}

if (logo && nav) {
  // Add click event listener to the logo
  logo.addEventListener('click', () => {
    // Toggle the 'show' class on the nav element
    nav.classList.toggle('show');
    timesUpWrapper.style.display = "none"

   
  });

  const menuItems = nav.querySelectorAll('a');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      timesUpWrapper.style.display = "none"
      nav.classList.remove('show');
      
    });
  });
}


let returnButton: HTMLElement | null = document.querySelector(".return-button");

// Check if the button element exists before adding an event listener
if (returnButton) {
  // Add a click event listener to the button
  returnButton.addEventListener("click", function() {
   
    location.reload();
  });
}

const startTimerBtn: HTMLButtonElement | null = document.getElementById('startTimerBtn') as HTMLButtonElement;

if (startTimerBtn) {
    startTimerBtn.addEventListener('click', () => {
    });
}




//när tiden är slut skall allting döljas och timesup komma upp på skärmen





//function för att komma tillbaka till huvudmenyn för times up knappen






