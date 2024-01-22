
import moment from 'moment';

class VisualTimer {
  duration: number;
  startTime: moment.Moment;
  container: HTMLElement;
  intervalId: number | null;

  constructor(duration: number, containerId: string) {
    this.duration = duration;
    this.startTime = moment();
    this.container = document.getElementById(containerId) || document.body;
    this.intervalId = null;
  }


  setDuration(duration: number) {
    this.duration = duration;
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      const remainingTime = this.getTimeRemaining();
      const percentageComplete = (1 - remainingTime / this.duration) * 100;
      this.updateVisualTimer(percentageComplete);

      if (remainingTime === 0) {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  getTimeRemaining(): number {
    const elapsedSeconds = moment().diff(this.startTime, 'seconds');
    return Math.max(this.duration - elapsedSeconds, 0);
  }

  updateVisualTimer(percentageComplete: number) {
    if (this.container){
        this.container.style.height = `${percentageComplete}%`;
    }
  }
}

export default VisualTimer;

