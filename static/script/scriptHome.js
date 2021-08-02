/* Pagina principal */

let form = new FormData()
form.append('categoria', '')

fetch('/produtos', {method: 'POST', body: form})
.then((res)=>{res.json()
    .then((produtos) =>{ criaProdutos(produtos)})
})

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

function recarregaProdutos(categoria){
    let form = new FormData()
    form.append('categoria', categoria)
    fetch('/produtos', {method: 'POST', body: form})
    .then((res)=>{res.json()
    .then((produtos) =>{ criaProdutos(produtos)})
})

}

function enviaItens(){
    let dados = [{itens: Carrinho}]; 
    let itens = JSON.stringify(dados);
    localStorage.clear('carrinho');
    localStorage.setItem('carrinho', itens)
}

