/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';
*/
/*
let parrafo = document.querySelector('p');//vairable de alcance global
parrafo.innerHTML = 'Indica un numero del 1 al 100'
*/
//Aqui se esta llamando a la funcion del documento de HTML 

let numeroSecreto = 1;
console.log(numeroSecreto);
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function alerta (){
    alert("En este juego solo vas a tener 3 intentos");
    alert("!MUCHA SUERTE¡");
}
alerta();

function asignarTextoElemento(elemento, texto){
    let elementoHtmlNumero1 = document.querySelector (elemento);
    elementoHtmlNumero1.innerHTML = texto;
    return;
}

function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById ("valorUsuario").value);
    console.log(numeroDeUsuario);
    let maximosintentos = 3;
    console.log (numeroDeUsuario === numeroSecreto);//false o true

while(true){

        if(numeroDeUsuario == numeroSecreto){
            alert("¡Felicidades haz ganado un pinguinito! 🐧");
            alert("Presiona el boton o refresca la pagina para jugar de nuevo");
            asignarTextoElemento ("p", `Acertaste el numero en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);
            document.getElementById("reiniciar").removeAttribute("disabled");
            break;
        } else {
            if(numeroDeUsuario > numeroSecreto){
                asignarTextoElemento ("p","El numero secreto es menor");
            }else{
                asignarTextoElemento("p","El numero secreto es mayor");
            }
            intentos++;
    
            if (intentos > maximosintentos){
                alert(`Llegaste al numero maximo de ${maximosintentos} intentos`);
                alert("Fallaste perdedor, presiona el boton de nuevo juego para intentarlo de nuevo 😃")
                document.getElementById("reiniciar").removeAttribute("disabled");
              }
        }

        console.log(intentos);
        limpiarCaja();

        /*
        console.log(numeroDeUsuario);
        console.log(typeof(numeroDeUsuario));
        console.log(numeroSecreto);
        console.log(typeof(numeroSecreto));
        console.log(numeroDeUsuario === numeroSecreto);
        */
        return;
    }    
}

function limpiarCaja(){
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = parseInt(Math.floor(Math.random()*numeroMaximo))+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos lo numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        alert("Ya se sortearon todos lo numeros posiles");
        //asignarTextoElemento("p","Ya se sorrtearon todos lo numeros posibles")
    }else{

        //Si el numero generado esta incluido enla lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesInciales(){
    asignarTextoElemento("h1","Juego del numero secreto!");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego (){
    ///Limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    condicionesInciales();
    //Generar un nuevo numero aleatorio
    //numeroSecreto = generarNumeroSecreto();
    //Inicializador el numero de intentos
    //intentos = 1;
    //Deshabilitar el boton de nuevo juegop
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

//Esta funcion solo genera el numero aleatorio
condicionesInciales("h1","Juego del numero secreto!");
condicionesInciales("p",`Indica un número del 1 al ${numeroMaximo}`);