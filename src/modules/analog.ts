//funktionerna för analoga timer
import moment from 'moment';

function setTimer(){
    const deg: number = 6;
    const min: HTMLElement | null = document.querySelector('.min');
    const sec: HTMLElement | null = document.querySelector('.sec');
    const timerInput: string = (<HTMLInputElement>document.getElementById('timerInput')).value;
    const timerMoment: moment.Moment = moment(timerInput, 'mm:ss');
    const mm: number = timerMoment.minutes() * deg;
    const ss: number = timerMoment.seconds() * deg;


    if (min && sec) {
        min.style.transform = `rotateZ(${mm}deg)`;
        sec.style.transform = `rotateZ(${ss}deg)`;
        console.log(`Transform updated - Minutes: ${mm}, Seconds: ${ss}`);
    
    }
}

function myfunction(){
    console.log("hello");
    anotherFunction();
    
};

function newFunction(){
    console.log("bajs");
    
}

function anotherFunction (){
    console.log("Hjehej");
    
}


export default {myfunction, newFunction, setTimer}

