var teclas = {
              UP:38,
              DOWN: 40,
              LEFT: 37,
              RIGHT: 39,
                        };

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var alto = area_de_dibujo.width;
var ancho = area_de_dibujo.height;
var x = 100;
var y = 100;

//
cuadrito.addEventListener('mousedown', function(evt)
  {
    var mousePos = getMousePos(cuadrito, evt);
    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    console.log(message);
  },
                                                          false);
//
//
function getMousePos(canvas, evt)
      {
        return {
                x: evt.clientX,
                y: evt.clientY
              };
      }
//
//
function dibujarLinea(colorcito, xinicial, yinicial, xfinal, yfinal, lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = colorcito;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }
dibujarLinea("red", x-1, y-1, x+1, y+1, papel);
//
//
document.addEventListener("keydown", dibujarTeclado);
function dibujarTeclado(evento)
{
      var  colorcito = "green";
      var  movimiento = 1;
      switch(evento.keyCode)
    {

      case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;

      case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;

      case teclas.RIGHT:
      dibujarLinea(colorcito, x + movimiento, y, x, y, papel);
      x = x + movimiento;
      break;

      case teclas.LEFT:
      dibujarLinea(colorcito, x - movimiento, y, x, y, papel);
      x = x - movimiento;
      break;

      default:
      //console.log("Otra Tecla "+evento.keyCode)
      break;
    }
};
