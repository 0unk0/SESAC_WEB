const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

const blockSize = 20;
const canvasSize = 400;
const snakeSpeed = 200; // 뱀 이동 속도(밀리초)

let snake = [
  { x: 0, y: 0 }, // 초기 뱀 위치
];

let food = generateFood();

let direction = "right";
let directionBuffer = []; // 키 입력 버퍼;

let snakeLength = 1;

let gameOver = false;

function draw() {
  context.clearRect(0, 0, canvasSize, canvasSize); // 화면 초기화

  if (gameOver) {
    context.fillStyle = "#F00";
    context.font = "30px Arial";
    context.fillText("Game Over", 100, canvasSize / 2);

    // 재시작 여부 확인
    context.font = "20px Arial";
    context.fillText("Retry? Press Y", 100, canvasSize / 2 + 40);
    return;
  }

  drawSnake();
  drawFood();

  moveSnake();
  checkCollision();
  checkFood();
}

function checkCollision() {
  // 벽에 부딪히면 죽기
  const head = snake[0];

  if (
    head.x < 0 ||
    head.x * blockSize > canvasSize - blockSize ||
    head.y < 0 ||
    head.y * blockSize > canvasSize - blockSize ||
    isSnakeCollision()
  ) {
    console.log("죽음");
    gameOver = true;
  }
  // 나의 머리가 나의 몸통에 닿으면 죽기
}

function isSnakeCollision() {
  const head = snake[0];
  return snake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y);
}

function checkFood() {
  const head = snake[0];
  if (head.x === food[0].x && head.y === food[0].y) {
    console.log("같음");
    food = generateFood();
  } else {
    snake.pop();
  }
}

function drawSnake() {
  context.fillStyle = "#00F";

  snake.forEach((segment) => {
    context.fillRect(segment.x * blockSize, segment.y * blockSize, blockSize, blockSize); // x, y, width, height
  });
}

function drawFood() {
  context.fillStyle = "#F00";
  context.fillRect(food[0].x * blockSize, food[0].y * blockSize, blockSize, blockSize);
}

function generateFood() {
  let foodPosition;

  do {
    foodPosition = {
      x: Math.floor(Math.random() * (canvasSize / blockSize)),
      y: Math.floor(Math.random() * (canvasSize / blockSize)),
    };
  } while (isFoodOnSnake(foodPosition));

  return [foodPosition];
}

function isFoodOnSnake(foodPosition) {
  console.log(snake.some((segment) => foodPosition.x === segment.x && foodPosition.y === segment.y));
  return snake.some((segment) => foodPosition.x === segment.x && foodPosition.y === segment.y);
}

function moveSnake() {
  const head = { ...snake[0] };

  if (directionBuffer.length > 0) {
    direction = directionBuffer.shift();
    console.log(direction);
  }

  switch (direction) {
    case "up":
      head.y -= 1;
      break;
    case "down":
      head.y += 1;
      break;
    case "left":
      head.x -= 1;
      break;
    case "right":
      head.x += 1;
      break;
  }
  // 벗어나지 않았다면 머리 추가
  snake.unshift(head);
}

document.addEventListener("keydown", handleKeyPress);

let lastKeyPressTime = 0;

function resetGame() {
  snake = [{ x: 0, y: 0 }];
  direction = "right";
  food = generateFood();
  gameOver = false;
}

function handleKeyPress(event) {
  console.log(event.key);

  if (gameOver) {
    if (event.key.toLowerCase() === "y") {
      resetGame();
    }
    return;
  }

  if (directionBuffer.length >= 2) {
    console.log("너무 많은 키 입력 대기중:", directionBuffer);
    return;
  }

  let previousKeyPress = direction;
  if (directionBuffer.length > 0) {
    previousKeyPress = directionBuffer[directionBuffer.length - 1];
  }

  switch (event.key) {
    case "ArrowUp":
      if (previousKeyPress !== "down") {
        directionBuffer.push("up");
      }
      break;
    case "ArrowDown":
      if (previousKeyPress !== "up") {
        directionBuffer.push("down");
      }
      break;
    case "ArrowLeft":
      if (previousKeyPress !== "right") {
        directionBuffer.push("left");
      }
      break;
    case "ArrowRight":
      if (previousKeyPress !== "left") {
        directionBuffer.push("right");
      }
      break;
  }
}

setInterval(draw, snakeSpeed);
