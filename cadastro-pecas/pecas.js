/**
 * CADASTRO DE PEÇAS
 * 1. Criar as peças  - Criar um array para os nomes das peças
 * 2. Peça deve possuir mais de 100g para ser cadastrada
 * 3. Capacidade máxima de peças cadastradas é de 10 unidades
 * 4. Verificar se a peça possui um nome de mais de 3 caracteres
 */

const listaPecas = ["Volante", "Motor", "Radiador", "Vela"];
console.log("Lista de peças: ", listaPecas);

if (listaPecas.length < 10) {
  console.log("É possível cadastrar mais peças!");
} else {
  console.log("Não há mais espaço na lista!");
}

var pesoPeca = 100;
if (pesoPeca >= 100) {
  console.log("Peso da peça está adequado!");
} else {
  console.log("Peso insuficiente!");
}

let nomePeca = "Retrovisor";

if (nomePeca.length > 3) {
  console.log("Nome adequado!");
} else if (nomePeca.length == 0) {
  console.log("O nome da peça não pode ser vazio!");
} else {
  console.log("O nome da peça deve conter mais de 3 caracteres");
}
