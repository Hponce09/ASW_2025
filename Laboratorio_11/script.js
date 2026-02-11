const currentTurn = document.getElementById("turn");

// Array combinaciones ganadoras
const combinacionesGanadoras = [
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]
]

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
    validacionGanador();
  }
}

function validacionGanador(){

    let pos1;
    let pos2;
    let pos3;

    for (combinacion  of combinacionesGanadoras){

        pos1 = estadoPartida[combinacion[0]];
        pos2 = estadoPartida[combinacion[1]];
        pos3 = estadoPartida[combinacion[2]];

        if (pos1 != "" && pos1 === pos2 && pos2 === pos3){    
            return alert("Win!!! ", turnoActual);
        }
           
    }

    if (estadoPartida.every(casilla => casilla !== "")){
        alert("empate")
    }
}
startGame();
