/* Pagina principal */

let Produtos = [
    {Nome: "Cacto", categoria: "Planta", Preco: "15", Img: "https://s2.glbimg.com/pjgEaY16g_N5HANfZFi3Uilxqls=/1024x768/s.glbimg.com/po/tt/f/original/2011/09/26/gaiola_dos_macacos.jpg"},
    {Nome: "Vazo inteligente", categoria: "Vazos", Preco: "150", Img: "https://s2.glbimg.com/pjgEaY16g_N5HANfZFi3Uilxqls=/1024x768/s.glbimg.com/po/tt/f/original/2011/09/26/gaiola_dos_macacos.jpg"},
    {Nome: "Tesoura de poda", categoria: "Ferramentas", Preco: "40", Img: "https://s2.glbimg.com/pjgEaY16g_N5HANfZFi3Uilxqls=/1024x768/s.glbimg.com/po/tt/f/original/2011/09/26/gaiola_dos_macacos.jpg"},
    {Nome: "Terra adubada", categoria: "Materiais", Preco: "60", Img: "https://s2.glbimg.com/pjgEaY16g_N5HANfZFi3Uilxqls=/1024x768/s.glbimg.com/po/tt/f/original/2011/09/26/gaiola_dos_macacos.jpg"},
    {Nome: "Luvas", categoria: "Equipamentos", Preco:"15", Img: "https://s2.glbimg.com/pjgEaY16g_N5HANfZFi3Uilxqls=/1024x768/s.glbimg.com/po/tt/f/original/2011/09/26/gaiola_dos_macacos.jpg"}
];

function criaProdutos()
{
    let div;
    let img;
    let nome;
    let preco;
    let categoria;

    for(let i of Produtos)
    {
        div = document.createElement('div');
        img = document.createElement('img');
        nome = document.createElement('p');
        preco = document.createElement('p');
        categoria = document.createElement('p');

        div.setAttribute('class', 'produto');

        img.setAttribute("src", i.Img);
        nome.innerHTML =`Nome: ${i.Nome}`;
        categoria.innerHTML = `Categoria: ${i.Categoria}`;
        preco.innerHTML =`Preço: ${i.Preco}`;

        div.appendChild(img);
        div.appendChild(nome);
        div.appendChild(categoria);
        div.appendChild(preco);

        document.getElementById("Content").appendChild(div);
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

window.onload = criaProdutos();