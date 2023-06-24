//VARIAVEIS DO CARROS
let xCarros = [600,600,600,600,600,600];
let yCarros = [40,96,150, 210, 270, 318];
let comprimentoCarro = 50;
let alturaCarro = 40;

//VARIAVEIS VELOCIDADE 
let velocidadeCarros = [2,3,2.5, 3.3, 5, 2.3];


//FUNÇÃO PARA DESENHAR CARRO NA TELA

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
   
    }
}

//FUNÇÃO PARA MOVIMENTAR CARRO

function movimentaCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
        }
}


function voltaPosicao(){
  for (let i = 0; i< imagemCarros.length; i++){
  if (passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
}
  }
}

function passouTodaATela(xCarros){
  return xCarros < -50;
}

