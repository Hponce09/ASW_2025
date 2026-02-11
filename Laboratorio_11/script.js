const currentTurn = document.getElementById("turn");
const startWidth = window.innerWidth;

let playerWin = false;
let teclaReinicio = document.getElementById("reinicio");

// Array combinaciones ganadoras
const combinacionesGanadoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Array para almacenar el estado de la partida
let estadoPartida = ["", "", "", "", "", "", "", "", ""];

let turnoActual = "X";

function startGame() {
  const newDiv = document.createElement("div");
  newDiv.className = "tablero_principal";

  for (let i = 0; i < 9; i++) {
    const contenedor = document.createElement("div");
    contenedor.className = "celda";

    // Atributo data-index para identificar cada celda
    contenedor.dataset.index = i;

    // Event listener para manejar los clics en las celdas
    contenedor.addEventListener("click", manejarClick);

    newDiv.appendChild(contenedor);
  }

  currentTurn.textContent = `Turno actual: ${turnoActual}`;

  document.body.appendChild(newDiv);
}

function manejarClick(evento) {
  if (playerWin === true) {
    return;
  }
  const celda = evento.target;
  const index = celda.dataset.index;

  if (estadoPartida[index] === "") {
    estadoPartida[index] = turnoActual;

    celda.textContent = turnoActual;
    celda.classList.add("ocupada");
    celda.classList.add(`player${turnoActual}`);

    validacionGanador();

    turnoActual = turnoActual === "X" ? "O" : "X";
    currentTurn.style.color = turnoActual === "X" ? "steelblue" : "indianred";
    currentTurn.textContent = `Turno actual: ${turnoActual}`;

    console.log("Estado actual de la partida:", estadoPartida);
  }
}

function validacionGanador() {
  let pos1;
  let pos2;
  let pos3;

  for (combinacion of combinacionesGanadoras) {
    pos1 = estadoPartida[combinacion[0]];
    pos2 = estadoPartida[combinacion[1]];
    pos3 = estadoPartida[combinacion[2]];

    if (pos1 != "" && pos1 === pos2 && pos2 === pos3) {
      playerWin = true;
      alert(`Win!!! ${turnoActual}`);
      return;
    }
  }

  if (estadoPartida.every((casilla) => casilla !== "")) {
    alert("empate");
  }
}

function reinicio(e) {
  const tecla = "r";
  const key = e.key;
  if (key.toLowerCase() !== tecla) {
    console.log("hola");
  } else {
    console.log(key);

    //Paso 1: Reiniciar variables (Memoria)

    playerWin = false;
    estadoPartida = ["", "", "", "", "", "", "", "", ""];
    turnoActual = "X";
    currentTurn.textContent = `Turno actual: ${turnoActual}`;

    //Paso 2: Limpiar la "Pizarra" (El DOM)

    const casillas = document.querySelectorAll(".celda");

    casillas.forEach((casilla) => {
      casilla.innerHTML = "";

      casilla.classList.remove("ocupada");
      casilla.classList.remove("playerX");
      casilla.classList.remove("playerO");
    });
  }
}

window.addEventListener("resize", (e) => {
  const actualWidth = window.innerWidth;

  if (startWidth !== actualWidth) {
    document.body.classList.add("visual-dinamic");
    //console.log(actualWidth + " diferente " + startWidth);

    // Calcular el color
    const nuevoTono = actualWidth % 360;

    // Inyectar el color
    document.body.style.setProperty("--tono", nuevoTono);

    //console.log("Color actual (tono): " + nuevoTono);
  }
});

teclaReinicio.addEventListener("keydown", reinicio);
startGame();
