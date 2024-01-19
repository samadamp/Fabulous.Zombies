import "./style.css";
import moment from 'moment';
import analogfunctions from "./modules/analog";

analogfunctions.myfunction();
analogfunctions.newFunction();


const now = moment();
console.log(now.format('YYYY-MM-DD HH:mm:ss'));

// Funktion för att starta en timer
function startTimer(durationInMinutes: number) {
    const startTime = moment();
    const endTime = moment().add(durationInMinutes, 'minutes');

    // Uppdatera varje sekund
    const timerInterval = setInterval(() => {
        const currentTime = moment();
        const remainingTime = moment.duration(endTime.diff(currentTime));

        // Visa återstående tid
        console.log(`Återstående tid: ${remainingTime.minutes()} minuter och ${remainingTime.seconds()} sekunder`);

        // Om tiden har gått ut, avsluta timern
        if (currentTime.isAfter(endTime)) {
            clearInterval(timerInterval);
            console.log('Timer avslutad!');
        }
    }, 1000); // Uppdatera varje sekund
}

// Exempel: Starta en timer på 5 minuter
startTimer(5);

const app = document.querySelector<HTMLDivElement>("#app")!;

interface Todo {
  id: number;
  label: string;
  description?: string;
  done: boolean;
}

const todos: Todo[] = [
  { id: 0, label: "buy groceries", done: true },
  { id: 1, label: "buy eggs", done: false },
  { id: 2, label: "sleep", done: true },
];

todos.forEach((todo) => {
  const div = document.createElement("div");
  div.innerHTML = `label: ${todo.label} - done: ${todo.done}`;
  app.append(div);
});



