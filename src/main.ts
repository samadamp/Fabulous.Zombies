import "./scss/styles.scss";
import * as VisualTimer from './modules/visual';

const containerId = 'timer-wrapper';
const defaultDuration = 5;

VisualTimer.initializeTimer(defaultDuration * 60, containerId);

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const durationInput = document.getElementById('durationInput') as HTMLInputElement;

if (startButton) {
  startButton.addEventListener('click', () => {
    const chosenDuration = parseInt(durationInput.value, 10) || defaultDuration;
    VisualTimer.setDuration(chosenDuration * 60);
    VisualTimer.startTimer();
  });
}

if(stopButton){
  stopButton.addEventListener("click", ()=>{
    VisualTimer.stopTimer();
    
  })
}