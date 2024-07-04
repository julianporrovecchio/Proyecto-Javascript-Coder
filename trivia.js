// let nombre = "juan"

// console.log(nombre);

// let nombre2 = "pedro"
// console.log(nombre2);

// let nombre3 = nombre + " " + nombre2    

// console.log(nombre3);

// if(nombre==="juan"){
//     nombre2="marcos" 
//     nombre3= nombre + " " +nombre2
// } 
// console.log(nombre2);
// console.log(nombre3);

// let numeroUsuario = Number(prompt("ingrese un numero"))

// console.log(numeroUsuario);

// if(numeroUsuario>=1){   
// numeroUsuario= numeroUsuario + 50 

// numeroUsuario= numeroUsuario / 2
// alert("Tu Numero +50 /2 = "+ numeroUsuario )
// }else{
//     alert("Te equivocaste")
// }



// if(numeroUsuario===8 || numeroUsuario=== 14){
//     alert("ganaste un premio")
// }else{
//     alert("segui participando")
// }


// for(let i = 10; i<=10;i++){

//     let resultado = numeroUsuario * i;
//     console.log(numeroUsuario+ " x " + i + " = " + resultado);
// }

// alert("Bienvenido a la Trivia Sobre Cultura General!")

// alert("El Objetivo del juego es responder preguntas eligiendo la opcion correcta")

// alert("Cada respuesta correcta sumará 3 puntos a la puntución total y cada respuesta incorrecta restará 1 punto")

// alert("Comenzemos!")

let nombreUsuario = prompt("ingresa tu nombre")

let correcta = 3
let incorrecta = -1
let puntuacion = 0  

let respuesta1= prompt("En que año Finalizo la Segunda Guerral Mundial? A. 1950 B. 1960 C. 1945 D. 1934")

console.log(respuesta1);

if(respuesta1==="c"){
    let puntuacion = puntuacion + 3
    console.log(puntuacion);
}else{
    let puntuacion = puntuacion - 1
    console.log(puntuacion);
}


