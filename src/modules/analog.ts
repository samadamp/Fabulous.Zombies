//funktionerna för analoga timer
import moment from 'moment';


function startAnalogTimer() {
  const deg: number = 6;
  const minuteHand: HTMLElement | null = document.querySelector('.minute-hand');
  const secondHand: HTMLElement | null = document.querySelector('.second-hand');
  const timerSelect: HTMLSelectElement | null = document.getElementById('timerSelect') as HTMLSelectElement;

  if (!minuteHand || !secondHand || !timerSelect) {
    console.error('Elements not found.');
    return;
  }

  let timerInterval: number | null = null;
  let endTime: moment.Moment | null = null;

  function updateClock() {
    if (!endTime || !minuteHand || !secondHand) {
      console.error('End time or clock hands not set.');
      return;
    }

    const currentTime: moment.Moment = moment();
    const remainingTime: moment.Duration = moment.duration(endTime.diff(currentTime));

    const mm: number = remainingTime.minutes() * deg;
    const ss: number = remainingTime.seconds() * deg;

    minuteHand.style.transform = `rotateZ(${mm}deg)`;
    secondHand.style.transform = `rotateZ(${ss}deg)`;

    console.log(`Remaining Time: ${remainingTime.minutes()} minutes ${remainingTime.seconds()} seconds`);

  }

  function setTimer() {
    const selectedMinutes: number = parseInt(timerSelect?.value || '0', 10);

    if (isNaN(selectedMinutes)) {
      console.error('Invalid timer interval. Please select a valid interval.');
      return;
    }

    endTime = moment().add(selectedMinutes, 'minutes');

    clearInterval(timerInterval as number);
    updateClock();
    timerInterval = setInterval(updateClock, 1000);
  }

  document.getElementById('startTimerBtn')?.addEventListener('click', setTimer);
}


export default {startAnalogTimer}

