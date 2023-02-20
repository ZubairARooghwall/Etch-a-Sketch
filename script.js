let divContainer = document.getElementById("container");


//append the divs to the container as children
function createDivs(rows){
    for(let a = 0; a < rows * rows; a++){
            let createDiv = document.createElement("div");
            divContainer.appendChild(createDiv).className = "children";
 }
}

//call the createChildren function
createDivs(16)

//add eventlistener to ever div in the container
let children = document.querySelectorAll(".children");
children.forEach((item) => {
    item.addEventListener('mouseover', (e) =>{
        console.log("hovered")
        item.classList.add("hovered");
        

    })

});





