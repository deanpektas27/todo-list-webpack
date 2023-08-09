import './style.css';
import { format } from 'date-fns'
import { createTodoDOMElements } from './createTodoDOMElements';
import { projectLists } from './projectLists';
import { addReminderForm } from './addReminderForm';

const content = document.querySelector('#content');

    
// This might not be necessary, try to find better implementation
const render = () => {
    content.innerHTML = '';
    addReminderForm(projectLists);

    createTodoDOMElements(projectLists);
}

// Will add more parameters later
const todoFactory = (title, description, priority) => {
    return {
        title, 
        description, 
        priority
    };
};


const addReminderToList = (list, title, description, priority) => {
    let reminder = todoFactory(title, description, priority);
    projectLists[list].push(reminder);
    render();
}

const addList = (name) => {
    Object.assign(projectLists, name);
}


// Push data to list so it may be used by console/DOM
//addReminderToList('school', 'SWE Interview w/ Abraham', 'Recruiter from linkedin', 'high');

// Checking if addList function works
addList({'Wish': []});
addReminderToList('Wish', 'playstation 5', 'need this!!', 'high');

render();

export { addReminderToList };
