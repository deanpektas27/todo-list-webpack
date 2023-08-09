import './style.css';
import { format } from 'date-fns'


const content = document.querySelector('#content');

// "Todos will be objects that you'll DYNAMICALLY CREATE,
// using either factories OR constructors/classes"

// A reminder has a title, description, dueDate and priority
// Will add more parameters later
const todoFactory = (title, description, priority) => {
    return {
        title, 
        description, 
        priority
    };
};

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

const displayTodos = (list) => {
    render();
    createTodoDOMElements(list);
}

const createTodoDOMElements = (list) => {
    for(const key in list) {
        console.table(list[key].priority);
        // div container for each reminder
        let div = document.createElement('div');
        div.setAttribute('id', `data-index-${key}`);
        // title for each reminder
        let h3 = document.createElement('h3');
        h3.innerText = list[key].title;
        // description for each reminder
        let p = document.createElement('p');
        p.innerText = list[key].description;

        div.appendChild(h3);
        div.appendChild(p);
        content.appendChild(div);
    }
}

// Push data to list so it may be used by console/DOM
projectLists.default.push(todoFactory('SWE Interview w/ Abraham', 'Recruiter from linkedin', 'high'));
projectLists.default.push(todoFactory('Lunch with Kevin', 'Moho (he owes me)', 'medium'));
displayTodos(projectLists.default);