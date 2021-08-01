/* Pagina principal */

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

let Carrinho = [];

function criaProdutos(produtos)
{
    document.getElementById("Produtos").innerHTML = "";

    let div;
    let img;
    let nome;
    let preco;

    for(let i of produtos)
    {
        div = document.createElement('div');
        divimg = document.createElement('div');
        divtexto = document.createElement('div');
        img = document.createElement('img');
        nome = document.createElement('p');
        preco = document.createElement('p');
        preco2 = document.createElement('p');
        botao = document.createElement('button');

        div.setAttribute('class', 'produto');
        divimg.setAttribute('class', 'divimg');
        divtexto.setAttribute('class', 'divtex');
        img.setAttribute('class', 'imagem');
        nome.setAttribute('class', 'nome-produto');
        preco2.setAttribute('class', 'preco');
        preco.setAttribute('class', 'preco1');
        botao.setAttribute('class', 'addCarrinho');// atribuir funcao
        botao.setAttribute('value', i.id);
        botao.onclick = (e) => Carrinho.push(e.target.value)

        img.setAttribute("src", i.Img);
        nome.innerHTML =`${i.Nome}`;
        preco.innerHTML =`R$${i.Preco},00 em até 12x sem juros`;
        preco2.innerHTML =`R$${i.AVista},00 a vista`;
        botao.innerHTML = `Adicionar ao carrinho`

        divimg.appendChild(img);
        divtexto.appendChild(nome);
        divtexto.appendChild(preco);
        divtexto.appendChild(preco2);
        divtexto.appendChild(botao);

        div.appendChild(divimg);
        div.appendChild(divtexto);

        document.getElementById("Produtos").appendChild(div);
    }
}

function filtrar (produtos, categoria){
    function filtro (produto){
        if (produto.categoria == categoria)
            return true;
        return false
    }
    return produtos.filter(filtro)
}

function filtrar_por_preço (produtos, faixa1, faixa2){
    function filtro(produto){
        if (produto.preco > faixa1 && produto.preco <= faixa2)
            return true;
        return false
    }
    return produtos.filter(filtro)
}

function recarregaProdutos_por_preco(faixa1, faixa2){
    let itens = filtrar_por_preço (Produtos, faixa1, faixa2);
    criaProdutos(itens);
}

function recarregaProdutos(categoria){
    let itens = filtrar(Produtos, categoria);
    criaProdutos(itens);
}

function enviaItens(){

    let dados = [{itens: Carrinho}]; 
    let itens = JSON.stringify(dados);
    localStorage.clear('carrinho');
    localStorage.setItem('carrinho', itens)
}

window.onload = criaProdutos(Produtos);
