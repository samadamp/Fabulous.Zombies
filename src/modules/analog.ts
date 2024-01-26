import moment, { Moment, Duration } from 'moment';

function startAnalogTimer() {
  const deg: number = -6;
  const minuteHand: HTMLElement | null = document.querySelector('.min-pointer');
  const secondHand: HTMLElement | null = document.querySelector('.sec-pointer');
  const timerSelect: HTMLSelectElement | null = document.getElementById('timerSelect') as HTMLSelectElement;
  const startTimerBtn: HTMLButtonElement | null = document.getElementById('startTimerBtn') as HTMLButtonElement;
  const stopTimerBtn: HTMLButtonElement | null = document.getElementById('stopTimerBtn') as HTMLButtonElement;
  const pauseTimerBtn: HTMLButtonElement | null = document.getElementById('pauseTimerBtn') as HTMLButtonElement;
  const pauseContainer = document.querySelector(".pauseContainer-2") as HTMLElement; // Get the pause container element
  const abortBreakButton: HTMLButtonElement | null = document.getElementById('abortBreakbutton-2') as HTMLButtonElement;
  const hideAnalogContainer: HTMLElement | null = document.querySelector('.timer-content') as HTMLElement;



  let timerInterval: number | null;
  let endTime: Moment | null;
  let timerRunning: boolean = false;
  let pauseTime: moment.Moment | null = null;
  let isPaused: boolean = false;
  let remainingTimeAtPause: Duration | null = null; // variabel för att spara tiden kvar vid pause

  

  pauseTimerBtn?.addEventListener('click', () => {
    if (!timerRunning && !isPaused) return;

    if (!isPaused) {
      hideAnalogContainer.style.display = "none";
      // Pause the timer
      if (endTime) {
        remainingTimeAtPause = moment.duration(endTime.diff(moment())); // Store the remaining time
      }
      clearInterval(timerInterval as number); // Stop the timer
      isPaused = true;
      timerRunning = false; // Update the timerRunning
      pauseContainer.style.display = "flex"; // Show the pause container
      
    } else {
      // Resume the timer
      if (remainingTimeAtPause) {
        endTime = moment().add(remainingTimeAtPause); // Reset the endTime using the remaining duration
        timerInterval = setInterval(updateClock, 1000); // Restart the timer
      }
      isPaused = false;
      timerRunning = true; // Update the timerRunning
       // Hide the pause container
    }
  });
  
  abortBreakButton?.addEventListener('click', () => {
    if (isPaused) {
      hideAnalogContainer.style.display = "flex";
      // Resume the timer
      if (remainingTimeAtPause) {
        endTime = moment().add(remainingTimeAtPause); // Reset the endTime using the remaining duration
        timerInterval = setInterval(updateClock, 1000); // Restart the timer
      }
      isPaused = false;
      timerRunning = true;
      pauseContainer.style.display = "none"; 
    }
  
  });

  function startAnalogTimerWithOffset(offsetSeconds: number) {
    if (!endTime) {
        console.error('End time not set.');
        return;
    }

    // Adjust the end time by the paused duration
    endTime.add(offsetSeconds, 'seconds');

    // Restart the timer interval
    clearInterval(timerInterval as number);
    timerInterval = setInterval(updateClock, 1000);
}

  function updateClock() {
    if (!endTime || !minuteHand || !secondHand) {
      console.error('End time or clock hands not set.');
      return;
    }

    const currentTime: Moment = moment();
    const remainingTime: Duration = moment.duration(endTime.diff(currentTime));

    const mm: number = (remainingTime.minutes() * deg) + (remainingTime.seconds() / 60 * deg);
    const ss: number = remainingTime.seconds() * deg;

    console.log(`Current Time: ${currentTime.format('HH:mm:ss')}`);
    console.log(`Remaining Time: ${remainingTime.minutes()} minutes ${remainingTime.seconds()} seconds`);
    console.log(`Transform Values: ${mm}deg (minutes), ${ss}deg (seconds)`);

    minuteHand.style.transform = `rotateZ(${mm}deg)`;
    secondHand.style.transform = `rotateZ(${ss}deg)`;

    console.log(`Remaining Time: ${remainingTime.minutes()} minutes ${remainingTime.seconds()} seconds`);

    if (remainingTime.asMilliseconds() <= 0) {
      clearInterval(timerInterval as number);
      stopTimerBtn!.style.display = 'none';
      startTimerBtn!.style.display = 'inline-block';

      const hideClock = document.querySelector('.timer-content') as HTMLElement;
    hideClock.style.display = "none"

    const alarmWrapper = document.querySelector(".alarm-wrapper") as HTMLElement;
    alarmWrapper.style.display = "flex";
    }
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

    stopTimerBtn!.style.display = 'inline-block';
    startTimerBtn!.style.display = 'none';
  }

  function stopTimer() {
    clearInterval(timerInterval as number);
    stopTimerBtn!.style.display = 'none';
    startTimerBtn!.style.display = 'inline-block';

    const hideClock = document.querySelector('.timer-content') as HTMLElement;
    hideClock.style.display = "none"

    const alarmWrapper = document.querySelector(".alarm-wrapper") as HTMLElement;
    alarmWrapper.style.display = "flex";


  }
  
  if (startTimerBtn && stopTimerBtn) {
    startTimerBtn.addEventListener('click', () => {
      setTimer();
      timerRunning = true; 
    });
    stopTimerBtn.addEventListener('click', () => {
      stopTimer();
      timerRunning = false; 
      isPaused = false; 
    });
  }
}

export default { startAnalogTimer };
