
var texto =document.getElementById("texto_lineas");
var boton =document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(colorcito, xinicial, yinicial, xfinal, yfinal, lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = colorcito;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }

function dibujoPorClick()
{
 var x = texto.value;
 console.log(texto);
 alert("No me toques hay "+ texto.value);
 var xxx = parseInt(texto.value);

 var lineas = texto.value;
 var l = 0;
 var yi, xf;
 var colorcito = "red"
 var espacio = ancho / lineas;
 for(l=0; l < lineas; l++)
   {
     yi = espacio * l;
     xf = espacio * (l + 1);
     dibujarLinea(colorcito, 0, yi, xf, 300),
     dibujarLinea(colorcito, yi, 0, 300, xf),
     console.log("linea" + l);
   }

     l = 0;
     while (l < lineas)
       {
         yi = espacio * l;
         xf = ancho - espacio * (l + 1);
         dibujarLinea("green", xf, 0, 0, yi),
         dibujarLinea("orange", xf, 300, 300, yi),
         console.log("linea" + l);
         l = l + 1;
       }


     }
