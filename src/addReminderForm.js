import { addReminderToList } from './index';

const addReminderForm = (projectLists) => {
    let form = document.createElement('form');
    let h2 = document.createElement('h2');
    h2.innerText = 'Add Reminder to List';
    h2.setAttribute('style', 'text-decoration: underline');
    form.setAttribute('style', `margin: 20px;border: 2px solid black;padding: 10px;`);
    form.setAttribute('id', `addReminder`);
    form.appendChild(h2);

    // Input Title box
    let reminderTitleLabel = document.createElement('label');
    reminderTitleLabel.setAttribute('for','inputTitle');
    reminderTitleLabel.innerText = 'Title';
    let reminderTitleInput = document.createElement('input');
    reminderTitleInput.setAttribute('type','text');
    reminderTitleInput.setAttribute('id','inputTitle');
    form.appendChild(reminderTitleLabel);
    form.appendChild(reminderTitleInput);

    // Input Description box
    let reminderDescriptionLabel = document.createElement('label');
    reminderDescriptionLabel.setAttribute('for','inputDescription');
    reminderDescriptionLabel.innerText = 'Description';
    let reminderDescriptionInput = document.createElement('input');
    reminderDescriptionInput.setAttribute('type','text');
    reminderDescriptionInput.setAttribute('id','inputDescription');
    form.appendChild(reminderDescriptionLabel);
    form.appendChild(reminderDescriptionInput);

    //Input Priority box
    let reminderPriorityLabel = document.createElement('label');
    reminderPriorityLabel.setAttribute('for', 'inputPriority');
    reminderPriorityLabel.innerText = 'Priority';
    let dropdown = document.createElement('select');
    dropdown.setAttribute('id','priority');
    let optionLow = document.createElement('option');
    let optionMedium = document.createElement('option');
    let optionHigh = document.createElement('option');
    optionLow.setAttribute('value','low');
    optionLow.innerText = 'Low';
    optionMedium.setAttribute('value','medium');
    optionMedium.innerText = 'Medium';
    optionHigh.setAttribute('value','high');
    optionHigh.innerText = 'High';
    dropdown.appendChild(optionLow);
    dropdown.appendChild(optionMedium);
    dropdown.appendChild(optionHigh);

    form.appendChild(reminderPriorityLabel);
    form.appendChild(dropdown);

    //Input Desired List
    let reminderListLabel = document.createElement('label');
    reminderListLabel.setAttribute('for', 'inputList');
    reminderListLabel.innerText = 'Choose List';
    let listDropdown = document.createElement('select');
    listDropdown.setAttribute('id', 'listdropdown');
    for(const key in projectLists) {
        let option = document.createElement('option');
        option.setAttribute('value', `${key}`);
        option.innerText = key;
        listDropdown.appendChild(option);
    }
    form.appendChild(reminderListLabel);
    form.appendChild(listDropdown);

    // Submit Reminder Btn
    let submit = document.createElement('input');
    submit.setAttribute('type','button');
    submit.setAttribute('value','Add Reminder');
    submit.setAttribute('id','submitbtn');
    form.appendChild(submit);

    content.appendChild(form);

    submit.addEventListener('click', () => {
        let title = document.querySelector('#inputTitle').value;
        let description = document.querySelector('#inputDescription').value;
        let priority = document.querySelector('#priority').value;
        let chosenList = document.querySelector('#listdropdown').value;
        console.log(chosenList, title, description, priority, chosenList);
        console.log(projectLists);
        addReminderToList(chosenList, title, description, priority);
    })

}

export { addReminderForm };