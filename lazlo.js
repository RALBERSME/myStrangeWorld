const board = document.getElementById("chess");

const startPosition = [
  "♜",
  "♞",
  "♝",
  "♛",
  "♚",
  "♝",
  "♞",
  "♜",
  "♟",
  "♟",
  "♟",
  "♟",
  "♟",
  "♟",
  "♟",
  "♟",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♖",
  "♘",
  "♗",
  "♕",
  "♔",
  "♗",
  "♘",
  "♖",
];

let draggedStone = null;

for (let i = 0; i < 64; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  const row = Math.floor(i / 8);
  const col = i % 8;
  square.classList.add((row + col) % 2 === 0 ? "white" : "black");

  if (startPosition[i]) {
    square.textContent = startPosition[i];
    square.setAttribute("draggable", true);
  }

  square.addEventListener("dragstart", (e) => {
    draggedStone = e.target;
  });

  square.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  square.addEventListener("drop", () => {
    if (draggedStone && draggedStone !== square) {
      square.textContent = draggedStone.textContent;
      draggedStone.textContent = "";
    }
  });

  board.appendChild(square);
}
