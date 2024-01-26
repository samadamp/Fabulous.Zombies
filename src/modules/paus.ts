import moment from 'moment';

// Variabel för att hålla koll på om pausen är avbruten
let isBreakAborted: boolean = false;
let timerInterval: number | null 

// Funktion för att starta paus-timern
function startPauseTimer(targetElementId: string, durationInMinutes: number): void {
  // Hitta det element där nedräkningen ska visas
  const timerElement = document.getElementById(targetElementId) as HTMLElement;
  const abortButton = document.getElementById('abortBreakbutton') as HTMLButtonElement;

  // Kontrollera om elementet finns innan du fortsätter
  if (timerElement) {
    // Ange starttiden till angivet antal minuter
    let countdownTime: moment.Duration = moment.duration(durationInMinutes, 'minutes');

    // Uppdatera funktionen för att visa den återstående tiden
    function updateCountdown() {
      timerElement.textContent = moment(countdownTime.asMilliseconds()).format('m:ss');
      
    }

    // Eventlistener för Abort Break-knappen
    if (abortButton) {
      abortButton.addEventListener('click', () => {
        isBreakAborted = true;
        clearInterval(timerInterval!);
        
        
      });
    }

    // Uppdatera nedräkningen och starta timern
    updateCountdown();
    timerInterval = setInterval(countdown, 1000);

    // Funktion för att hantera nedräkning
    function countdown() {
      countdownTime.subtract(1, 'second');
      updateCountdown();

      
    }

  
  }
}


export default { startPauseTimer };
