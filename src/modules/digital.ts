import moment, { Moment, Duration } from 'moment';


let timerInterval: number | null = null;
let endTime: Moment | null = null;

const timerDisplay = document.getElementById('timer') as HTMLDivElement;
const timeInput = document.getElementById('timeInput') as HTMLInputElement;
const startButton = document.getElementById('startButton') as HTMLButtonElement;
const stopButton = document.getElementById('stopButton') as HTMLButtonElement;

function updateTimer() {
  if (!endTime) {
    console.error('End time not set.');
    return;
  }

  const currentTime: Moment = moment();
  const remainingTime: Duration = moment.duration(endTime.diff(currentTime));

  const minutes = remainingTime.minutes();
  const seconds = remainingTime.seconds();

  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  if (remainingTime.asSeconds() <= 0) {
    stopTimer();
  }
}

function startDigitalTimer() {
  const selectedMinutes: number = parseInt(timeInput.value, 10);

  if (isNaN(selectedMinutes) || selectedMinutes <= 0) {
    
    return;
  }

  endTime = moment().add(selectedMinutes, 'minutes');

  startButton.style.display = 'none';
  stopButton.style.display = 'inline-block';

  if (timerInterval !== null) {
    clearInterval(timerInterval);
  }

  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
  }

  startButton.style.display = 'inline-block';
  stopButton.style.display = 'none';
}

startButton.addEventListener('click', startDigitalTimer);
stopButton.addEventListener('click', stopTimer);


stopButton.style.display = 'none';


export default { updateTimer };