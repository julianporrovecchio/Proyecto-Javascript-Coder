
let preguntas = [
  { id:1,
    pregunta: "En que año Finalizo la Segunda Guerral Mundial? A. 1950 B. 1960 C. 1945 D. 1934",
    respuesta: "C",
  },
  { id:2,
    pregunta: "Cuantos copas del mundo tiene la selección de Argentina? A. 5 B. 1 C. 8 D. 3",
    respuesta: "D",
  },
  { id:3,
    pregunta: "Quien escribio la Odisea? A. Homero B. Shakespeare C. Picasso D. Aristoteles",
    respuesta: "A",     
  },
  { id:4,
    pregunta: "En que continente se encuentra Ecuador? A. Europa B. America C. Asia D. Oceanía",
    respuesta: "B",
  },
  { id:5,
    pregunta: "Cual es la moneda del Reino Unido? A. Libra B. Peso C. Dolar D. Euro",
    respuesta: "A",
  }
]

alert("Bienvenido a la Trivia Sobre Cultura General!")

alert("El Objetivo del juego es responder preguntas eligiendo la opcion correcta")

alert("Cada respuesta correcta sumará 3 puntos a la puntución total y cada respuesta incorrecta restará 1 punto")

alert("Comenzemos!")

let nombreUsuario = prompt("Ingresa tu nombre")

let iniciacion="si"

while(iniciacion==="si"){

let puntuacion = 0

let correctas=0

let respCorrectas=[]

preguntas.forEach(elemento=> {
  let respUsuario=prompt(elemento.pregunta)
  if (respUsuario==elemento.respuesta){
    puntuacion += 3
    correctas +=1
    respCorrectas.push(elemento)
  }else{
    puntuacion -= 1
  }
})

let colectorCorrectas = ()=> {
  for (let i = 0; i < respCorrectas.length; i++){
      alert(JSON.stringify(respCorrectas[i].pregunta + " | Respuesta correcta: " + respCorrectas[i].respuesta ))
    }
  }

let idenPreguntas = (identificador) => {
  for(let i = 0; i < preguntas.length; i++) {
      if (preguntas[i].id==identificador){
        alert(JSON.stringify(preguntas[i].pregunta))
      }
    }
  }
console.log("Correctas = " + correctas);

console.log("Puntos = " + puntuacion);

alert("Felicidades " + nombreUsuario + "! Has completado el juego")

alert("Respondiste correctamente " + correctas + " preguntas y tu puntuacion total es de " + puntuacion + " puntos!")

let pedidoResp = prompt("Quieres ver tus respuestas correctas?")

if(pedidoResp==="si"){
colectorCorrectas()
}
let pedidoCorrec = prompt("Quieres ver alguna de las preguntas nuevamente?")

if(pedidoCorrec==="si"){
  let pregRequerida=prompt("Cual es la pregunta que quieres ver?")
  if(pregRequerida<6 && pregRequerida>0){
    idenPreguntas (pregRequerida)
    }else {
      alert("Esa pregunta no existe")
    }
  }
iniciacion=prompt("Quieres volver a jugar?")
}
