import Timer from 'easytimer.js';

let duration: number;
let timer: Timer;
let container: HTMLElement;

function setDuration(newDuration: number) {
  duration = newDuration;
  console.log('New Timer Duration:', duration);
}

function startTimer() {
  timer.start({ countdown: true, startValues: { seconds: duration } });
}

function stopTimer() {
  timer.stop();
}

function getTimeRemaining(): number {
  return Math.max(timer.getTotalTimeValues().seconds, 0);
}

function updateVisualTimer(percentageComplete: number) {
  if (container) {
    container.style.height = `${percentageComplete}%`;
  }
}

function initializeTimer(initialDuration: number, containerId: string) {
  duration = initialDuration;
  timer = new Timer();
  container = document.getElementById(containerId) || document.body;

  timer.addEventListener('secondsUpdated', () => {
    const remainingTime = getTimeRemaining();
    const percentageComplete = (1 - remainingTime / duration) * 100;
    updateVisualTimer(percentageComplete);

    if (remainingTime === 0) {
      stopTimer();
    }

    console.log('Current Timer Value:', timer.getTimeValues().toString());
  });
}

export {
  setDuration,
  startTimer,
  stopTimer,
  getTimeRemaining,
  updateVisualTimer,
  initializeTimer,
};
