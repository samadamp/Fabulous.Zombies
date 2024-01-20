import "./scss/styles.scss";
import moment from 'moment';
import analogfunctions from "./modules/analog";

analogfunctions.myfunction();
analogfunctions.newFunction();
analogfunctions.setTimer();

const startTimerBtn: HTMLButtonElement | null = document.getElementById('startTimerBtn') as HTMLButtonElement;

if (startTimerBtn) {
    startTimerBtn.addEventListener('click', () => {
      analogfunctions.setTimer();
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





