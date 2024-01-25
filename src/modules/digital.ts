import moment from 'moment';

// Funktion för att starta digital timer
function startDigitalTimer(targetElementId: string, durationInMinutes: number): void {
  // Hitta det element där nedräkningen ska visas
  const timerElement = document.getElementById(targetElementId) as HTMLElement;

  // Ange starttiden till angivet antal minuter
  let countdownTime: moment.Duration = moment.duration(durationInMinutes, 'minutes');

  // Uppdatera funktionen för att visa den återstående tiden
  function updateCountdown() {
    timerElement.textContent = moment(countdownTime.asMilliseconds()).format('m:ss');
  }

  // Uppdatera nedräkningen och starta timern
  updateCountdown();
  const timerInterval = setInterval(countdown, 1000);

  // Funktion för att hantera nedräkning
  function countdown() {
    countdownTime.subtract(1, 'second');
    updateCountdown();

    // När tiden är slut ska den tillbaka till interval timer
    if (countdownTime.asSeconds() <= 0) {
      clearInterval(timerInterval);
     // timesUp style display flex
      countdown();
    }
  }
  
}
//
/*
function startNextTimer() {
updateCountdown();

}
function stopTimer(){
startNextTimer();

}
*/
export default { startDigitalTimer };







