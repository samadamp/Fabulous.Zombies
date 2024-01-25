// function setTimer
import { Timer } from 'moment-timer';
import moment from 'moment';

function createTimerElements(): void {
  const minutesElement = document.createElement('div');
  minutesElement.id = 'minutes';
  minutesElement.textContent = '10';

  const timer = document.createElement('div')
  timer.id = 'timer';
  const timerContainer = document.createElement('div');
  timerContainer.appendChild(timer);

  const separatorElement = document.createElement('div');
  separatorElement.textContent = ':';

  const secondsElement = document.createElement('div');
  secondsElement.id = 'seconds';
  secondsElement.textContent = '00';

  const increaseButton = document.createElement('button');
  increaseButton.textContent = '>';
  increaseButton.addEventListener('click', () => {
    minutesElement.textContent = String((parseInt(minutesElement.textContent!, 10) || 0) + 1).padStart(2, '0');
  });

  const decreaseButton = document.createElement('button');
  decreaseButton.textContent = '<';
  decreaseButton.addEventListener('click', () => {
    minutesElement.textContent = String(Math.max((parseInt(minutesElement.textContent!, 10) || 0) - 1, 0)).padStart(2, '0');
  });

  const intervalsCheckbox = document.createElement('input');
  intervalsCheckbox.type = 'checkbox';
  intervalsCheckbox.id = 'intervalsCheckbox';
  intervalsCheckbox.name = 'intervalsCheckbox';
  intervalsCheckbox.value = 'Intervals';

  const intervalsLabel = document.createElement('label');
  intervalsLabel.htmlFor = 'intervalsCheckbox';
  intervalsLabel.textContent = 'Intervals';

  const anotherCheckbox = document.createElement('input');
  anotherCheckbox.type = 'checkbox';
  anotherCheckbox.id = 'anotherCheckbox';
  anotherCheckbox.name = 'anotherCheckbox';
  anotherCheckbox.value = 'AnotherPurpose';

  const anotherLabel = document.createElement('label');
  anotherLabel.htmlFor = 'anotherCheckbox';
  anotherLabel.textContent = '5 min break / interval';

  const startButton = document.createElement('button')
  startButton.textContent = 'Start Timer'
  startButton.id = 'startButton'
  startButton.addEventListener('click', () => {
    const chosenMinutes = parseInt(minutesElement.textContent!, 10) || 0;
    const chosenSeconds = parseInt(secondsElement.textContent!, 10) || 0;

    const durationInSeconds: number = chosenMinutes * 60 + chosenSeconds;

    const chosenTime = moment()
      .minutes(chosenMinutes)
      .seconds(chosenSeconds)
      .format('mm:ss');

    console.log(`Chosen time: ${chosenTime}`);

    let startTime: number;

    function updateTimer() {
      const currentTime: number = moment().valueOf();
      const elapsedTime: number = currentTime - startTime;
      const remainingTime: number = durationInSeconds * 1000 - elapsedTime;

      const remaningDuration = moment.duration(remainingTime);

      const remainingMinutes: number = remaningDuration.minutes();
      const remainingSeconds: number = remaningDuration.seconds();

      const globalTime = remainingMinutes + ":" +remainingSeconds
      console.log(globalTime);
      

      /* console.log(`Remaining Time: ${remainingMinutes}:${remainingSeconds}`); */
      
      

      const progress: number = (elapsedTime / (durationInSeconds * 1000)) * 100;
      timer.style.height = progress + '%';

      if (progress < 100) {
        requestAnimationFrame(updateTimer);
      }
    }

    startTime = moment().valueOf();
    updateTimer();
  });

  const container = document.createElement('div');
  container.id = 'app-container';

  const timersContainer = document.createElement('div');
  timersContainer.id = 'settimers-container';

  const appContainer = document.createElement("div"); 
  appContainer.appendChild(container);

  const setTimer: HTMLDivElement | any = document.getElementById("setTimer");
  setTimer.append(appContainer)

 
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
