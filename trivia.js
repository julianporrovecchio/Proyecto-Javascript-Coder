alert("Bienvenido a la Trivia Sobre Cultura General!")

alert("El Objetivo del juego es responder preguntas eligiendo la opcion correcta")

alert("Cada respuesta correcta sumará 3 puntos a la puntución total y cada respuesta incorrecta restará 1 punto")

alert("Comenzemos!")

let nombreUsuario = prompt("ingresa tu nombre")

console.log(nombreUsuario);

var puntuacion = 0

var correctas = 0

//El problema que tuve era que estaba nombrando las variables con let, lo cual no me permitia que el puntaje se actualize en cada if y se mofique de manera global. Por eso cambie las variables a var.

let respuesta1= prompt("En que año Finalizo la Segunda Guerral Mundial? A. 1950 B. 1960 C. 1945 D. 1934")

if(respuesta1=="C"||respuesta1=="c"){

  puntuacion= puntuacion+3

  correctas= correctas + 1

  puntuacionA="correcta"

}else {
  puntuacion=puntuacion - 1

  puntuacionA="incorrecta"
}
console.log(puntuacion);

let respuesta2=prompt("Cuantos copas del mundo tiene la selección de Argentina? A. 5 B. 1 C. 8 D. 3")

if(respuesta2=="D"||respuesta2=="d"){

  puntuacion= puntuacion+3

  correctas=correctas+1 

}else {

  puntuacion=puntuacion - 1

}

console.log(puntuacion);

let respuesta3=prompt("Quien escribio la Odisea? A. Homero B. Shakespeare C. Picasso D. Aristoteles")

if(respuesta3=="A"||respuesta3=="a"){

  puntuacion= puntuacion+3

  correctas=correctas+1

}else {

  puntuacion=puntuacion - 1
  
}
console.log(puntuacion);

let respuesta4=prompt("En que continente se encuentra Ecuador? A. Europa B. America C. Asia D. Oceanía")

if(respuesta4=="B"||respuesta4=="b"){

  puntuacion= puntuacion+3

  correctas=correctas+1

}else {

  puntuacion=puntuacion - 1

}
console.log(puntuacion);

let respuesta5=prompt("Cual es la moneda del Reino Unido? A. Libra B. Peso C. Dolar D. Euro")

if(respuesta5=="A"||respuesta5=="a"){

  puntuacion= puntuacion+3

  correctas=correctas+1
  
}else {

  puntuacion=puntuacion - 1
  
}

console.log("puntuacion total: "+puntuacion);

console.log("respuestas correctas: " + correctas);

//No pude encontrar una aplicacion realmente util para un ciclo en el juego que elegi. Por eso hice un ciclo for que se repite una vez para ejecutar el alert de los puntos obtenidos y para que se vea el entendimiento del concepto del bucle. 

for(var i = 0; i < 1;i++){
  if (correctas==1){
    alert("Has obtenido: -1 puntos!")
    
  }else if(correctas==2){
    alert("Has obtenido: 3 puntos!")
    
  }else if(correctas==3){
    alert("Has obtenido: 7 puntos!")
    
  }else if (correctas==4){
    alert("Has obtenido: 11 puntos!")
    
  }else if(correctas==5){
    alert("Has obtenido: 15 puntos!")
    
  }
  else{
    alert("No has obtenido ningun punto")
  }
  
}

