import './style.css';
import { format } from 'date-fns'


const content = document.querySelector('#content');

// "Todos will be objects that you'll DYNAMICALLY CREATE,
// using either factories OR constructors/classes"

// Lets start with creating a factory that creates reminders,
// then log them to console (make this a separate module)

// A reminder has a title, description, dueDate and priority
// Will add more parameters later
const reminderFactory = (title, description, priority) => {
    return {
        title, 
        description, 
        priority
    };
};

const reminder = reminderFactory('Get milk', 'Go to Stop n Shop for milk', 'low');

content.innerText = `${reminder.title}\n ${reminder.description}\n ${reminder.priority} Priority`;

// Next, lets add an array that pushes the reminders to it
