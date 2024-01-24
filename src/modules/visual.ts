


import moment from 'moment';

let timerInterval: number;
let timerContainer: HTMLElement | null;
let timer: HTMLElement | null;
let durationInput: HTMLInputElement | null;
let startButton: HTMLButtonElement | null;
let stopButton: HTMLButtonElement | null;
let initialized: boolean = false;

function createTimerElements(): void {
  // Create the timer container if it doesn't exist
  if (!timerContainer) {
    timerContainer = document.createElement('div');
    timerContainer.id = 'timer-container';

    // Create the timer element
    timer = document.createElement('div');
    timer.id = 'timer';

    // Append timer to the timer container
    timerContainer.appendChild(timer);

    // Create the timeInput container
    const timeInputContainer = document.createElement('div');
    timeInputContainer.id = 'timeInput';

    // Create the input element
    durationInput = document.createElement('input');
    durationInput.type = 'number';
    durationInput.id = 'duration';
    durationInput.min = '1';
    durationInput.step = '1';
    durationInput.value = '5';

    // Create the start button
    startButton = document.createElement('button');
    startButton.textContent = 'Start Timer';
    startButton.id = 'startButton';

    // Create the stop button
    stopButton = document.createElement('button');
    stopButton.textContent = 'Stop Timer';
    stopButton.id = 'stopButton';

    // Create labels if needed
    const durationLabel = document.createElement('label');
    durationLabel.textContent = 'Enter time in minutes:';
    durationLabel.setAttribute('for', 'duration');

    // Append input and buttons to the timeInput container
    timeInputContainer.appendChild(durationLabel);
    timeInputContainer.appendChild(durationInput);
    timeInputContainer.appendChild(startButton);
    timeInputContainer.appendChild(stopButton);

    // Append timerContainer to the body
  document.body.appendChild(timerContainer as HTMLElement);
    // Append timeInputContainer to the body
    document.body.appendChild(timeInputContainer);

    initialized = true;
  }
}

function initializeTimer(): void {
  createTimerElements();

  

  if (startButton) {
    startButton.addEventListener('click', startTimer);
  }

  if (stopButton) {
    stopButton.addEventListener('click', stopTimer);
  }
}

function startTimer(): void {
  createTimerElements();

  if (timer) {
    // Reset the timer if it was already started
    timer.style.height = '0%';
  }

  const durationInSeconds = parseInt(durationInput?.value || '5', 10) * 60;

  let startTime: moment.Moment;

  function updateTimer(): void {
    const currentTime: moment.Moment = moment();
    const elapsedTime: number = currentTime.diff(startTime, 'milliseconds');
    const progress: number = (elapsedTime / (durationInSeconds * 1000)) * 100;

    if (timer) {
      timer.style.height = progress + '%';
      console.log(`Current Time: ${currentTime.format('YYYY-MM-DD HH:mm:ss')}`);

      if (progress < 100) {
        timerInterval = requestAnimationFrame(updateTimer);
      }
    }
  }

  startTime = moment();
  updateTimer();
}

function stopTimer(): void {
  cancelAnimationFrame(timerInterval);

  // Reset the timer without removing elements
  if (timer) {
    timer.style.height = '0%';
  }

  initialized = false;
}

export default {
  initializeTimer,
};














