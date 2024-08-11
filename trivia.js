let preguntas = [
  {
    id: 1,
    pregunta: "¿En que año Finalizo la Segunda Guerral Mundial?",
    respuestaA: "1950",
    respuestaB: "1960",
    respuestaC: "1945",
    respuestaD: "1934",
    respuestaCorrecta: "1945",
  },
  {
    id: 2,
    pregunta: "¿Cuantos copas del mundo tiene la selección de Argentina?",
    respuestaA: "5",
    respuestaB: "1",
    respuestaC: "8",
    respuestaD: "3",
    respuestaCorrecta: "3",
  },
  {
    id: 3,
    pregunta: "¿Quien escribio la Odisea?",
    respuestaA: "Homero",
    respuestaB: "Shakespeare",
    respuestaC: "Picasso",
    respuestaD: "Aristoteles",
    respuestaCorrecta: "Homero",
  },
  {
    id: 4,
    pregunta: "¿En que continente se encuentra Ecuador?",
    respuestaA: "Europa",
    respuestaB: "America",
    respuestaC: "Asia",
    respuestaD: "Oceanía",
    respuestaCorrecta: "America",
  },
  {
    id: 5,
    pregunta: "¿Cual es la moneda del Reino Unido?",
    respuestaA: "Libra",
    respuestaB: "Peso",
    respuestaC: "Dolar",
    respuestaD: "Euro",
    respuestaCorrecta: "Libra",
  },
];

let contenedorPrincipal = document.getElementById("contenedorPrincipal");

contenedorPrincipal.className = "contenedorDeInicio";

contenedorPrincipal.innerHTML = `<div><p>Bienvenido a la Trivia Sobre Cultura General!</p> 
  <p>El Objetivo del juego es responder preguntas eligiendo la opcion correcta y poner a prueba todos tus conocimientos.</p>
  <p>Cada respuesta correcta sumará 3 puntos a la puntución total y cada respuesta incorrecta restará 1 punto.</p>
  <button id="comenzar-btn" ">Comenzemos!</button>
  </div>`;

let formularioNombre = () => {
  contenedorPrincipal.innerHTML = `<div><p>Para comenzar a jugar ingresa tu nombre</p>
    <form>
    <input type="text" id="nombreUsuario" placeholder="Nombre de Usuario"/>
    <button>Enviar</button>
    </form>
    </div>`;

  let nombreUsuario;

  let infoUsuario = document.getElementById("nombreUsuario");
  infoUsuario.addEventListener("input", () => {
    // console.log(infoUsuario.value);
    nombreUsuario = infoUsuario.value;
  });

  let formularioUsuario = document.querySelector("form");

  formularioUsuario.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(nombreUsuario);

    sessionStorage.setItem("nombreUsuario", nombreUsuario);
    inicializacion(0);
  });
};

let inicializacion = (indice) => {
  contenedorJuego.innerHTML = `<section class="cajasJuego">
                    <div class="cajaPreguntas bordes">
                        <h3 class="preguntas">${preguntas[indice].pregunta}</h3>
                    </div>
                    <div class="cajaBotonRespuesta">
                        <button id="btn-respuestaA" class="botonRespuesta">${preguntas[indice].respuestaA}</button>
                        </div>
                        <div class="cajaBotonRespuesta">
                        <button id="btn-respuestaB" class="botonRespuesta">${preguntas[indice].respuestaB}</button>
                        </div>
                        <div class="cajaBotonRespuesta">
                        <button id="btn-respuestaC" class="botonRespuesta">${preguntas[indice].respuestaC}</button>
                        </div>
                        <div class="cajaBotonRespuesta">
                        <button id="btn-respuestaD" class="botonRespuesta">${preguntas[indice].respuestaD}</button>
                        </div>
                    </div>
                </section>
                <section class="contador">
                    <div class="cajaContador bordes">
                        <p class="puntos">
                            ${puntuacion} Pts.
                        </p>
                    </div>
                </section>`;
  let btnA = document.getElementById("btn-respuestaA");
  let btnB = document.getElementById("btn-respuestaB");
  let btnC = document.getElementById("btn-respuestaC");
  let btnD = document.getElementById("btn-respuestaD");

  btnA.addEventListener("click", () => {
    if (preguntas[indice].respuestaA === preguntas[indice].respuestaCorrecta) {
      puntuacion += 3;
      correctas += 1;
      if (indice + 1 < preguntas.length) {
        inicializacion(indice + 1);
      } else {
        finalizacion();
      }
    } else {
      if (indice + 1 < preguntas.length) {
        inicializacion(indice + 1);
      } else {
        finalizacion();
      }
    }
  });
  btnB.addEventListener("click", () => {
    if (preguntas[indice].respuestaB === preguntas[indice].respuestaCorrecta) {
      puntuacion += 3;
      correctas += 1;
      if (indice + 1 < preguntas.length) {
        inicializacion(indice + 1);
      } else {
        finalizacion();
      }
    } else {
      if (indice + 1 < preguntas.length) {
        inicializacion(indice + 1);
      } else {
        finalizacion();
      }
    }
  });
  btnC.addEventListener("click", () => {
    if (preguntas[indice].respuestaC === preguntas[indice].respuestaCorrecta) {
      puntuacion += 3;
      correctas += 1;
      if (indice + 1 < preguntas.length) {
        inicializacion(indice + 1);
      } else {
        finalizacion();
      }
    } else {
      if (indice + 1 < preguntas.length) {
        inicializacion(indice + 1);
      } else {
        finalizacion();
      }
    }
  });
  btnD.addEventListener("click", () => {
    if (preguntas[indice].respuestaD === preguntas[indice].respuestaCorrecta) {
      puntuacion += 3;
      correctas += 1;
      if (indice + 1 < preguntas.length) {
        inicializacion(indice + 1);
      } else {
        finalizacion();
      }
    } else {
      if (indice + 1 < preguntas.length) {
        inicializacion(indice + 1);
      } else {
        finalizacion();
      }
    }
  });
};

let finalizacion = () => {
  contenedorJuego.innerHTML = `<section class="cajaFinal">
  <div> 
  <p> Has completado el juego! <p>
    <p> Has obtenido ${puntuacion} puntos!</p>
    <p> Tus respuestas correctas han sido un total de ${correctas}. </p>
    <p> Gracias por jugar! </p>
  </div>
  </section>`;
};
// ========================

let btnComenzar = document.getElementById("comenzar-btn");

btnComenzar.addEventListener("click", formularioNombre);

// ========================

let puntuacion = 0;

let correctas = 0;

let contenedorJuego = document.querySelector("main");

// ========================

// Queria tomar el espacio para hacer algunos comentarios con respecto a mi proyecto.
// Desde ya pido disculpas por la lógica que utilize para llevar a cabo el juego, no estoy conforme al respecto
// pero no pude implementar un ciclo que lea todas las preguntas del array y que me permita continuar a la siguiente
// en base a la respuesta del usuario. La idea es poder aplicarle una mejor lógica al código para que sea mas eficiente.
// En el mientras tanto, el juego lo lleve a cabo a traves de funciones y aplicacion casi todo el html desde javascript.
// Pretendo seguir expandiendo mis conocimientos para poder mejorar y también elevar el nivel de la parte visual.
// Tambien implementar el uso de mas métodos del array principal de preguntas.
