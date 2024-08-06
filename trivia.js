
let preguntas = [
  { id:1,
    pregunta: "¿En que año Finalizo la Segunda Guerral Mundial?",
    respuestaA: "1950",
    respuestaB: "1960",
    respuestaC: "1945",
    respuestaD: "1934",
    respuestaCorrecta: "1945",
  },
  { id:2,
    pregunta: "¿Cuantos copas del mundo tiene la selección de Argentina?",
    respuestaA: "5",
    respuestaB: "1",
    respuestaC: "8",
    respuestaD: "3",
    respuestaCorrecta: "D",
  },
  { id:3,
    pregunta: "¿Quien escribio la Odisea?",
    respuestaA: "Homero" ,
    respuestaB: "Shakespeare",
    respuestaC: "Picasso",
    respuestaD: "Aristoteles",
    respuestaCorrecta: "A",     
  },
  { id:4,
    pregunta: "¿En que continente se encuentra Ecuador?",
    respuestaA: "Europa",
    respuestaB: "America",
    respuestaC: "Asia",
    respuestaD: "Oceanía",
    respuestaCorrecta: "B",
  },
  { id:5,
    pregunta: "¿Cual es la moneda del Reino Unido?",
    respuestaA: "Libra",
    respuestaB: "Peso",
    respuestaC: "Dolar",
    respuestaD: "Euro",
    respuestaCorrecta: "A",
  }
]



let contenedorPrincipal = document.getElementById("contenedorPrincipal")

contenedorPrincipal.className = "contenedorDeInicio"

contenedorPrincipal.innerHTML = `<div><p>Bienvenido a la Trivia Sobre Cultura General!</p> 
<p>El Objetivo del juego es responder preguntas eligiendo la opcion correcta y poner a prueba todos tus conocimientos.</p>
<p>Cada respuesta correcta sumará 3 puntos a la puntución total y cada respuesta incorrecta restará 1 punto.</p>
<button onclick="formularioNombre()">Comenzemos!</button>
</div>`


let formularioNombre = () =>{
  contenedorPrincipal.innerHTML = ""

  contenedorPrincipal.innerHTML = `<div><p>Para comenzar a jugar ingresa tu nombre</p>
  <form>
  <input type="text" id="nombreUsuario" placeholder="Nombre de Usuario"/>
  <button>Enviar</button>
  </div>`

  let nombreUsuario=""

  
  let infoUsuario = document.getElementById("nombreUsuario")
  infoUsuario.addEventListener("input",()=>{
    console.log(infoUsuario.value);
    nombreUsuario=infoUsuario.value
  }
  )

  let formularioUsuario = document.querySelector("form")
 
      formularioUsuario.addEventListener("submit", (event)=>{
        event.preventDefault()
        sessionStorage.setItem("nombreUsuario", nombreUsuario)
        inicializacion()
      }
      )
}

let puntuacion = 0

let correctas=0

let contenedorJuego = document.querySelector("main")

let inicializacion = () => {

  preguntas.forEach(elemento=> {

  contenedorJuego.innerHTML = ""

  contenedorJuego.innerHTML = `<section class="cajasJuego">
                <div class="cajaPreguntas bordes">
                    <h3 class="preguntas">${elemento.pregunta}</h3>
                </div>
                <div class="cajaRespuestas">
                    <div class="bordeRespuesta bordes">
                        <h4 class="respuesta">
                            ${elemento.respuestaA}
                        </h4>
                    </div>
                    <div class="bordeRespuesta bordes">
                        <h4 class="respuesta">
                        ${elemento.respuestaB}
                        </h4>
                    </div>
                    <div class="bordeRespuesta bordes">
                        <h4 class="respuesta">
                        ${elemento.respuestaC}
                        </h4>
                    </div>
                    <div class="bordeRespuesta bordes">
                        <h4 class="respuesta">
                        ${elemento.respuestaD}
                        </h4>
                    </div>
                </div>
            </section>
            <section class="contador">
                <div class="cajaContador bordes">
                    <p class="puntos">
                        ${puntuacion} Pts.
                    </p>
                </div>
            </section>`
            if(elemento.respuestaC===elemento.respuestaCorrecta){
              return console.log("hola");
              
            }
            
  })

}




// let iniciacion="si"


// while(iniciacion==="si"){

// let puntuacion = 0

// let correctas=0

// let respCorrectas=[]

// preguntas.forEach(elemento=> {
//   let respUsuario=prompt(elemento.pregunta)
//   if (respUsuario==elemento.respuesta){
//     puntuacion += 3
//     correctas +=1
//     respCorrectas.push(elemento)
//   }else{
//     puntuacion -= 1
//   }
// })

// let colectorCorrectas = ()=> {
//   for (let i = 0; i < respCorrectas.length; i++){
//       alert(JSON.stringify(respCorrectas[i].pregunta + " | Respuesta correcta: " + respCorrectas[i].respuesta ))
//     }
//   }

// let idenPreguntas = (identificador) => {
//   for(let i = 0; i < preguntas.length; i++) {
//       if (preguntas[i].id==identificador){
//         alert(JSON.stringify(preguntas[i].pregunta))
//       }
//     }
//   }
// console.log("Correctas = " + correctas);

// console.log("Puntos = " + puntuacion);

// alert("Felicidades " + nombreUsuario + "! Has completado el juego")

// alert("Respondiste correctamente " + correctas + " preguntas y tu puntuacion total es de " + puntuacion + " puntos!")

// let pedidoResp = prompt("Quieres ver tus respuestas correctas?")

// if(pedidoResp==="si"){
// colectorCorrectas()
// }
// let pedidoCorrec = prompt("Quieres ver alguna de las preguntas nuevamente?")

// if(pedidoCorrec==="si"){
//   let pregRequerida=prompt("Cual es la pregunta que quieres ver?")
//   if(pregRequerida<6 && pregRequerida>0){
//     idenPreguntas (pregRequerida)
//     }else {
//       alert("Esa pregunta no existe")
//     }
//   }
// iniciacion=prompt("Quieres volver a jugar?")
// }


