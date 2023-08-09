
const createTodoDOMElements = (entireList, listCount) => {
    console.log('Current amount of lists ', listCount);


    for(const key in entireList) {
        console.log(entireList[key]);
        // div for entire list
        let listBox = document.createElement('div');
        listBox.setAttribute('id', `list-${key}`);
        content.appendChild(listBox);

        for(let i = 0; i < entireList[key].length; i++) {
            // Each reminder gets their own div
            console.log(entireList[key][i]);
            let reminderDiv = document.createElement('div');
            reminderDiv.setAttribute('id','reminder');

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
            //Title
            reminderDiv.appendChild(h2);
            //Priority
            reminderDiv.appendChild(h4);
            //Description
            reminderDiv.appendChild(p);


            listBox.appendChild(reminderDiv);
        }
    }
}

export { createTodoDOMElements };
