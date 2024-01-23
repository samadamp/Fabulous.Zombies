// function setTimer
import moment from 'moment';
import { Timer } from 'moment-timer';

interface TimerConfig {
  containerId: string;
  controlButtonId: string;
}

let timer: Timer | null;
let duration: moment.Duration | null;

function createTimerContainer(): HTMLDivElement {
  const timerContainer = document.createElement('div');
  timerContainer.id = 'timer-container';

  const minutesElement = document.createElement('div');
  minutesElement.id = 'minutes';
  minutesElement.textContent = '00';

  const separatorElement = document.createElement('div');
  separatorElement.textContent = ':';

  const secondsElement = document.createElement('div');
  secondsElement.id = 'seconds';
  secondsElement.textContent = '00';

  timerContainer.appendChild(minutesElement);
  timerContainer.appendChild(separatorElement);
  timerContainer.appendChild(secondsElement);

  document.getElementById('timers-container')?.appendChild(timerContainer);

  return timerContainer;
}

function toggleTimer() {
  if (timer) {
    stopTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  duration = moment.duration({ minutes: 0, seconds: 0 });
  timer = setInterval(() => {
    duration.add(1, 'second');
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function updateTimerDisplay() {
  const formattedMinutes = moment(duration?.asMilliseconds()).format('mm');
  const formattedSeconds = moment(duration?.asMilliseconds()).format('ss');

  const timerContainer = document.getElementById('timer-container');
  const minutesElement = timerContainer?.querySelector('#minutes');
  const secondsElement = timerContainer?.querySelector('#seconds');

  if (minutesElement && secondsElement) {
    minutesElement.textContent = formattedMinutes;
    secondsElement.textContent = formattedSeconds;
  }
}

function initializeTimer(config: TimerConfig) {
  createTimerContainer();

  const controlButton = document.createElement('button');
  controlButton.id = config.controlButtonId;
  controlButton.textContent = 'Start Timer';

  document.getElementById('timers-container')?.appendChild(controlButton);

  controlButton.addEventListener('click', toggleTimer);
}

export { initializeTimer };



let unchangedTime = 10;
export class Timer  {
choosenTime :number = 10;


}
//event listener onclick leftbutton
//event listener onclick rightbutton
// When click on left choosenTime = unchangedTime - 1
// When click on right choosenTime = unchangedTime + 1
// while choosenTime 0< || > 60, keep adding/reducing min 
    

function setTimer(choosenTime: number){

// if left button click

// if right button click

// if else 
choosenTime = unchangedTime;
}
// 
 