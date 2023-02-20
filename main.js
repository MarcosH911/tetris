const blockSize = 25;
const rows = 20;
const cols = 10;
let board;
let context;

let curPiece = [];

window.onload = function () {
  board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext("2d");

  update();
};

function update() {
  updateBoard();
  createPiece();
}

function updateBoard() {
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);
  for (let i = 0; i < board.width; i += blockSize) {
    for (let j = 0; j < board.height; j += blockSize) {
      context.fillStyle = "white";
      context.fillRect(i, j, 1, blockSize);
      context.fillRect(i, j, blockSize, 1);
    }
  }
}

function createPiece() {
  const num = curPiece.Math.floor(Math.random() * 7);
  curPiece.length = 0;
  if (num === 0) {
    curPiece.push([4, 0]);
    curPiece.push([5, 0]);
    curPiece.push([4, 1]);
    curPiece.push([5, 1]);
  } else if (num === 1) {
    curPiece.push([4, 0]);
    curPiece.push([4, 0]);
    curPiece.push([4, 0]);
    curPiece.push([4, 0]);
  } else if (num === 2) {
  } else if (num === 3) {
  } else if (num === 4) {
  } else if (num === 5) {
  } else if (num === 6) {
  }
}
