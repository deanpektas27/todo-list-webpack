import './style.css';
import { format } from 'date-fns'
import { createTodoDOMElements } from './createTodoDOMElements';
import { projectLists } from './projectLists';
import { addReminderForm } from './addReminderForm';

const content = document.querySelector('#content');

// Will add more parameters later
const todoFactory = (title, description, priority) => {
    return {
        title, 
        description, 
        priority
    };
};

// This might not be necessary, try to find better implementation
const render = () => {
    content.innerHTML = '';
    addReminderForm();
}

const displayTodos = (entireList) => {
    render();
    createTodoDOMElements(entireList, Object.keys(projectLists).length);
}

const addReminderToList = (list, title, description, priority) => {
    let reminder = todoFactory(title, description, priority);
    projectLists[list].push(reminder);
    displayTodos();
}

const addList = (name) => {
    Object.assign(projectLists, name);
}

// Push data to list so it may be used by console/DOM
addReminderToList('school', 'SWE Interview w/ Abraham', 'Recruiter from linkedin', 'high');

// Checking if addList function works
addList({'wish list': []});
addReminderToList('wish list', 'playstation 5', 'need this!!', 'high');

displayTodos(projectLists);
