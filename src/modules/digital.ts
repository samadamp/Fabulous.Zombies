import moment from 'moment';
import  chosenTime from './settimer';
let timesUP:boolean;
let extraTime: boolean;
chosenTime.createTimerElements();


//import { exTime } from 'exTime';
/*
import dropdown from;
import setTimer from;
import paus from paus;
*/

// import timesUp  

//let timer-container = document.getElementById('stopBtn') as HTMLInputElement; timer-container.value = "Abort Time";

//ändra texten på knappen

//document.getElementById(startBtn)?.innerText = "abort time";
let startTime: moment.Moment | null = null;
// event listener drop down button click overlay
//event listener abort button 'click'

//starta timern på 10 min om inte någon annan tid är inställd

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
  chosenTime.createTimerElements
  startTime = moment();
  updateTimer();
  setInterval(updateTimer, 1000);
}

// när tiden är ute- timesUp och start igen om 5 min klickas i

function stopTimer() {
  // gå tillbaks till setTimer
  if (timesUP == true && extraTime == false ) {


  }
else if (timesUP == true && extraTime == true) {


}



  clearInterval(0);
  startTime = null;
  updateTimer();
}

if (chosenTime.asSeconds() <= 0 && !) {
    clearInterval(timerInterval!);
    alert('Back to huvudklockan');
    ();
  }
}
// abort timer - tbx till setTimer
export default {updateTimer, startTimer, stopTimer}

