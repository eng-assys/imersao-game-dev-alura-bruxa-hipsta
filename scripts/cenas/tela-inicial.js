class TelaInicial {
  constructor() {

  }

  draw() {
    this._imagemDeFundo()
    this._texto()
    this._botao()
  }

  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height)
  }

  _texto() {
    textAlign(CENTER)
    textFont(fonteTelaInicial)
    textSize(70)
    text('As aventuras de', width / 2, height / 3)
    textSize(150)
    text('Hipsta', width / 2, height / 5.5 * 3)
  }
  
  _botao() {
    botaoGerenciador.draw(height / 5 * 3)
  }
}