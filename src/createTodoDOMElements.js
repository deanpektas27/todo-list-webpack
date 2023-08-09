
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

export { createTodoDOMElements };