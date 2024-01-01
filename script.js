const container = document.querySelector('#container');

function grid(e) {
    for (let i = 0; i < e; i++) {
        const row = document.createElement('div');
        row.classList.add('row', 'row-' + i);
        container.appendChild(row);
        
        for (let i = 0; i < e; i++) {
            const item = document.createElement('div');
            item.classList.add('item', 'item-' + i);
            row.appendChild(item);
        }
    }
}

grid(16);