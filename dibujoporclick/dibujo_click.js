//var dimension = hoja.getContext('2d');
//let valor_ejes = document.querySelector ('#valor_ejes');
//var hoja = document.getElementById('area_de_dibujo');
//hoja.addEventListener ('mousemove', function captura);

//function captura (e)
//{
//  valor_ejes.innerText =
//  Screen X/Y: ${e.screenX}, ${e.screenY}
//  Client X/Y: ${e.clientX}, ${e.clientY}';
//}
// When true, moving the mouse draws on the canvas
var isDrawing = false;
var x = 0;
var y = 0;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');

// The x and y offset of the canvas from the edge
// of the page.
const rect = myPics.getBoundingClientRect();

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener('mousedown', e => {
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }
});

myPics.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
