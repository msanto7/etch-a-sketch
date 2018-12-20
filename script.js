//js to create div grid
let grid = document.getElementsByClassName("grid-container")[0];
const container = document.querySelector(".grid-container");


function createGrid(numRow, numCol) {

    for (let rows = 0; rows < numRow; rows++) {
        for (let cols = 0; cols < numCol; cols++) {
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "grid-item");
            document.getElementsByClassName("grid-container")[0].appendChild(newDiv);
        }
    }
}

//Mouse Over
container.addEventListener('mousemove', (e) => {
    e.target.style.background = 'black';
});

//Reset Button
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    reset();
    createGrid(60, 90);
});
function reset() {
    while (grid.firstChild) grid.removeChild(grid.firstChild);
    //createGrid(60,90);
}

//Driver 
document.body.onload = createGrid(60, 90);

