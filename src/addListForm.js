import { addList } from ".";

const addListForm = (entireList) => {
    let form = document.createElement('form');
    let h2 = document.createElement('h2');
    h2.innerText = 'Add New List';
    h2.setAttribute('style', 'text-decoration: underline');
    form.setAttribute('style', `margin: 20px;border: 2px solid black;padding: 10px;`);
    form.setAttribute('id', `addList`);
    form.appendChild(h2);

    // Input Title box
    let reminderTitleLabel = document.createElement('label');
    reminderTitleLabel.setAttribute('for','listTitle');
    reminderTitleLabel.innerText = 'Title';
    let reminderTitleInput = document.createElement('input');
    reminderTitleInput.setAttribute('type','text');
    reminderTitleInput.setAttribute('id','listTitle');
    form.appendChild(reminderTitleLabel);
    form.appendChild(reminderTitleInput);

    // Submit List Btn
    let submitList = document.createElement('input');
    submitList.setAttribute('type','button');
    submitList.setAttribute('value','Add List');
    submitList.setAttribute('id','submitList');
    form.appendChild(submitList);

    content.appendChild(form);
    
    submitList.addEventListener('click', () => {
        let title = document.querySelector('#listTitle').value;
        console.log(title);
        addList({[title]: []});
    })
}

export { addListForm };