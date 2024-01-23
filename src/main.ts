import "./scss/styles.scss";
import  VisualTimer  from './modules/visual';

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

if (startButton) {
  startButton.addEventListener('click', () => VisualTimer.startTimer()); 
}

if (stopButton) {
  stopButton.addEventListener('click', () => VisualTimer.stopTimer());
}