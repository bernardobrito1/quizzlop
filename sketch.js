let img;
let imginformacoes;
let imgprogramador;
let imgeducadora;
let imgbackgroundcredito;
let imgbackgroundquestao;
let imgbackgroundfinal
let imgcorreto;
let imgerrado;
let seta;
var tela = 1
var xMenu1 = 20
var xMenu2 = 160
var xMenu3 = 300
var yMenu = 390
var largura = 150
var altura = 40
var xInformacoes = 150
var yInformacoes = 200



function preload(){
  img = loadImage('backgroundimage.jpg');
  imginformacoes = loadImage('backgroundinformacoes.jpg');
  imgprogramador= loadImage('programador.JPG')
  imgeducadora = loadImage('educadora.jpg');
  imgseta = loadImage('seta-removida.png');
  imgbackgroundcredito = loadImage('backgroundcreditos.jpg');
  imgbackgroundquestao = loadImage('backgroundquestao.jpg')
  imgcorreto = loadImage('imagemcorreta.png')
  imgerrado = loadImage('imagemerrada.png')
  imgbackgroundfinal = loadImage('backgroundfinal.jpg')
}
function telaMenu(){
  background(img);
  textSize(36)
  text('Conhecendo a puberdade', 240, 50)
  // Iniciar //
  if(mouseX > xMenu1 && mouseX < xMenu1 + largura && mouseY > yMenu && mouseY < yMenu + altura ){
    stroke(255);
    fill(150)
    rect(xMenu1, yMenu, largura, altura, 15)
    if(mouseIsPressed){
      tela = 2
    }
  }
  fill(0)
  noStroke()
  textSize(25)
  text('Iniciar', 100, 420)
  // Informações do jogo//
  if(mouseX > xMenu2 && mouseX < xMenu2 + largura && mouseY > yMenu && mouseY < yMenu + altura ){
  stroke(255);
  fill(150)
  rect(xMenu2, yMenu, largura, altura, 15)
  if(mouseIsPressed){
      tela = 3
    }
  }
  
  fill(0)
  noStroke()
  textSize(25)
  text('Informações' ,235, 420)
  
  // Créditos //
  if(mouseX > xMenu3 && mouseX < xMenu3 + largura && mouseY > yMenu && mouseY < yMenu + altura ){
  stroke(200);
  fill(150)
  rect(xMenu3, yMenu, largura, altura, 15);
  if(mouseIsPressed){
      tela = 4
    }
  }
  fill(0)
  noStroke()
  textSize(25)
  text('Créditos', 380, 420);
  
  
}
function telaInstrucoes(){
  background(imginformacoes);
  stroke(255);
  fill(10)
  rect(xInformacoes, yInformacoes, 250,200 , 15)
  textSize(15)
  text('Jogo consiste em realizar perguntas sobre a puberdade relacionada com hormônios e com o sistema nervoso, a partir disso o jogador selecionará a opcão que achar mais cabível e, logo em seguida, saberá a resposta correta.', 170, 220, 200)
 image(imgseta, 40, 30, 50 , 50)
  if(mouseX > 40 && mouseX < 90 && mouseY > 30 && mouseY < 80){
    if(mouseIsPressed){
      tela = 1
    
    }
  } 
}
function telaCreditos(){
  background(0)
  textSize(36);
  textAlign(LEFT);
  text("Créditos", 180, 70);
  textSize(20);
  text("Alane Brito", 230, 120);
  text("Bernardo Brito", 240, 350);
  textSize(16);
  text("Função: Educadora", 230, 140);
  text("Função: Programador", 230, 370);
  textSize(14);
  fill(240);
  text("Licenciada em Ciências Biológicas pela Universidade Federal do Rio Grande do Norte, professora há 20 anos para o Ensino Fundamental.", 180, 165, 300)
    text("Estudante de Bacharelado em Ciências e Tecnologia na UFRN.", 180, 395, 300)
    image(imgeducadora, 20, 110, 100, 100);
    image(imgprogramador, 20, 330, 100, 100);
  image(imgseta, 40, 30, 50 , 50)
  if(mouseX > 40 && mouseX < 90 && mouseY > 30 && mouseY < 80){
    if(mouseIsPressed){
      tela = 1
    
  }
  }
}
function setup() {
  createCanvas(500, 500);
}
function questao1(){
  background(imgbackgroundquestao);
  stroke(255);
  fill('#e3b6db')
  rect(10,25,480,35 ,15)
  fill(0)
  textSize(20)
  text('Os gametas masculinos e femininos,respectivamente:',250 , 45);
    //Alternativa A//
  
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(20, 150, 140, altura, 15)
  
  if(mouseX > 20 && mouseX < 140 && mouseY > 150 && mouseY < 190 ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(20, 150, 140, altura, 15)
    if(mouseIsPressed){
      tela = 1
      
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('Óvulo e pênis', 90, 175)
 // Alternativa B//
  
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(20, 200, 140, altura, 15)
  if(mouseX > 20 && mouseX < 140 && mouseY >200 && mouseY < 240 ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(20, 200, 140, altura, 15)
    if(mouseIsPressed){
      tela = 1
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('Pênis e ovário', 90, 230)
  // Alternativa C //
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(20, 250, 220, altura, 15)
  
  if(mouseX > 20 && mouseX < 220 && mouseY > 250 && mouseY < 290 ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(20, 250, 220, altura, 15)
    if(mouseIsPressed){
      tela = 5
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('Espermatozoide e óvulo', 130, 275)
  //Alternativa D//
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(20, 300, largura, altura, 15)
  
  if(mouseX > 20 && mouseX < 170 && mouseY > 300 && mouseY < 340 ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(20, 300, largura, altura, 15)
    if(mouseIsPressed){
      tela = 1
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('Próstata e vulva', 100, 325)
}
function questao2(){
  
  background(imgbackgroundquestao);
  stroke(255);
  fill('#e3b6db')
  rect(10,25,490,35 ,15)
  fill(0)
  textSize(20)
  text('Neurotransmissores são moléculas produzidas pelos:',250 , 45);
    //Alternativa A//
  
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(340, 150, 90, altura, 15)
  
  if(mouseX > 340 && mouseX < 430 && mouseY > 150 && mouseY < 190  ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(340, 150, 90, altura, 15)
    if(mouseIsPressed){
      tela = 1
      
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('Músculos', 380, 175)
 // Alternativa B//
  
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(340, 200, 90, altura, 15)
  if(mouseX > 340 && mouseX < 430 && mouseY > 200 && mouseY < 240  ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(340, 200, 90, altura, 15)
    if(mouseIsPressed){
      tela = 1
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('Cérebro', 380, 230)
  // Alternativa C //
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(340, 250, 90, altura, 15)
  
  if(mouseX > 340 && mouseX < 430 && mouseY > 250 && mouseY < 290 ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(340, 250, 90, altura, 15)
    if(mouseIsPressed){
      tela = 6
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('Neurônios', 385, 275)
  //Alternativa D//
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(340, 300, 100, altura, 15)
  
  if(mouseX > 340 && mouseX < 480 && mouseY > 300 && mouseY < 340 ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(340, 300, 100, altura, 15)
    if(mouseIsPressed){
      tela = 1
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('Hormônios', 390, 325)
  
}
function questao3(){
  background(imgbackgroundquestao);
  stroke(255);
  fill('#e3b6db')
  rect(30,25,440,35 ,15)
  fill(0)
  textSize(20)
  text('Nos mamíferos, o hormônio ocitocina estimula',250 , 45);
    //Alternativa A//
  
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(20, 150, 290, altura, 15)
  
  if(mouseX > 20 && mouseX < 310 && mouseY > 150 && mouseY < 190 ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(20, 150, 290, altura, 15)
    if(mouseIsPressed){
      tela = 1
      
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('A eliminação de água pela urina', 163, 175)
 // Alternativa B//
  
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(20, 200, 370, altura, 15)
  if(mouseX > 20 && mouseX < 290 && mouseY >200 && mouseY < 240 ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(20, 200, 370, altura, 15)
    if(mouseIsPressed){
      tela = 7
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('A contração do músculo uterino no parto', 203, 230)
  // Alternativa C //
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(20, 250, 245, altura, 15)
  
  if(mouseX > 20 && mouseX < 265 && mouseY > 250 && mouseY < 290 ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(20, 250, 245, altura, 15)
    if(mouseIsPressed){
      tela = 1
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('O crescimento do indivíduo', 143, 275)
  //Alternativa D//
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(20, 300, 310, altura, 15)
  
  if(mouseX > 20 && mouseX < 330 && mouseY > 300 && mouseY < 340 ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(20, 300, 310, altura, 15)
    if(mouseIsPressed){
      tela = 1
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('O equilíbrio da pressão sanguínea', 174, 325)

}
function questao4(){
  background(imgbackgroundquestao);
  stroke(255);
  fill('#e3b6db')
  rect(80,25,340,35 ,15)
  fill(0)
  textSize(20)
  text('Os ovários produzem os hormônios:',250 , 45);
    //Alternativa A//
  
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(225, 150, 260, altura, 15)
  
  if(mouseX > 280 && mouseX < 485 && mouseY > 150 && mouseY < 190  ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(225, 150, 260, altura, 15)
    if(mouseIsPressed){
      tela = 8
      
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('Progesterona e o estrogênio', 350, 175)
 // Alternativa B//
  
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(225, 200, 260, altura, 15)
  if(mouseX > 280 && mouseX < 485 && mouseY > 200 && mouseY < 240  ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(225, 200, 260, altura, 15)
    if(mouseIsPressed){
      tela = 1
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('Progesterona e a prolactina', 350, 230)
  // Alternativa C //
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(225, 250, 260, altura, 15)
  
  if(mouseX > 280 && mouseX < 485 && mouseY > 250 && mouseY < 290 ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(225, 250, 260, altura, 15)
    if(mouseIsPressed){
      tela = 1
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('Estrogênio e a testosterona', 350, 275)
  //Alternativa D//
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(225, 300, 260, altura, 15)
  
  if(mouseX > 280 && mouseX < 485 && mouseY > 300 && mouseY < 340 ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(225, 300, 260, altura, 15)
    if(mouseIsPressed){
      tela = 1
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('Testosterona e a adrenalina', 350, 325)
  
}
function questao5(){
  background(imgbackgroundquestao);
  stroke(255);
  fill('#e3b6db')
  rect(110,25,280,35 ,15)
  fill(0)
  textSize(20)
  text('A próstata tem como função:',250 , 45);
    //Alternativa A//
  
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(20, 150, 240, altura, 15)
  
  if(mouseX > 20 && mouseX < 260 && mouseY > 150 && mouseY < 190 ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(20, 150, 240, altura, 15)
    if(mouseIsPressed){
      tela = 1
      
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('Produzir espermatozoides', 140, 175)
 // Alternativa B//
  
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(20, 200, 140, altura, 15)
  if(mouseX > 20 && mouseX < 140 && mouseY >200 && mouseY < 240 ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(20, 200, 140, altura, 15)
    if(mouseIsPressed){
      tela = 1
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('Produzir urina', 90, 230)
  // Alternativa C //
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(20, 250, 160, altura, 15)
  
  if(mouseX > 20 && mouseX < 180 && mouseY > 250 && mouseY < 290 ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(20, 250, 160, altura, 15)
    if(mouseIsPressed){
      tela = 1
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('Produzir sêmen', 100, 275)
  //Alternativa D//
  stroke('#e3b6db');
  fill('#e3b6db');
  rect(20, 300, 240, altura, 15)
  
  if(mouseX > 20 && mouseX < 260 && mouseY > 300 && mouseY < 340 ){
    stroke('#ff006f');
    fill('#ff006f');
    rect(20, 300, 240, altura, 15)
    if(mouseIsPressed){
      tela = 9
    }
  }
  fill(0)
  noStroke()
  textSize(20)
  text('Produzir líquido prostático', 140, 325)
}
function final(){
  background(imgbackgroundfinal)
  image(imgseta, 40, 30, 50 , 50)
  if(mouseX > 40 && mouseX < 90 && mouseY > 30 && mouseY < 80){
    if(mouseIsPressed){
      tela = 1
    
    }
  } 
}

function draw() {
  textAlign(CENTER);
  
  if(tela == 1){
    telaMenu()}
  if(tela == 2){
    questao1()}
  if(tela == 3){
    telaInstrucoes()}
  if(tela == 4){
    telaCreditos()}
  if(tela == 5){
    questao2()}
  if(tela == 6){
    questao3()}
  if(tela == 7){
    questao4()}
  if(tela == 8){
    questao5()}
  if(tela == 9){
    final()}
}