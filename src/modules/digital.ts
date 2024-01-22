import moment from 'moment';
//ändra texten på knappen
let myContainer = document.getElementById('stopBtn') as HTMLInputElement; myContainer.value = "Abort Time";
//document.getElementById(startBtn)?.innerText = "abort time";
let startTime: moment.Moment | null = null;
// event listener drop down button click overlay
//event listener abort button 'click'

function updateTimer() {
  if (startTime) {
    const currentTime = moment();
    const duration = moment.duration(currentTime.diff(startTime));
    const formattedTime = moment.utc(duration.asMilliseconds()).format('mm:ss');
    document.getElementById('timer')!.innerText = formattedTime;
  }
}
// Grand Time = tiden från set time
function startTimer() {
  startTime = moment();
  updateTimer();
  setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(0);
  startTime = null;
  updateTimer();
}

export default {updateTimer, startTimer, stopTimer}