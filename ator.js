//codigo do ator

let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
   image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
}
}
}
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, heigth1, cx, cy, diaameter)
  for(let i = 0; i < imagemCarros.length; i = i + 1)}