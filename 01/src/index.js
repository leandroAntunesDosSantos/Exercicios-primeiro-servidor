const express = require("express");
const { jogadores } = require("./bancodedados");
const app = express();

let jogadorDaVez = 0;

app.get("/jogadores", (requisicao, resposta) => {
  const nomeJogador = jogadores[jogadorDaVez];
  jogadorDaVez++;
  if (jogadorDaVez >= jogadores.length) {
    jogadorDaVez = 0;
  }
  return resposta.send(`È a vez de ${nomeJogador} jogar`);
});
app.listen(3000, () => {
  console.log("porta 3000");
});
