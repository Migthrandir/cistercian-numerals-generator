
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)  //funcion que executa la accion de dibujar en el canvas 
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function drawInCistercian()             //funcion que se ejecuta al presionar el boton
{
    papel.clearRect(0, 0, d.width, d.height);
    var inputnumero = parseInt(n.value);
    if(inputnumero <= 9999 && inputnumero >= 0)
    {
    var digitosReal = [];                   //aqui se guardan los digitos por separado
    inputnumero = inputnumero/1000;
    
    digitosReal[0] = Math.floor(inputnumero);
    inputnumero = (10 *(inputnumero- digitosReal[0])).toFixed(2);
    
    digitosReal[1] = Math.floor(inputnumero);
    inputnumero =  (10 * (inputnumero - digitosReal[1])).toFixed(1);
    
    digitosReal[2]= Math.floor(inputnumero);
    inputnumero =  (10 * (inputnumero - digitosReal[2])).toFixed(0);
    
    digitosReal[3]= Math.floor(inputnumero);
    
    console.log(digitosReal);
    dibujarLinea(cor, 200, 50, 200, 350, papel);    //linea central del numero
    trazos(digitosReal[0], digitosReal[1], digitosReal[2], digitosReal[3]);
    }
    else
    {
        mensaje.innerHTML = "Por favor, introduzca un número válido";
    }
}

function trazos(n0, n1, n2, n3)         //funcion que designa cuales lineas deben dibujarse segun el numero introducido por el usuario
{
    switch(n3)                      //unidades
    {
        case 1:
            dibujarLinea(cor, 200, 50, 300, 50, papel);
        break;

        case 2:
            dibujarLinea(cor, 200, 150, 300, 150, papel);
        break;

        case 3:
            dibujarLinea(cor, 200, 50, 300, 150, papel);
        break;
        case 4:
            dibujarLinea(cor, 200, 150, 300, 50, papel); 
        break;
        case 5:
            trazos(0,0,0,1);
            trazos(0,0,0,4);
        break; 
        case 6:
            dibujarLinea(cor, 300, 150, 300, 50, papel);
        break;
        case 7:
            trazos(0,0,0,1);
            trazos(0,0,0,6);
        break;
        case 8:
            trazos(0,0,0,2);
            trazos(0,0,0,6);
        break;
        case 9:
            trazos(0,0,0,1);
            trazos(0,0,0,8);
        break;
    }
    switch(n2)                      //decenas
    {
        case 1:
            dibujarLinea(cor, 200, 50, 100, 50, papel);
        break;
        case 2:
            dibujarLinea(cor, 200, 150, 100, 150, papel);
        break;
        case 3:
            dibujarLinea(cor, 200, 50, 100, 150, papel);
        break;
        case 4:
            dibujarLinea(cor, 200, 150, 100, 50, papel);
        break;
        case 5:
            trazos(0,0,1,0);
            trazos(0,0,4,0);
        break;
        case 6:
            dibujarLinea(cor, 100, 50, 100, 150, papel);
        break;
        case 7:
            trazos(0,0,1,0);
            trazos(0,0,6,0);
        break;
        case 8:
            trazos(0,0,2,0);
            trazos(0,0,6,0);
        break;
        case 9:
            trazos(0,0,1,0);
            trazos(0,0,8,0);
        break;
    }

    switch(n1)      //centenas
    {
        case 1:
            dibujarLinea(cor, 200, 350, 300, 350, papel);
        break;
        case 2:
            dibujarLinea(cor, 200, 250, 300, 250, papel);
        break;
        case 3:
            dibujarLinea(cor, 200, 350, 300, 250, papel);
        break;
        case 4:
            dibujarLinea(cor, 200, 250, 300, 350, papel);
        break;
        case 5:
            trazos(0,1,0,0);
            trazos(0,4,0,0);
        break;
        case 6:
            dibujarLinea(cor, 300, 250, 300, 350, papel);
        break;
        case 7:
            trazos(0,1,0,0);
            trazos(0,6,0,0);
        break;
        case 8:
            trazos(0,2,0,0);
            trazos(0,6,0,0);
        break;
        case 9:
            trazos(0,1,0,0);
            trazos(0,8,0,0);
        break;
    }

    switch(n0)          //miles
    {
        case 1:
            dibujarLinea(cor, 200, 350, 100, 350, papel);
        break;
        case 2:
            dibujarLinea(cor, 200, 250, 100, 250, papel);
        break;
        case 3:
            dibujarLinea(cor, 200, 350, 100, 250, papel);
        break;
        case 4:
            dibujarLinea(cor, 200, 250, 100, 350, papel);
        break;
        case 5:
            trazos(1,0,0,0);
            trazos(4,0,0,0);
        break;
        case 6:
            dibujarLinea(cor, 100, 250, 100, 350, papel);
        break;
        case 7:
            trazos(1,0,0,0);
            trazos(6,0,0,0);
        break;
        case 8:
            trazos(2,0,0,0);
            trazos(6,0,0,0);
        break;
        case 9:
            trazos(1,0,0,0);
            trazos(8,0,0,0);
        break;

    }
}

var mensaje = document.getElementById("mensaje");
var cor = "#000000";
var d = document.getElementById("dibujo"); 
var papel = d.getContext("2d");
var b = document.getElementById("dibujarnumero"); //boton
var n = document.getElementById("inputnumero");     //numero introducido
b.addEventListener("click", drawInCistercian);
n.addEventListener("keyup", (event) =>{
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("dibujarnumero").click();
    }
} )