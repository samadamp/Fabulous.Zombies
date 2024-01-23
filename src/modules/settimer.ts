// function setTimer
import moment from 'moment';
import { Timer } from 'moment-timer';


//skapa en timer i TS som man kan styra
function createTimerElements(): void {
  // Create minutes element
  const minutesElement = document.createElement('div');
  minutesElement.id = 'minutes';
  minutesElement.textContent = '10';

  // Create separator element
  const separatorElement = document.createElement('div');
  separatorElement.textContent = ':';

  // Create seconds element
  const secondsElement = document.createElement('div');
  secondsElement.id = 'seconds';
  secondsElement.textContent = '00';

  // Create increase button
  const increaseButton = document.createElement('button');
  increaseButton.textContent = '>';
  increaseButton.addEventListener('click', () => {
    minutesElement.textContent = String((parseInt(minutesElement.textContent!, 10) || 0) + 1).padStart(2, '0');
  });

  // Create decrease button
  const decreaseButton = document.createElement('button');
  decreaseButton.textContent = '<';
  decreaseButton.addEventListener('click', () => {
    minutesElement.textContent = String(Math.max((parseInt(minutesElement.textContent!, 10) || 0) - 1, 0)).padStart(2, '0');
  });

  //create start timer button
  const startButton = document.createElement('button')
  startButton.textContent = 'Start Timer'
  startButton.id = 'startButton'
  startButton.addEventListener('click', () => {

  })

  const container = document.createElement('div');
  container.id = 'app-container';

  const timersContainer = document.createElement('div');
  timersContainer.id = 'timers-container';

  const appContainer = document.body; 
  appContainer.appendChild(container);

  container.appendChild(timersContainer);
  container.appendChild(startButton);

  if (timersContainer) {
    timersContainer.appendChild(decreaseButton);
    timersContainer.appendChild(minutesElement);
    timersContainer.appendChild(separatorElement);
    timersContainer.appendChild(secondsElement);
    timersContainer.appendChild(increaseButton);
  }
}

export default { createTimerElements };

