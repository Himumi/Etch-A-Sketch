const container = document.querySelector('#container');

function grid(e) {
    for (let i = 0; i < e; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        
        for (let i = 0; i < e; i++) {
            const item = document.createElement('div');
            item.classList.add('item');
            row.appendChild(item);
        }
    }

    const divs = document.querySelectorAll('.item');
    divs.forEach(div => {
        div.addEventListener('mouseover', () =>{
            div.classList.add('black');
        }); 
    });
}

grid(32);