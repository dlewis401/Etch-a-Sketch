let grid = document.querySelector(".Grid");

function gridDiv() {

    let i = 0; 

while (i < 256) {
    let gridDivs = document.createElement('div');
    gridDivs.style.backgroundColor = "black";
    gridDivs.style.width = "2em";
    gridDivs.style.height = "2em";
    grid.appendChild(gridDivs);
    console.log("Div made successfully!");
    i++;
}

}

gridDiv();