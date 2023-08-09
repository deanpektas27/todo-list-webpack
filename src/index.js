import './style.css';
import { format } from 'date-fns'


const content = document.querySelector('#content');

// "Todos will be objects that you'll DYNAMICALLY CREATE,
// using either factories OR constructors/classes"

// Lets start with creating a factory that creates reminders,
// then log them to console (make this a separate module)

// A reminder has a title, description, dueDate and priority
// Will add more parameters later
const todoFactory = (title, description, priority) => {
    return {
        title, 
        description, 
        priority
    };
};

// Next, lets add an array that pushes the reminders to it
let projectLists = {
    default: [
        {
            title: 'Get milk',
            description: 'Go to Stop n Shop for milk',
            priority: 'low'
        },
        {
            title: 'Car bill!!',
            description: 'payment is past due..',
            priority: 'high'
        }
    ]
}

const render = () => {
    content.innerHTML = '';
}

// Lets now add all todos in the project list to the screen
const displayTodos = (list) => {
    render();
    // create a function that creates DOM elements with todos
    createTodoDOMElements(list);
}

const createTodoDOMElements = (list) => {
    // Create DIV for every new reminder for easy styling
    for(const key in list) {
        console.log(list[key]);
        let div = document.createElement('div');
        div.setAttribute('id', `data-index-${key}`)
        let h3 = document.createElement('h3');
        h3.innerText = list[key].title;
        div.appendChild(h3);
        content.appendChild(div);
    }
}

// Push data to list so it may be used by console/DOM
// Object.assign(projectLists.default, todoFactory('Get milk', 'Go to Stop n Shop for milk', 'low'));
// Object.assign(projectLists.default, todoFactory('Car bill!!', 'payment is past due..', 'high'));

//console.table(projectLists);
displayTodos(projectLists.default);