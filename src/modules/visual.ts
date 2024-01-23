import moment from 'moment';

let timerInterval: number;

function startTimer() {
  const timer = document.getElementById('timer') as HTMLElement;
  const durationInput = document.getElementById('duration') as HTMLInputElement;
  const enteredMinutes: number = parseInt(durationInput.value, 10);
  const durationInSeconds: number = enteredMinutes * 60;

  timer.style.height = '100%';

  let startTime: moment.Moment;

  function updateTimer() {
    const currentTime: moment.Moment = moment();
    const elapsedTime: number = currentTime.diff(startTime, 'milliseconds');
    const progress: number = (elapsedTime / (durationInSeconds * 1000)) * 100;

    timer.style.height = progress + '%';
    console.log(`Current Time: ${currentTime.format('YYYY-MM-DD HH:mm:ss')}`);

    if (progress < 100) {
      timerInterval = requestAnimationFrame(updateTimer);
    }
  }

  startTime = moment();
  updateTimer();
}

function stopTimer() {
  cancelAnimationFrame(timerInterval);
  const timer = document.getElementById('timer') as HTMLElement;
  timer.style.height = '0%';
}

export default { stopTimer, startTimer };







