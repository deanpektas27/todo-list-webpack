import './style.css';
import { format } from 'date-fns'
import { createTodoDOMElements } from './createTodoDOMElements';
import { projectLists } from './projectLists';

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
}

const displayTodos = (entireList) => {
    render();
    createTodoDOMElements(entireList, Object.keys(projectLists).length);
}

// Need a way to add the desired list so it doesnt just use default
const addReminderToList = (title, description, priority) => {
    let reminder = todoFactory(title, description, priority);
    projectLists.default.push(reminder);
    displayTodos();
}

const addList = (name) => {
    Object.assign(projectLists, name);
}

// Push data to list so it may be used by console/DOM
// addReminderToList('SWE Interview w/ Dean', 'Recruiter from linkedin', 'high');

// Checking if addList function works
addList({'wish list': []});

displayTodos(projectLists);
