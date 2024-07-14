alert("Bienvenido a la Trivia Sobre Cultura General!")

alert("El Objetivo del juego es responder preguntas eligiendo la opcion correcta")

alert("Cada respuesta correcta sumará 3 puntos a la puntución total y cada respuesta incorrecta restará 1 punto")

alert("Comenzemos!")

let nombreUsuario = prompt("Ingresa tu nombre")

console.log(nombreUsuario);

let puntuacion

let correctas

let gameInit="si"

function sumar(){

  puntuacion = puntuacion + 3

  correctas = correctas + 1
}

function restar(){

  puntuacion = puntuacion - 1
}

while (gameInit=="si"||gameInit=="SI"){

  puntuacion=0

  correctas=0

  let respuesta1= prompt("En que año Finalizo la Segunda Guerral Mundial? A. 1950 B. 1960 C. 1945 D. 1934")

    if(respuesta1=="C"||respuesta1=="c"){

      sumar()

    }else {

      restar()

    }
    console.log(puntuacion);

  let respuesta2=prompt("Cuantos copas del mundo tiene la selección de Argentina? A. 5 B. 1 C. 8 D. 3")

    if(respuesta2=="D"||respuesta2=="d"){
      
      sumar()

    }else {

      restar()

    }

    console.log(puntuacion);

  let respuesta3=prompt("Quien escribio la Odisea? A. Homero B. Shakespeare C. Picasso D. Aristoteles")

    if(respuesta3=="A"||respuesta3=="a"){

      sumar()

    }else {

      restar()
      
    }
    console.log(puntuacion);

  let respuesta4=prompt("En que continente se encuentra Ecuador? A. Europa B. America C. Asia D. Oceanía")

    if(respuesta4=="B"||respuesta4=="b"){

      sumar()

    }else {

      restar()

    }
    console.log(puntuacion);

  let respuesta5=prompt("Cual es la moneda del Reino Unido? A. Libra B. Peso C. Dolar D. Euro")

    if(respuesta5=="A"||respuesta5=="a"){

      sumar()
      
    }else {

      restar()
      
    }
    console.log(puntuacion);

  console.log("Correctas = " + correctas);

  console.log("Puntos = " + puntuacion);

  alert("Felicidades " + nombreUsuario + "! Has completado el juego")

  alert("Respondiste correctamente " + correctas + " preguntas y tu puntuacion total es de " + puntuacion + " puntos!")


  gameInit=prompt("¿Quieres volver a jugar?")

}

alert("Gracias por jugar!")

// Para todo el juego use el ciclo while gracias a la recomendacion de la correccion y use las funciones para eficientizar el proceso y el codigo.




