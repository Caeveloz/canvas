canvas=document.getElementById("canvas")
ctx=canvas.getContext("2d")
 canvas.addEventListener("mousedown",clique)
 function clique(e)
 {
x=e.clientX-canvas.offsetLeft;
y=e.clientY-canvas.offsetTop;
color=document.getElementById("color").value;
desenhar(x,y,color);



 }
 function desenhar (mouseX,mouseY,color)
 {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=1;
    ctx.arc(mouseX,mouseY,10,0,180);
    ctx.stroke();
 }
 function clearArea ()
 {
    ctx.clearRect(0,0,canvas.width,canvas.height)
 }
 