class BotaoGerenciador {
  constructor(texto, x, y) {
    this.texto = texto
    this.x = x
    this.y = y
    this.botao = createButton(this.texto)
    this.botao.mousePressed(() => this._alteraCena())
    this.botao.addClass('botao-tela-inicial')
  }
  
  draw(y) {
    if(y) this.y = y
    this.botao.position(this.x, this.y)
    this.botao.center('horizontal')
  }
  
  _alteraCena(cena = 'jogo') {
    this.botao.remove()
    cenaAtual = cena
  }
}