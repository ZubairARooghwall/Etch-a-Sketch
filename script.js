let divContainer = document.getElementById("container");
let prevSize;

//append the divs to the container as children
function createDivs(rows){
    for(let a = 0; a < rows * rows; a++){
        let createDiv = document.createElement("div");
        divContainer.appendChild(createDiv).className = "children";
 }
    prevSize = rows;
}

//call the createChildren function
createDivs(16);

//add eventlistener to ever div in the container
let children = document.querySelectorAll(".children");
children.forEach((item) => {
    item.addEventListener('mouseover', (e) =>{
        console.log("hovered")
        item.classList.add("hovered");
        

    })

});



function resize(){
    let size = prompt("Enter the size: ");

    let childContainer = divContainer.lastChild;

    while(childContainer){
        divContainer.removeChild(childContainer);
        childContainer = divContainer.lastChild;
    }

    createDivs(size);




}


