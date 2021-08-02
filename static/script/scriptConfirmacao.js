
$(document).ready(function(){
let dados = JSON.parse(localStorage.getItem('informacoes'));

let Informacoes = dados[0];

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

for(let i of Informacoes.produtos){
    div = document.createElement('div');
    img = document.createElement('img');
    Pnome = document.createElement('p');
    Pquantidade = document.createElement('p');
    Ppreco = document.createElement('p');

    div.setAttribute('class', 'itemCarrinho');
    img.setAttribute('class', 'iconeproduto');
    img.setAttribute('src', i.produto.Img);
    Pnome.setAttribute('class', 'nome-carrinho');
    Pquantidade.setAttribute('class', 'qtd-carrinho');
    Ppreco.setAttribute('class', 'preco-carrinho');

    Pnome.innerHTML = i.produto.Nome;
    Pquantidade.innerHTML = `Qtd: ${i.quantidade}`;
    Ppreco.innerHTML = `R$${i.produto.Preco},00`;

    div.appendChild(img);
    div.appendChild(Pnome);
    div.appendChild(Pquantidade);
    div.appendChild(Ppreco);

    document.getElementById('Carrinho').appendChild(div);
}

// Div Total

divtotal = document.createElement('div');
ptotal = document.createElement('p');
total = document.createElement('p');

divtotal.setAttribute('id', 'DivTotal');
ptotal.setAttribute('class', 'nome-carrinho');
total.setAttribute('class', 'qtd-carrinho');
 
ptotal.innerHTML = `Total:`;
total.innerHTML = `R$${Informacoes.total},00`;

divtotal.appendChild(ptotal);
divtotal.appendChild(total);

document.getElementById('Subtotal').appendChild(divtotal);

// Endereço de entrega
let frete = gerarFrete();
let pEndereco = document.createElement('p');
pEndereco.setAttribute('class', 'texto');
pEndereco.innerHTML=`O produto será entregue em: ${Informacoes.rua}, nº ${Informacoes.numero} - ${Informacoes.bairro} 
<br> Cep: ${Informacoes.cep}
<br>Tempo estimado para chegada do pedido: ${frete} a ${frete+5} dias.`;
document.getElementById('ContentConfirmacao').appendChild(pEndereco);
});
