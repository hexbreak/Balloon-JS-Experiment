const container = document.querySelector('.container');
let balloons = [
    'pink', 'black', 'red', 'purple',
    'pink', 'pink', 'red', null,
    'pink', 'purple', 'yellow', 'purple',
    'pink', 'black', 'red', 'purple',
    'pink', 'black', 'red', 'black',
];

function popBalloon(pos){
    balloons[pos] = null;
    renderBalloons();
}

function renderBalloons(){
    let content = "";
    balloons.forEach(function(color, position){
        let balloonVisibility = "visibled";
        if(color === null){
            balloonVisibility = "popped";
        } 
    
        content =  content + `<div 
            class="balloon ${balloonVisibility}" 
            style="background: ${color}"
            onClick="popBalloon(${position});"
            ></div>`;
    });
    container.innerHTML = content;
}

renderBalloons();
console.log("Hello World on the console");