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

            const blackDivs = document.querySelectorAll('.black');
            blackDivs.forEach(blackDiv => {
                let currentOpacity = Number(blackDiv.style.opacity);
                blackDiv.addEventListener('mouseout', () => {
                    if (currentOpacity < 1) blackDiv.style.opacity = currentOpacity + 0.1;
                });
            });
            });       
        });
}

function changeGrid(value) {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        container.removeChild(row);
    });
    grid(value);
    const divs = document.querySelectorAll('.item');
    divs.forEach(div => {
        div.classList.remove('black');
    });
}

function askInput() {
    return +prompt("Please input number for grid(1 - 100).");
}

// Make a default grid
grid(16);

const resetButton = document.querySelector('#reset');
const gridButton = document.querySelector('#grid');

gridButton.addEventListener('click', () => {
    let input = askInput();
    while (input < 1 || input > 100) {
        alert('you should enter a number around 0-100.');
        input = askInput();
    }
    changeGrid(input);

});

resetButton.addEventListener('click', () => {
    changeGrid(16);
});