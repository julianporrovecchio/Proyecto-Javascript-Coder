let preguntas = [];

let datosPartida;

let nombreUsuario;

let puntuacion = 0;

let correctas = 0;

let contenedorJuego = document.querySelector("main");

document.addEventListener("DOMContentLoaded", () => {
  let obtenerPreguntas = fetch("./data.json");

  console.log(obtenerPreguntas);

  obtenerPreguntas
    .then((res) => res.json())
    .then((res) => {
      preguntas = res;
      console.log(preguntas);
    });
});

let contenedorPrincipal = document.getElementById("contenedorPrincipal");

contenedorPrincipal.className = "contenedorDeInicio";

contenedorPrincipal.innerHTML = `<div><p>Bienvenido a la Trivia Sobre Cultura General!</p> 
  <p>El Objetivo del juego es responder preguntas eligiendo la opcion correcta y poner a prueba todos tus conocimientos.</p>
  <p>Cada respuesta correcta sumará 3 puntos a la puntución total y cada respuesta incorrecta restará 1 punto.</p>
  <button id="comenzar-btn">Comenzemos!</button>
  </div>`;

let formularioNombre = () => {
  contenedorPrincipal.innerHTML = `<div><p>Para comenzar a jugar ingresa tu nombre</p>
      <form>
      <input type="text" id="nombreUsuario" placeholder="Nombre de Usuario"/>
      <button>Enviar</button>
      </form>
      </div>`;

  let infoUsuario = document.getElementById("nombreUsuario");
  infoUsuario.addEventListener("input", () => {
    nombreUsuario = infoUsuario.value;
  });

  let formularioUsuario = document.querySelector("form");

  formularioUsuario.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(nombreUsuario);

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
      Toastify({
        text: "Respuesta Correcta!",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
      if (indice + 1 < preguntas.length) {
        inicializacion(indice + 1);
      } else {
        finalizacion();
      }
    } else {
      puntuacion -= 1;
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
      Toastify({
        text: "Respuesta Correcta!",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
      if (indice + 1 < preguntas.length) {
        inicializacion(indice + 1);
      } else {
        finalizacion();
      }
    } else {
      puntuacion -= 1;
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
      Toastify({
        text: "Respuesta Correcta!",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
      if (indice + 1 < preguntas.length) {
        inicializacion(indice + 1);
      } else {
        finalizacion();
      }
    } else {
      puntuacion -= 1;
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
      Toastify({
        text: "Respuesta Correcta!",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();

      if (indice + 1 < preguntas.length) {
        inicializacion(indice + 1);
      } else {
        finalizacion();
      }
    } else {
      puntuacion -= 1;

      if (indice + 1 < preguntas.length) {
        inicializacion(indice + 1);
      } else {
        finalizacion();
      }
    }
  });
};

let ultimasPartidas = () => {
  contenedorJuego.innerHTML = `<section class="cajaPartidas">
    <div id="usuarios"></div>
    </section>`;

  let keys = Object.keys(localStorage);

  keys.forEach((key) => {
    let value = JSON.parse(localStorage.getItem(key));

    let tarjetaUsuario = document.createElement("div");
    tarjetaUsuario.innerHTML = `<p>Usuario: ${key}</p>
    <p>Correctas:${value.correctas}</p>
    <p>Puntuacion:${value.puntuacion}</p>`;

    let usuarios = document.getElementById("usuarios");
    usuarios.appendChild(tarjetaUsuario);
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
    <button id="btn-volverAJugar">Volver a Jugar</button>
    <button id="btn-ultimasPartidas">Ultimas Partidas</button>
    
    </section>`;
  datosPartida = {
    nombreUsuario: nombreUsuario,
    puntuacion: puntuacion,
    correctas: correctas,
  };
  console.log(datosPartida);

  localStorage.setItem(nombreUsuario, JSON.stringify(datosPartida));

  let btnVolverAJugar = document.getElementById("btn-volverAJugar");

  btnVolverAJugar.addEventListener("click", () => {
    puntuacion = 0;
    correctas = 0;
    datosPartida = {};
    inicializacion(0);
  });

  let btnUltimasPartidas = document.getElementById("btn-ultimasPartidas");

  btnUltimasPartidas.addEventListener("click", ultimasPartidas);
};

let btnComenzar = document.getElementById("comenzar-btn");

btnComenzar.addEventListener("click", formularioNombre);
