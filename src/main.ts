import "./scss/styles.scss";
import moment from 'moment';
import VisualTimer from './modules/visual';


const containerId = 'timer-wrapper'
const defaultDuration = 5;

const visualTimer = new VisualTimer(defaultDuration * 60, containerId);

const timerWrapper = document.getElementById('timer-wrapper');

if (timerWrapper) {
  timerWrapper.classList.add('grow');
}


const startButton = document.getElementById('startButton')
const durationInput = document.getElementById('durationInput') as HTMLInputElement;

if (startButton) {
    startButton.addEventListener('click', () => {
      const chosenDuration = parseInt(durationInput.value, 10) || defaultDuration;
      visualTimer.setDuration(chosenDuration * 60);
      visualTimer.startTimer();
    });
  }




