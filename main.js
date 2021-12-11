var mouseEvent = "empty";
var last_pos_x, last_pos_y;
canvas = document.getElementById("mi_canvas")
ctx = canvas.getContext("2d");

color = "red";
lineWidth = 1;

canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e) {
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_pos_x = e.clientX - canvas.offsetLeft;
    current_pos_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_pos_x + "y = " + last_pos_y);
        ctx.moveTo(last_pos_x, last_pos_y);
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_pos_x + "y = " + current_pos_y);
        ctx.lineTo(current_pos_x, current_pos_y);
        ctx.stroke();
    }
    last_pos_x = current_pos_x;
    last_pos_y = current_pos_y;
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseUp"; 
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseLeave"; 
}
var touchEvent = "empty";
var last_pos_x2, last_pos_y2;
canvas = document.getElementById("mi_canvas")
ctx = canvas.getContext("2d");

color = "red";
lineWidth = 1;

canvas.addEventListener("touchdown", my_touchDown);

function my_touchDown(e) {
    touchEvent = "touchDown";
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_pos_x2 = e.touches[0].clientX - canvas.offsetLeft;
    current_pos_y2 = e.touches[0].clientY - canvas.offsetTop;

    if (mouseEvent == "touchDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_pos_x2 + "y = " + last_pos_y2);
        ctx.moveTo(last_pos_x2, last_pos_y2);
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_pos_x2 + "y = " + current_pos_y2);
        ctx.lineTo(current_pos_x2, current_pos_y2);
        ctx.stroke();
    }
    last_pos_x2 = current_pos_x2;
    last_pos_y2 = current_pos_y2;
}
canvas.addEventListener("touchup", my_touchup);

function my_touchup(e){
    touchEvent = "touchUp"; 
}
canvas.addEventListener("touchleave", my_touchleave);

function my_touchleave(e){
    mouseEvent = "touchLeave"; 
}