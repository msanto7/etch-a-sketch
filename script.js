//js to create div grid


function createGrid(numRowCol) {

    for (let rows = 0; rows < numRowCol; rows++) {
        for (let cols = 0; cols < numRowCol; cols++) {
            $("grid-container").append("<div class='grid-item'></div>");
        }
    }

    $(".grid-item").width(960/numRowCol);
    $(".grid-item").height(960/numRowCol);

} //end create function

//*******************************************



//Driver 

//this is a Jquery function to make this grid show up on load

$(document).ready(function() {

    createGrid(16);

});

