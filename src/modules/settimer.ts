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


   // Create checkbox element for intervals
   const intervalsCheckbox = document.createElement('input');
   intervalsCheckbox.type = 'checkbox';
   intervalsCheckbox.id = 'intervalsCheckbox';
   intervalsCheckbox.name = 'intervalsCheckbox';
   intervalsCheckbox.value = 'Intervals';
 
   // Create label element for intervals
   const intervalsLabel = document.createElement('label');
   intervalsLabel.htmlFor = 'intervalsCheckbox';
   intervalsLabel.textContent = 'Intervals';




   const anotherCheckbox = document.createElement('input');
  anotherCheckbox.type = 'checkbox';
  anotherCheckbox.id = 'anotherCheckbox';
  anotherCheckbox.name = 'anotherCheckbox';
  anotherCheckbox.value = 'AnotherPurpose';

  // Create label element for another purpose
  const anotherLabel = document.createElement('label');
  anotherLabel.htmlFor = 'anotherCheckbox';
  anotherLabel.textContent = '5 min break / interval';

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

  const logoContainer = document.createElement('div');
  const logoImage = document.createElement('img')
  logoImage.src = 'src/images/navicon.svg';
  logoImage.id = 'logoImage';
  logoContainer.appendChild(logoImage);



  

  const appContainer = document.body; 
  appContainer.appendChild(container);

  container.appendChild(logoContainer);
  container.appendChild(timersContainer);


  const checkboxesContainer = document.createElement('div');
  checkboxesContainer.id = 'checkboxes';
  checkboxesContainer.appendChild(intervalsCheckbox);
  checkboxesContainer.appendChild(intervalsLabel);
  checkboxesContainer.appendChild(document.createElement('br'));
  checkboxesContainer.appendChild(anotherCheckbox);
  checkboxesContainer.appendChild(anotherLabel);

  container.appendChild(checkboxesContainer);


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

