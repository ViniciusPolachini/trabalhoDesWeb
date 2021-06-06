function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function gerarFrete() {
    return getRandomInteger(3,8);
}

function gerarNumeroDoPedido() {
    return getRandomInteger(0,999999);
}

console.log(localStorage.getItem("informacoes"))