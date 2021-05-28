let dados = JSON.parse(localStorage.getItem('carrinho'));

let Carrinho = dados[0].itens;

let Produtos = [
    {Nome: "Bateria Eletrônica Alesis Command Kit com Pads em Mesh Heads, Módulo 600 Sons e Rack Premium Chrome", categoria: "Baterias", Preco: "R$9.999,00", AVista:"R$8.599,00", Img: "static/images/eletronica1.png", id:1},
    {Nome: "Bateria Eletrônica Alesis Nitro Mesh com Pad Dual Zone, Módulo 385 sons, Pedal Simples, Rack 4-Post", categoria: "Baterias", Preco: "R$5.697,00", AVista:"R$4.899,00", Img: "static/images/eletronica2.png", id:2},
    {Nome: "Bateria Ludwig Accent Drive Metallic Black e Caixa com Ferragens e Banco", categoria: "Baterias", Preco: "R$4.069,00", AVista:"R$ 3.499,00", Img: "static/images/bateria1.png", id:3},
    {Nome: "Bateria Mapex Mars Crossover Plus MA528SF Smokewood", categoria: "Baterias", Preco: "R$6.976,00", AVista:"R$5.999,00", Img: "static/images/bateria2.png", id:4},

    {Nome: "Crash Octagon Tasmann Medium 18'' TM18CR Crash Ride em Brass Usinado e Martelamento Circular", categoria: "Pratos", Preco: "R$337,00", AVista:"R$289,00", Img: "static/images/prato1.png", id:5},
    {Nome: "Crash Paiste 101 Brass 14'' 101 C-14", categoria: "Pratos", Preco: "R$348,00", AVista:"R$299,00", Img: "static/images/prato2.png", id:6},
    {Nome: "Ride Crash Orion Rage 10 Crash Ride 20'' RG20CR em Bronze B10", categoria: "Pratos", Preco: "R$581,00", AVista:"R$499,00", Img: "static/images/prato3.png", id:7},
    {Nome: "Crash Ride Paiste 101 Brass 18'' 101 CR-18", categoria: "Pratos", Preco: "R$627,00", AVista:"R$539,00", Img: "static/images/prato4.png", id:8},
    {Nome: "Chimbal Krest Fusion Series Mini Hats 10'' F10MH", categoria: "Pratos", Preco: "R$697,00", AVista:"R$599,00", Img: "static/images/prato5.png", id:9},
    {Nome: "Chimbal Paiste 201 14'' 201 HH-14", categoria: "Pratos", Preco: "R$999,00", AVista:"R$859,00", Img: "static/images/prato6.png", id:10},

    {Nome: "Estante Girafa X-Pro C. Ibañez Light Weight EPG-STD com Contrapeso Destacável", categoria: "Ferragens", Preco: "R$348,00", AVista:"R$299,00", Img: "static/images/ferragem1.PNG", id:11},
    {Nome: "Banco Noah NTR122V Super Leve com Pernas Duplas e Assento Redondo", categoria: "Ferragens", Preco: "R$348,00", AVista:"R$299,00", Img: "static/images/ferragem2.png", id:12},
    
    {Nome: "Chave de Afinação Premium DB Percussion K02 com Anilha de Chaveiro", categoria: "Acessorios", Preco: "R$18,00", AVista:"R$15,00", Img: "static/images/acessorio.PNG", id:13},

    {Nome: "Baqueta C Ibanez Hickory 5A Ponta De Madeira", categoria: "Baquetas", Preco: "R$55,00", AVista:"R$47,00", Img: "static/images/baqueta1.png", id:13},
    {Nome: "Baqueta Alba 5A Shark Grip em Marfim Padrão 5A (2051)", categoria: "Baquetas", Preco: "R$23,00", AVista:"R$19,00", Img: "static/images/baqueta2.png", id:14},

    {Nome: "Kit de Peles de Caixa Attack 14'' CX2 Medium Coated 2-Ply Ridge Filme Duplo e Pele Resposta Hazy Thin", categoria: "Peles", Preco: "R$127,00", AVista:"R$109,00", Img: "static/images/pele1.png", id:15},
    {Nome: "Kit de Peles Remo Encore Pinstripe Tons 10'',12'',14'' Filme Duplo tipo Hidráulica Clássica (10649)", categoria: "Peles", Preco: "R$209,00", AVista:"R$179,00", Img: "static/images/pele2.png", id:16},
];

function criaCarrinho(){

    let carrinho = Carrinho;
    let produtos = [];
    let quantidade;
    let id;
    let produto;

    while(carrinho.length){

        nome = "";
        quantidade = 1;
        id = carrinho[0];
        carrinho.splice(0,1);
        
        
        for(let i=0; i<Produtos.length; i++){
           if(Produtos[i].id == id){
               produto = Produtos[i];
               break;
           }
        }
        
        for(let i=0; i<carrinho.length; i++){
            if(id==carrinho[i]){
                quantidade ++;
                carrinho.splice(i,1);
            }
        }

        produtos.push({produto: produto, quantidade: quantidade});
    }

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
        Pquantidade.innerHTML = i.quantidade;
        Ppreco.innerHTML = i.produto.Preco;

        div.appendChild(img);
        div.appendChild(Pnome);
        div.appendChild(Pquantidade);
        div.appendChild(Ppreco);

        document.getElementById('Carrinho').appendChild(div);
    }
}

window.onload = criaCarrinho();