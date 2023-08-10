import { render } from "./index";

const createTodoDOMElements = (entireList) => {

    for(const key in entireList) {
        // div for entire list
        let listBox = document.createElement('div');
        listBox.setAttribute('id', `list-${key}`);
        listBox.setAttribute('style', `margin: 20px;border: 2px solid black;padding: 10px;`);
        // Title of List
        let listTitle = document.createElement('h2');
        listTitle.innerText = key + " List";
        listBox.appendChild(listTitle);
        content.appendChild(listBox);
        for(let i = 0; i < entireList[key].length; i++) {
            // Each reminder gets their own div
            let reminderDiv = document.createElement('div');
            reminderDiv.setAttribute('id','reminder');
            reminderDiv.setAttribute('style','margin: 20px;border: 2px dotted black;padding: 10px;');

            // Collect all properties of reminder and display them
            let h2 = document.createElement('h2');
            h2.setAttribute('id','reminderTitle')
            h2.innerText = entireList[key][i].title;
            let h4 = document.createElement('h4');
            h4.setAttribute('id','priority');
            h4.innerText = entireList[key][i].priority;
            let p = document.createElement('p');
            p.setAttribute('id','description');
            p.innerText = entireList[key][i].description;

            let deletebtn = document.createElement('button');
            deletebtn.innerText = 'Delete';
            deletebtn.setAttribute('id', key);
            deletebtn.setAttribute('data-index', i)
            
            
            reminderDiv.appendChild(deletebtn);
            //Title
            reminderDiv.appendChild(h2);
            //Priority
            reminderDiv.appendChild(h4);
            //Description
            reminderDiv.appendChild(p);

            listBox.appendChild(reminderDiv);

            deletebtn.addEventListener('click', (btn) => {
                let deleteIndex = btn.target.dataset.index;
                let belongsTo = btn.target.id;
                console.log(deleteIndex, belongsTo);
                console.log(entireList[belongsTo][deleteIndex]);
                let reminderToDelete = entireList[belongsTo][deleteIndex];
                entireList[belongsTo].splice(reminderToDelete,1);
                if(entireList[belongsTo].length < 1) {
                    delete entireList[belongsTo];
                }
                render();
            })
        }
    }
}

export { createTodoDOMElements };
