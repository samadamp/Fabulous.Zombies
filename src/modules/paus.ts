import moment from 'moment';

function startPauseTimer(targetElementId: string, durationInMinutes: number): void {
  // Hitta det element där nedräkningen ska visas
  const timerElement: HTMLParagraphElement | null = document.getElementById(targetElementId) as HTMLParagraphElement;

  // Kontrollera om elementet finns innan du fortsätter
  if (timerElement) {
    // Ange starttiden till angivet antal minuter
    let countdownTime: moment.Duration = moment.duration(durationInMinutes, 'minutes');

    // Uppdatera funktionen för att visa den återstående tiden
    function updateCountdown() {
      timerElement.textContent = moment(countdownTime.asMilliseconds()).format('m:ss');
    }

    // Uppdatera funktionen för att minska nedräkningstiden varje sekund
    function countdown() {
      countdownTime.subtract(1, 'second');
      updateCountdown();

      // // Om tidslut, gör något här kalla på nån annan funktion eller nåt
      // if (countdownTime.asSeconds() <= 0) {
      //   clearInterval(timerInterval);
      //   alert('Tiden är ute!');
      // }
    }

    // Uppdatera DOM när sidan laddas
    document.addEventListener('DOMContentLoaded', () => {
      updateCountdown();

      // Starta timer med intervall på 1 sekund direkt när sidan laddas
      const timerInterval = setInterval(countdown, 1000);

     
    });
  }
}

// Exportera
export default {startPauseTimer}


