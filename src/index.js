import './style.css';
import { format } from 'date-fns'
import { createTodoDOMElements } from './createTodoDOMElements';
import { projectLists } from './projectLists';


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

const render = () => {
    content.innerHTML = '';
}

const displayTodos = (list) => {
    render();
    createTodoDOMElements(list);
}

// Push data to list so it may be used by console/DOM
projectLists.default.push(todoFactory('SWE Interview w/ Abraham', 'Recruiter from linkedin', 'high'));
projectLists.default.push(todoFactory('Lunch with Kevin', 'Moho (he owes me)', 'medium'));
displayTodos(projectLists.default);