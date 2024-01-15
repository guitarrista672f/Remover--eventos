// Dejar de Escuchar a eventos
// G.Fernando Treviño Estrada
// 1-14-2024



//Consultas
let ul=document.getElementById('resultados');
const btn=document.querySelector('button');
let contenedor=document.querySelector('.main');

let contador=0;
let contadorLista=0;



/*Codigo para  la lista con deteccion de eventos de click */

function manejador({target}){//Desestructurando el objeto,tomando solo el target

    contadorLista++;

    if(contadorLista<=ul.childElementCount){
            console.log(contadorLista);
            target.classList.add('esconder');
        
    }else{
            alert('Evento de la lista removido');
            ul.removeEventListener('click',manejador);
    }
        
}

//Agregando evento click en ul (padre) aprovechando el efecto burbuja

ul.addEventListener('click',manejador);


//================================================


/*Codigo para  el boton con evento click 
  Despues de n numero de clicks se remueve el evento*/
 
function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }
  
  function changeBackground() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
   contenedor.style.backgroundColor = rndCol;
  }  
 
function handler(){

    if(contador<=200){
        console.log('Haz hecho un click en el boton');
        changeBackground()
    contador++;
    }
    else{
        alert('Se ha removido el Escuchador de eventos del boton');
        btn.removeEventListener('click',handler)  ;

    }
}

//Agregando evento click en boton 
 btn.addEventListener('click',handler)  ;

 










