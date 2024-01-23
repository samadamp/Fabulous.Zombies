// function setTimer
import moment from 'moment';
import { Timer } from 'moment-timer';


//skapa en timer i TS som man kan styra
function createTimerElements(): void {
  // Create minutes element
  const minutesElement = document.createElement('div');
  minutesElement.id = 'minutes';
  minutesElement.textContent = '00';

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

  // Append elements to the body or any other container element
  const container = document.body; // You can replace this with the actual container element
  container.appendChild(decreaseButton);
  container.appendChild(minutesElement);
  container.appendChild(separatorElement);
  container.appendChild(secondsElement);
  container.appendChild(increaseButton);
}

export default { createTimerElements };

