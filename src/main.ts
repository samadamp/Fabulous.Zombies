import "./scss/styles.scss";
import moment from 'moment';
import digitalfunctions from "./modules/digital";


digitalfunctions.updateTimer();
digitalfunctions.startTimer();
digitalfunctions.stopTimer();









document.getElementById('startBtn')!.addEventListener('click', digitalfunctions.startTimer);
document.getElementById('stopBtn')!.addEventListener('click', digitalfunctions.stopTimer);


