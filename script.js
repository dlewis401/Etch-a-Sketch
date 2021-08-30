let container = document.querySelector('.container');
container.style.gridTemplateColumns = "repeat(16, 2em)";
container.style.justifyContent = "center";
container.style.gridGap = "0.1em";
let change_grid_button = document.querySelector('.change_grid');


// This code creates the 16x16 grid.

function grid_creation(i, grid_number) {
    while (i < grid_number) {
        let create_div = document.createElement('div');
        create_div.classList = "Grid_Div"
        create_div.style.width = "2em";
        create_div.style.height = "2em";
        create_div.style.backgroundColor = "black";
        container.appendChild(create_div);
        i++;
    };
}; 

function changeColourDefault(colours) {
    let grid_div_all = document.querySelectorAll('div.Grid_Div');
    grid_div_all.forEach((Grid_Div) => {
        Grid_Div.addEventListener('mouseover', () => {
        Grid_Div.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];
        })
    })};




function change_grid() {
    let grid_div = document.querySelectorAll('.Grid_Div');
    change_grid_button.addEventListener('click', () => {
        let grid_number = parseInt(prompt('Enter a Grid Size Maximum of 64'));

        function wipe_grid() {
        
        
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }};

        if (grid_number <= 64) {
            wipe_grid();
            grid_creation(0, grid_number);
            changeColourDefault(["black", "white"])

            }
    })};


grid_creation(0, 256);
change_grid()
changeColourDefault(["black", "white"])