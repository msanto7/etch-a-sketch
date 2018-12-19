//js to create div grid


function createGrid(numRowCol) {

    for (let rows = 0; rows < numRowCol; rows++) {
        for (let cols = 0; cols < numRowCol; cols++) {
            //$("grid-container").append("<div class='grid-item'></div>");
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "grid-item");
            //console.log(newDiv.className);
            document.getElementsByClassName("grid-container")[0].appendChild(newDiv);
        }
    }

    //(".grid-item").width(960/numRowCol);
    //document.setAttribute(".grid-item").height(960/numRowCol);

} //end create function

//*******************************************



//Driver 

//this is a Jquery function to make this grid show up on load
/* JQeuery Option
$(document).ready(function() {
    createGrid(16);
});
*/

document.body.onload = createGrid(16);

