let divContainer = document.getElementById("container");
let elementSize;


//append the divs to the container as children
function createDivs(rows){
    for(let a = 0; a < rows; a++){
        for(let b = 0; b < rows; b++){
            let createDiv = document.createElement("div");
            divContainer.appendChild(createDiv).className = "children";  

 }

} 

    divContainer.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
    divContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;



let children = document.querySelectorAll(".children");
children.forEach((item) => {
    let checkBoxRandom = document.getElementById("Random");
    let checkBoxGrey = document.getElementById("gray");
    item.addEventListener('mouseover', (e) =>{
        console.log("hovered")
        console.log(checkBoxGrey)
        console.log(checkBoxRandom)
        if(checkBoxGrey.checked == false 
            & checkBoxRandom.checked == false 
            || (checkBoxGrey.checked == false && checkBoxRandom.checked == false)){
        item.classList.add("hovered");
        }
        else if(checkBoxRandom.checked == true){
            checkBoxGrey.checked = false;
            item.setAttribute("style", `background-color: rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`);
            console.log(item.getAttribute("style"))
        }
        else if(checkBoxGrey.checked == true){
            checkBoxRandom.checked = false;
            

        }

    })

});

    

}

//call the createChildren function
createDivs(16);

//add eventlistener to ever div in the container


function resize(){
    let size = prompt("Enter the size: (1 <= size <= 100");

    
    elementSize = size;
    let childContainer = divContainer.lastChild;

    while(childContainer){
        divContainer.removeChild(childContainer);
        childContainer = divContainer.lastChild;
    }

    createDivs(size);




}


function generateRandomNumber(){
    let number = Math.floor(Math.random() * 255) + 1;
    console.log(`Random: ${number}`);
    return number;
}