let grid = document.querySelector(".Grid");

let black_and_white = ["white", "black"];

function Grid_16x16() {

    let i = 0; 

while (i < 256) {
    let gridDivs = document.createElement('div');
    gridDivs.style.backgroundColor = "black";
    gridDivs.style.width = "2em";
    gridDivs.classList.add("gridDiv")
    gridDivs.style.height = "2em";
    grid.appendChild(gridDivs);
    i++;
}

}

function change_grid_size() {
    let grid_button = document.querySelector('#grid_size');
    let gridDivs = document.querySelectorAll('div.gridDiv');

    grid_button.addEventListener('click', () => {
    let userPrompt = prompt("Enter a new value for the Grid! You MUST enter a number between 0 to 100.");


/* Prompt */
i = 0

if (userPrompt > 100) {
    alert("Invalid.")
}

})};


function change_grid_colour() {
let grid_board = grid.querySelectorAll('div.gridDiv');

grid_board.forEach( (gridDiv) => {
    gridDiv.addEventListener('mouseover', () => {
        gridDiv.style.backgroundColor = black_and_white[Math.floor(Math.random() * black_and_white.length)];
    });
});


};

Grid_16x16();
change_grid_colour();
change_grid_size();