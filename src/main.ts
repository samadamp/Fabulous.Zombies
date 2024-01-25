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


const logo = document.querySelector('.logo-box img') as HTMLElement;
const nav = document.querySelector('nav') as HTMLElement;

if (logo && nav) {
  // Add click event listener to the logo
  logo.addEventListener('click', () => {
    // Toggle the 'show' class on the nav element
    nav.classList.toggle('show');
  });

  // Add click event listener to each menu item
  const menuItems = nav.querySelectorAll('a');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      // Hide the nav by removing the 'show' class after selecting an item
      nav.classList.remove('show');
    });
  });
}

























const startTimerBtn: HTMLButtonElement | null = document.getElementById('startTimerBtn') as HTMLButtonElement;

if (startTimerBtn) {
    startTimerBtn.addEventListener('click', () => {
    });
}






