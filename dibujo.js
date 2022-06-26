var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById ("dibujito");
var ancho = d.width;

var lienzo = d.getContext("2d");

//lienzo.beginPath();
//lienzo.strokeStyle  = "blue"
//lienzo.moveTo(50, 10);
//lienzo.lineTo(250, 2);
//lienzo.stroke();
//lienzo.closePath();

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle  = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{

//dibujar_linea("pink", 10,300, 220,10)

//while(l < lineas)
//{
//l = l + 1; o l++
//}

var lineas = parseInt(texto.value);
var l = 0;
var espacio = ancho / lineas;

for(l = 0; l < lineas; l++)
{
  yi = espacio * l;
  xf = espacio * (l+1);
dibujarLinea("#AAF", 0, yi, xf, 300);
console.log("linea" + l);
}
dibujarLinea("blue", 0, 0, 0, 300);
dibujarLinea("blue", 0, 300, 300, 300);

for(l = 0; l < lineas; l++)
{
  xi = espacio * l;
  yf = espacio * (l+1);
dibujarLinea("#AAF", xi, 0, 300, yf);
console.log("linea" + l);
}
dibujarLinea("blue", 0, 0, 300, 0);
dibujarLinea("blue", 300, 0, 300, 300);
}
