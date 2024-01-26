


import moment from 'moment';

let timerInterval: number;
let timerContainer: HTMLElement | null;
let timer: HTMLElement | null;
let durationInput: HTMLInputElement | null;
let startButton: HTMLButtonElement | null;
let stopButton: HTMLButtonElement | null;
let initialized: boolean = false;
let pauseButton: HTMLButtonElement | null;
let abortButton: HTMLButtonElement | null;


let isPaused: boolean = false;
let pausedTime: moment.Moment | null = null;

function createTimerElements(): void {

  const visualTimer = document.getElementById('visual-container')
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

    
    
   


    // Create labels if needed
    const durationLabel = document.createElement('label');
    durationLabel.textContent = 'Enter time in minutes:';
    durationLabel.setAttribute('for', 'duration');

    
    
    let buttonContainer = document.getElementById('button-container') as HTMLElement;
    // Append input and buttons to the timeInput container
    
    timeInputContainer.appendChild(durationLabel);
    timeInputContainer.appendChild(durationInput);
    timeInputContainer.appendChild(buttonContainer);
    //append buttons to buttonContainer
   

    // Append timerContainer to the body
    visualTimer!.appendChild(timerContainer as HTMLElement);
    // Append timeInputContainer to the body
    visualTimer!.appendChild(timeInputContainer);

    initialized = true;
  }
}

function initializeTimer(): void {
  createTimerElements();

  
  let startButton = document.getElementById('startButtonVisual')
  if (startButton) {
    startButton.addEventListener('click', startTimer);
    console.log("hej");
    
  }
  let stopButton = document.getElementById('stopButtonVisual')
  if (stopButton) {
    stopButton.addEventListener('click', stopTimer);
   
  }
  pauseButton = document.getElementById('pauseVisual') as HTMLButtonElement;
  if (pauseButton) {
    pauseButton.addEventListener('click', pauseTimer);
  }
}

abortButton = document.getElementById('abortBreakbutton-1') as HTMLButtonElement;
if (abortButton) {
  abortButton.addEventListener('click', resumeTimer);
}

function startTimer(): void {
  createTimerElements();

  if (timer) {
    // Reset the timer if it was already started
    timer.style.height = '0%';
  }

  const durationInSeconds = parseInt(durationInput?.value || '5', 10) * 60;

  let startTime: moment.Moment;

  if (isPaused && pausedTime) {
    // If resuming from pause, adjust the start time
    const pausedDuration = moment().diff(pausedTime, 'milliseconds');
    startTime = moment().subtract(pausedDuration, 'milliseconds');
  } else {
    startTime = moment();
  }





  function updateTimer(): void {
    const currentTime: moment.Moment = moment();
    const elapsedTime: number = currentTime.diff(startTime, 'milliseconds');
    const progress: number = (elapsedTime / (durationInSeconds * 1000)) * 100;

    if (timer) {
      timer.style.height = progress + '%';
      console.log(`Current Time: ${currentTime.format('YYYY-MM-DD HH:mm:ss')}`);

      if (progress < 100) {
        timerInterval = requestAnimationFrame(updateTimer);
      }else {
      stopTimer();
    }
    }
  }

  startTime = moment();
  updateTimer();
}

function stopTimer(): void {
  cancelAnimationFrame(timerInterval);

  const hideVisual = document.querySelector('#visualTimer') as HTMLElement;
  hideVisual.style.display = "none"

    const alarmWrapper = document.querySelector(".alarm-wrapper") as HTMLElement;
    alarmWrapper.style.display = "flex";

  // Reset the timer without removing elements
  if (timer) {
    timer.style.height = '0%';
  }

  initialized = false;
  isPaused = false;
  pausedTime = null;
}


function pauseTimer(): void {
  cancelAnimationFrame(timerInterval);
  const hideVisual = document.querySelector('#visualTimer') as HTMLElement;
  hideVisual.style.display = "none"

  const showPaus = document.querySelector(".pauseContainer-1") as HTMLElement;
  showPaus.style.display = "flex"


  if (pauseButton) {
   
    
  }

  isPaused = true;
  pausedTime = moment();
}

function resumeTimer(): void {
  const hideVisual = document.querySelector('#visualTimer') as HTMLElement;
  hideVisual.style.display = "flex"
  const hidePaus = document.querySelector(".pauseContainer-1") as HTMLElement;
  hidePaus.style.display = "none"
  if (isPaused && pausedTime) {
    const durationInMinutes = parseInt(durationInput?.value || '5', 10);
    const elapsedTimeInSeconds = moment().diff(pausedTime, 'seconds');
    const remainingTimeInSeconds = durationInMinutes * 60 - elapsedTimeInSeconds;

    if (remainingTimeInSeconds > 0) {
      // Set the durationInput value to the remaining time
      if (durationInput) {
        durationInput.value = Math.ceil(remainingTimeInSeconds / 60).toString();
      }

      isPaused = false;
      startTimer(); // Resume by starting the timer again
    } else {
      // If the remaining time is negative or zero, treat it as if the timer has ended
      stopTimer();
    }
  } else {
    // If not paused, just start the timer as usual
    startTimer();
  }
}

export default {
  initializeTimer,
};



