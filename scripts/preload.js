function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png')
  imagemGameOver = loadImage('imagens/assets/game-over.png')
  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png')
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png')
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
  imagemVida = loadImage('imagens/assets/coracao.png')
  
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf')
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3')
  somDoPulo = loadSound('sons/som_do_pulo.mp3')
  
  fita = loadJSON('fita/fita.json')
}