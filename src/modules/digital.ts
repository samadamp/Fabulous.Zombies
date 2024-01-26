import moment from 'moment';

let timerInterval: number; // Declare timerInterval globally
let paused = false;

// Function to start a digital timer
function startDigitalTimer(targetElementId: string, durationInMinutes: number): () => void {
  // Find the element where the countdown should be displayed
  const timerElement = document.getElementById(targetElementId) as HTMLElement;

  // Set the initial time to the specified number of minutes
  let countdownTime: moment.Duration = moment.duration(durationInMinutes, 'minutes');

  // Update the function to display the remaining time
  function updateCountdown() {
    timerElement.textContent = moment(countdownTime.asMilliseconds()).format('m:ss');
  }


  // Function to handle countdown
  function countdown() {
    if (!paused) {
      countdownTime.subtract(1, 'second');
      updateCountdown();

      // When the time is up, go back to the interval timer
      if (countdownTime.asSeconds() <= 0) {
        clearInterval(timerInterval!);
        // Add your code for when the timer reaches zero
      }
    }
  }

  // Update the countdown and start the timer
  updateCountdown();
  timerInterval = setInterval(countdown, 1000);

  // Return functions to control the timer
  function stopTimer() {
    clearInterval(timerInterval!);
    countdownTime = moment.duration(durationInMinutes, 'minutes'); // Reset the countdown time
    updateCountdown(); // Update the displayed countdown
    paused = false;} // Reset the paused flag 
  return { 
    stopTimer();
    
  };
   
  

// Get the buttons from the DOM
const startButton = document.getElementById('starttimer') as HTMLButtonElement;
const pauseButton = document.getElementById('pausbutton') as HTMLButtonElement;
const stopButton = document.getElementById('abortTimer') as HTMLButtonElement;
const setTimeButton = document.getElementById('setTime') as HTMLButtonElement;

// Initialize timer control
let timerControl: ReturnType<typeof startDigitalTimer> | null = null;

// Add event listeners to the buttons
startButton.addEventListener('click', () => {
  // Start the timer when the start button is clicked
  timerControl = startDigitalTimer('digitalTimer', 5); // Replace 'digitalTimer' with the actual ID of the timer element
});

pauseButton.addEventListener('click', () => {
  // Pause the timer when the pause button is clicked
  if (timerControl) {
    timerControl.pause();
  }
});

stopButton.addEventListener('click', () => {
  // Stop the timer when the stop button is clicked
  if (timerControl) {
    timerControl.stop();
  }
});

setTimeButton.addEventListener('click', () => {
  // Implement setTimer function here
  setTimer();
});

// Function to set a new timer duration
function setTimer() {
  // Prompt the user for a new timer duration in minutes
  const newDurationString = prompt('Enter new timer duration in minutes:');
  const newDuration = parseInt(newDurationString, 10);

  // Check if the user entered a valid number
  if (!isNaN(newDuration) && newDuration > 0) {
    // Restart the timer with the new duration
    clearInterval(timerInterval!); // Clear the existing timer
    timerControl = startDigitalTimer('digitalTimer', newDuration);
  } else {
    alert('Please enter a valid positive number for the timer duration.');
  }
}