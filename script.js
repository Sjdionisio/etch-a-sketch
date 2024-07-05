const body = document.querySelector("body")

function generateGrid(num){
    const box = document.createElement("div");
    box.setAttribute("class","container");
    body.appendChild(box);
    const grid = num ** 2
    const size = 480/num;
    for(i=0; i<grid; i++){
        const square = document.createElement("div")
        square.setAttribute("class","square");
        square.setAttribute("style",`width: ${size}px; height: ${size}px;`);
        box.appendChild(square);
        square.addEventListener('mouseenter',()=>{
            square.style.backgroundColor="green";
        });
}}
generateGrid(16);

const resize = document.querySelector(".size");

resize.addEventListener('click',()=>{
    let input = parseInt(prompt("Please enter the desired number of boxes per side (max 100)"));
    if(input>100){
        alert("Please input a number below or equal to 100.");
    }
    else if(input<=100){
        const box = document.querySelector(".container");
        box.remove();
        generateGrid(input);
    }
    else{
        alert("Please input a number.");
    }
});