let dados = JSON.parse(localStorage.getItem('carrinho'));

let Carrinho = dados[0].itens;

let produtos = [];
let quantidade;
let id;
let produto;
let subtotal=0.0;
let carrinho=Carrinho;

console.log(produtos);

let Produtos = [
    {Nome: "Bateria Eletrônica Alesis Command Kit com Pads em Mesh Heads, Módulo 600 Sons e Rack Premium Chrome", categoria: "Baterias", Preco: 9999.00, AVista:8599.00, Img: "static/images/eletronica1.png", id:1},
    {Nome: "Bateria Eletrônica Alesis Nitro Mesh com Pad Dual Zone, Módulo 385 sons, Pedal Simples, Rack 4-Post", categoria: "Baterias", Preco: 5697.00, AVista:4899.00, Img: "static/images/eletronica2.png", id:2},
    {Nome: "Bateria Ludwig Accent Drive Metallic Black e Caixa com Ferragens e Banco", categoria: "Baterias", Preco: 4069.00, AVista: 3499.00, Img: "static/images/bateria1.png", id:3},
    {Nome: "Bateria Mapex Mars Crossover Plus MA528SF Smokewood", categoria: "Baterias", Preco: 6976.00, AVista:5999.00, Img: "static/images/bateria2.png", id:4},

    {Nome: "Crash Octagon Tasmann Medium 18'' TM18CR Crash Ride em Brass Usinado e Martelamento Circular", categoria: "Pratos", Preco: 337.00, AVista:289.00, Img: "static/images/prato1.png", id:5},
    {Nome: "Crash Paiste 101 Brass 14'' 101 C-14", categoria: "Pratos", Preco: 348.00, AVista:299.00, Img: "static/images/prato2.png", id:6},
    {Nome: "Ride Crash Orion Rage 10 Crash Ride 20'' RG20CR em Bronze B10", categoria: "Pratos", Preco: 581.00, AVista:499.00, Img: "static/images/prato3.png", id:7},
    {Nome: "Crash Ride Paiste 101 Brass 18'' 101 CR-18", categoria: "Pratos", Preco: 627.00, AVista:539.00, Img: "static/images/prato4.png", id:8},
    {Nome: "Chimbal Krest Fusion Series Mini Hats 10'' F10MH", categoria: "Pratos", Preco: 697.00, AVista:599.00, Img: "static/images/prato5.png", id:9},
    {Nome: "Chimbal Paiste 201 14'' 201 HH-14", categoria: "Pratos", Preco: 999.00, AVista:859.00, Img: "static/images/prato6.png", id:10},

    {Nome: "Estante Girafa X-Pro C. Ibañez Light Weight EPG-STD com Contrapeso Destacável", categoria: "Ferragens", Preco: 348.00, AVista:299.00, Img: "static/images/ferragem1.PNG", id:11},
    {Nome: "Banco Noah NTR122V Super Leve com Pernas Duplas e Assento Redondo", categoria: "Ferragens", Preco: 348.00, AVista:299.00, Img: "static/images/ferragem2.png", id:12},
    
    {Nome: "Chave de Afinação Premium DB Percussion K02 com Anilha de Chaveiro", categoria: "Acessorios", Preco: 18.00, AVista:15.00, Img: "static/images/acessorio.PNG", id:13},

    {Nome: "Baqueta C Ibanez Hickory 5A Ponta De Madeira", categoria: "Baquetas", Preco: 55.00, AVista:47.00, Img: "static/images/baqueta1.png", id:14},
    {Nome: "Baqueta Alba 5A Shark Grip em Marfim Padrão 5A (2051)", categoria: "Baquetas", Preco: 23.00, AVista:19.00, Img: "static/images/baqueta2.png", id:15},

    {Nome: "Kit de Peles de Caixa Attack 14'' CX2 Medium Coated 2-Ply Ridge Filme Duplo e Pele Resposta Hazy Thin", categoria: "Peles", Preco: 127.00, AVista:109.00, Img: "static/images/pele1.png", id:16},
    {Nome: "Kit de Peles Remo Encore Pinstripe Tons 10'',12'',14'' Filme Duplo tipo Hidráulica Clássica (10649)", categoria: "Peles", Preco: 209.00, AVista:179.00, Img: "static/images/pele2.png", id:17},
];

while(carrinho.length){

    nome = "";
    quantidade = 1;
    id = carrinho[0];
    carrinho.splice(0,1);
    
    for(let i=0; i<Produtos.length; i++){
        if(Produtos[i].id == id){
            produto = Produtos[i];
            subtotal += produto.Preco;
            break;
        }
    }
    
    for(let i=0; i<carrinho.length; i++){
        if(id==carrinho[i]){
            quantidade ++;
            carrinho.splice(i,1);
            subtotal += produto.Preco;
        }
    }

    produtos.push({produto: produto, quantidade: quantidade});
}

$(function(){
    var opcoesEstados;
    $.getJSON('static/script/Estados.json',function(result){
        $.each(result, function(i, estado){
            opcoesEstados+="<option value=' "
            +estado.ID+
            "'>"
            +estado.Nome+
            "</option>";
            });
            $(`#estado`).html(opcoesEstados);
    });    
});

$(document).ready(function(){
    $('#Cep').mask('99999-999');
    $('#Numero').mask('999999');
  });

function criaCarrinho(){    

    let div;
    let img;
    let Pnome;
    let Pquantidade;
    let Ppreco;

    for(let i of produtos){

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

    divtotal = document.createElement('div');
    ptotal = document.createElement('p');
    total = document.createElement('p');

    divtotal.setAttribute('id', 'DivTotal');
    ptotal.setAttribute('class', 'nome-carrinho');
    total.setAttribute('class', 'qtd-carrinho');
 
    ptotal.innerHTML = `Total:`;
    total.innerHTML = `R$${subtotal},00`;

    divtotal.appendChild(ptotal);
    divtotal.appendChild(total);

    document.getElementById('Subtotal').appendChild(divtotal);
}

function informacoesPessoais()
{
    let infos=document.getElementById("informacoes_pessoais").elements;

    let dados=[{
        rua: infos[0].value,
        numero: infos[1].value,
        bairro: infos[2].value,
        complemento: infos[3].value,
        cep: infos[4].value,
        tel: infos[5].value,
        produtos: produtos,
        total: subtotal
    }];
    let dadosJson = JSON.stringify(dados);
    localStorage.clear('informacoes');
    localStorage.setItem('informacoes', dadosJson);
}
console.log(dados);

window.onload = criaCarrinho();