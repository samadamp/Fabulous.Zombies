import "./scss/styles.scss";
import moment from 'moment';

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

import "./scss/styles.scss";
import moment from 'moment';
import analogfunctions from "./modules/analog";

analogfunctions.startAnalogTimer();

const startTimerBtn: HTMLButtonElement | null = document.getElementById('startTimerBtn') as HTMLButtonElement;

if (startTimerBtn) {
    startTimerBtn.addEventListener('click', () => {
    });
}


/* const now = moment();
console.log(now.format('YYYY-MM-DD HH:mm:ss')); */

// Funktion för att starta en timer
/* function startTimer(durationInMinutes: number) {
    const startTime = moment();
    const endTime = moment().add(durationInMinutes, 'minutes'); */

    // Uppdatera varje sekund
    /* const timerInterval = setInterval(() => {
        const currentTime = moment();
        const remainingTime = moment.duration(endTime.diff(currentTime)); */

        // Visa återstående tid
/*         console.log(`Återstående tid: ${remainingTime.minutes()} minuter och ${remainingTime.seconds()} sekunder`);
 */
        // Om tiden har gått ut, avsluta timern
       /*  if (currentTime.isAfter(endTime)) {
            clearInterval(timerInterval);
            console.log('Timer avslutad!');
        }
    }, 1000); // Uppdatera varje sekund
}
 */
// Exempel: Starta en timer på 5 minuter
/* startTimer(5); */





