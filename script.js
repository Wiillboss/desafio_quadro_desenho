//Initial Data
let currentCollor = 'black';
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');
let canDraw = false;

//Events
document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click', colorClickEvent);
});
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

/*
Passo a passo para desenhar no canvas:
-Quando o click do mouse ABAIXAR, ative o modo desenho.
-QUando o mouse se MOVER, se o modo desenho estiver ativado, desenhe.
-Quando o clicl do mouse LEVANTAR, desative o modo desenho.
*/

//Functions
function colorClickEvent(e){
    let color = e.target.getAttribute('data-color');
    currentCollor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function mouseDownEvent(e){
    canDraw = true;
    mouseX = e.pagex - screen.offsetLeft;
    mouseX = e.pagey - screen.offsetTop;
    
}

function mouseMoveEvent(e){
    if(canDraw){
        draw(e.pageX, e.pageY);
    }
}

function mouseUpEvent(){
    canDraw = false;
}

function draw(x,y){
    let ponintX = x - screen.offsetLeft;
    let ponintY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(ponintX, ponintY);
    ctx.closePath();
    ctx.strokeStyle = currentCollor;
    ctx.stroke();
    
    mouseX = ponintX;
    mouseY  = ponintY;  
}