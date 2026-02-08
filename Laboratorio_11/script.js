const currentTurn = document.getElementById("turn");

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
  const celda = evento.target;
  const index = celda.dataset.index;

  if (estadoPartida[index] === "") {
    estadoPartida[index] = turnoActual;

    celda.textContent = turnoActual;
    celda.classList.add("ocupada");
    celda.classList.add(`player${turnoActual}`);

    turnoActual = turnoActual === "X" ? "O" : "X";
    currentTurn.textContent = `Turno actual: ${turnoActual}`;

    console.log("Estado actual de la partida:", estadoPartida);
  }
}

startGame();
