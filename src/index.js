import './style.css';
import { format } from 'date-fns'
import { createTodoDOMElements } from './createTodoDOMElements';
import { projectLists } from './projectLists';
import { addReminderForm } from './addReminderForm';
import { addListForm } from './addListForm';

const content = document.querySelector('#content');

    
// This might not be necessary, try to find better implementation
const render = () => {
    content.innerHTML = '';
    addReminderForm(projectLists);
    addListForm(projectLists);

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
    render();
}


// Push data to list so it may be used by console/DOM

render();

export { addReminderToList, addList, render };
