
let ball;        
let paddle1, paddle2;
let ballSpeed = 8; 
let paddleSpeed = 8; 
let ballRadius = 15;  
let paddleWidth = 10; 
let paddleHeight = 100; 

function setup() {
  createCanvas(700, 400);  
  

  ball = {
    x: width / 2,
    y: height / 2,
    vx: random([-ballSpeed, ballSpeed]), 
    vy: random([-ballSpeed, ballSpeed])  
  };
  
  
  paddle1 = {
    x: 10, 
    y: height / 2 - paddleHeight / 2,
    vy: random([-paddleSpeed, paddleSpeed])  
  };
  
  paddle2 = {
    x: width - 10 - paddleWidth, 
    y: height / 2 - paddleHeight / 2,
    vy: random([-paddleSpeed, paddleSpeed]) 
  };
}

function draw() {
  background(0); // Limpa a tela com a cor preta
  
  // Desenha a bola
  fill(255); // Cor branca
  noStroke();
  ellipse(ball.x, ball.y, ballRadius * 2, ballRadius * 2);
  
  // Move a bola
  ball.x += ball.vx;
  ball.y += ball.vy;
  
  // Verifica colisão com as paredes superior e inferior
  if (ball.y - ballRadius < 0 || ball.y + ballRadius > height) {
    ball.vy *= -1;
  }
  
  if (collidesWithPaddle(paddle1) || collidesWithPaddle(paddle2)) {
    ball.vx *= -1;
  }
  
  // Verifica se a bola saiu da tela pela esquerda ou direita
  if (ball.x - ballRadius < 0 || ball.x + ballRadius > width) {
    resetBall();
  }
  
  
  fill(255); 
  rect(paddle1.x, paddle1.y, paddleWidth, paddleHeight);
  rect(paddle2.x, paddle2.y, paddleWidth, paddleHeight);
  
  
  movePaddle(paddle1);
  movePaddle(paddle2);
  
  
  paddle1.y = constrain(paddle1.y, 0, height - paddleHeight);
  paddle2.y = constrain(paddle2.y, 0, height - paddleHeight);
}


function movePaddle(paddle) {
  paddle.y += paddle.vy;
  
  
  if (paddle.y <= 0 || paddle.y >= height - paddleHeight) {
    paddle.vy *= -1;
  }
}

// Verifica se a bola colidiu com uma das barras
function collidesWithPaddle(paddle) {
  return ball.x - ballRadius < paddle.x + paddleWidth &&
         ball.x + ballRadius > paddle.x &&
         ball.y - ballRadius < paddle.y + paddleHeight &&
         ball.y + ballRadius > paddle.y;
}

function resetBall() {
  ball.x = width / 2;
  ball.y = height / 2;
  ball.vx = random([-ballSpeed, ballSpeed]);
  ball.vy = random([-ballSpeed, ballSpeed]); 
}
swwswsws