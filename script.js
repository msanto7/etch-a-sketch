//js to create div grid


const container = document.querySelector('.grid-container');


function createGrid(numRowCol) {

    for (let rows = 0; rows < numRowCol; rows++) {
        for (let cols = 0; cols < numRowCol; cols++) {
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "grid-item");
            document.getElementsByClassName("grid-container")[0].appendChild(newDiv);
        }
    }

    //(".grid-item").width(960/numRowCol);
    //document.setAttribute(".grid-item").height(960/numRowCol);

} //end create function

//*******************************************
//Mouse Over




container.addEventListener('mousemove', (e) => {
    e.target.style.background = 'brown';
});








//Driver 
document.body.onload = createGrid(16);

