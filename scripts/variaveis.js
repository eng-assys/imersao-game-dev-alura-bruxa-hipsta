let imagemCenario
let imagemGameOver
let imagemPersonagem
let imagemInimigo
let imagemInimigoGrande
let imagemInimigoVoador
let imagemTelaInicial
let imagemVida

let fonteTelaInicial

let jogo
let telaInicial
let cenaAtual = 'telaInicial'
let cenas
let botaoGerenciador
let vida
let fita

let cenario
let pontuacao
let somDoJogo
let somDoPulo
let personagem
const inimigos = []

const matrizInimigo = []
for (let j = 0; j <= 416; j += 104) {
  for (let i = 0; i <= 416; i += 104) {
    matrizInimigo.push([i, j])
  }
}
const matrizInimigoGrande = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const matrizInimigoVoador = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]
const matrizPersonagem = []
for (let j = 0; j <= 810; j += 270) {
  for (let i = 0; i <= 660; i += 220) {
    matrizPersonagem.push([i, j])
  }
}
