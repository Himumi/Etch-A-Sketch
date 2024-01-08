const container = document.querySelector('#container');

function grid(e) {
    for (let i = 0; i < e; i++) {
        const row = document.createElement('div');
        row.classList.add('row', i);
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

grid(16);

const gridButton = document.querySelector('#grid');
function askInput() {
    return +prompt("Please input number for grid(1 - 100).");
}
gridButton.addEventListener('click', () => {
    let input = askInput();
    while (input === 0 || input > 100) {
        alert('you should enter number 0-100.');
        input = askInput();
    }
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        container.removeChild(row);
    });
    grid(input);
    const divs = document.querySelectorAll('.item');
    divs.forEach(div => {
        div.classList.remove('black');
    });
});