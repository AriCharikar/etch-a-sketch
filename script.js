const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset--button');
const errorMessage = document.querySelector('.error--message');


// Function for creating the grid
function createGrid(num) {
    for (let i = 0; i < num * num ; i++) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'inner--div');
        container.appendChild(newDiv);
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    };
}

// Initial Grid displayed when page is loaded
window.addEventListener('load', () => createGrid(16));


// Toggling the active class when the mouse hovers
document.addEventListener('mouseover', function(e) {
    if (e.target && e.target.classList.contains('inner--div')) {
        e.target.classList.toggle('inner--div-active');
    };
})

// Prompting for new Etch-a-sketch size between 1 and 100, and displaying the error message if the instructions haven't been followed correctly.
resetButton.addEventListener('click', function() {
    const newSketch = prompt('What size should the new Etch-a-sketch be? (Choose a number between 1 and 100.)');
    for (let i = 0; i < container.children.length; i++) {
        if(container.children[i].classList.contains('inner--div-active')) {
            container.children[i].classList.remove('inner--div-active');
        };
    }
    if (newSketch > 0 && newSketch <= 100) {
        container.innerHTML = '';
        errorMessage.classList.add('hidden');
        createGrid(newSketch);
        createColumns(newSketch);
    } else {
        errorMessage.classList.remove('hidden');
    }
    
})