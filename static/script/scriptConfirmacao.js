let dados = JSON.parse(localStorage.getItem('informacoes'));

let Informacoes = dados[0].items;

console.log(Informacoes);

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function gerarFrete() {
    return getRandomInteger(3,8);
}

function gerarNumeroDoPedido() {
    return getRandomInteger(0,999999);
}

// Div numero do pedido
let numeroPedido = gerarNumeroDoPedido();
let pNumeroPedido = document.createElement('h1');
pNumeroPedido.setAttribute('id', 'NumeroPedido');
pNumeroPedido.innerHTML=`${numeroPedido}`;
document.getElementById('DivNumeroPedido').appendChild(pNumeroPedido);

// Div Carrinho


// Div Total


// Div Endereço de entrega
let pEndereco = document.createElement('p');
pEndereco.setAttribute('class', 'texto');
pEndereco.innerHTML=`${dados.rua}`;
document.getElementById('ContentConfirmacao').appendChild(pEndereco);

// Div frete
let frete = gerarFrete();
let pfrete = document.createElement('p');
pfrete.setAttribute('class', 'texto');
pfrete.innerHTML=`Tempo estimado para chegada do pedido: ${frete} dias.`;
document.getElementById('ContentConfirmacao').appendChild(pfrete);

console.log(localStorage.getItem("informacoes"))
