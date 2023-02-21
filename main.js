const blockSize = 25;
const rows = 20;
const cols = 10;
let board;
let context;

let curPiece = [];
let allPieces = [];

window.onload = function () {
  board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext("2d");

  createPiece();
  drawPiece();
  setInterval(update, 500);
};

function update() {
  updateBoard();
  movePiece();
  drawPiece();
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
  const num = Math.floor(Math.random() * 7);
  curPiece.length = 0;
  if (num === 0) {
    curPiece.push([4 * blockSize, 0 * blockSize]);
    curPiece.push([5 * blockSize, 0 * blockSize]);
    curPiece.push([4 * blockSize, 1 * blockSize]);
    curPiece.push([5 * blockSize, 1 * blockSize]);
  } else if (num === 1) {
    curPiece.push([3 * blockSize, 0 * blockSize]);
    curPiece.push([4 * blockSize, 0 * blockSize]);
    curPiece.push([4 * blockSize, 1 * blockSize]);
    curPiece.push([5 * blockSize, 1 * blockSize]);
  } else if (num === 2) {
    curPiece.push([4 * blockSize, 0 * blockSize]);
    curPiece.push([5 * blockSize, 0 * blockSize]);
    curPiece.push([3 * blockSize, 1 * blockSize]);
    curPiece.push([4 * blockSize, 1 * blockSize]);
  } else if (num === 3) {
    curPiece.push([4 * blockSize, 0 * blockSize]);
    curPiece.push([3 * blockSize, 1 * blockSize]);
    curPiece.push([4 * blockSize, 1 * blockSize]);
    curPiece.push([5 * blockSize, 1 * blockSize]);
  } else if (num === 4) {
    curPiece.push([3 * blockSize, 0 * blockSize]);
    curPiece.push([4 * blockSize, 1 * blockSize]);
    curPiece.push([5 * blockSize, 1 * blockSize]);
    curPiece.push([3 * blockSize, 1 * blockSize]);
  } else if (num === 5) {
    curPiece.push([5 * blockSize, 0 * blockSize]);
    curPiece.push([3 * blockSize, 1 * blockSize]);
    curPiece.push([4 * blockSize, 1 * blockSize]);
    curPiece.push([5 * blockSize, 1 * blockSize]);
  } else if (num === 6) {
    curPiece.push([3 * blockSize, 0 * blockSize]);
    curPiece.push([4 * blockSize, 0 * blockSize]);
    curPiece.push([5 * blockSize, 0 * blockSize]);
    curPiece.push([6 * blockSize, 0 * blockSize]);
  }
}

function movePiece() {
  let bottom = false;
  for (let i = 0; i < curPiece.length; i++) {
    curPiece[i][1] += blockSize;
    if (curPiece[i][1] === blockSize * rows) {
      bottom = true;
    }
  }
  if (bottom) {
    allPieces.push(JSON.parse(JSON.stringify(allPieces)));
    createPiece();
  }
}

function drawPiece() {
  context.fillStyle = "red";
  for (let i = 0; i < curPiece.length; i++) {
    context.fillRect(
      curPiece[i][0],
      curPiece[i][1],
      blockSize + 1,
      blockSize + 1
    );
  }
  for (let i = 0; i < allPieces.length; i++) {
    for (let j = 0; j < allPieces[i].length; j++) {
      console.log(allPieces[i][j][0], allPieces[i][j][1]);
      context.fillRect(
        allPieces[i][j][0],
        allPieces[i][j][1],
        blockSize + 1,
        blockSize + 1
      );
      // context.fillRect(100, allPieces[i][j][1], blockSize + 1, blockSize + 1);
    }
  }
}
