from flask import Flask, render_template, jsonify, request, session
import database.scriptDatabase as banco


app = Flask(__name__)
app.secret_key = "shazam"


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/confirmacao')
def confirmacao():
    if "user" in session:
        return render_template("confirmacao.html")
    else:
        return render_template("login.html")


@app.route('/carrinho')
def carrinho():
    return render_template("carrinho.html")


@app.route('/login', methods=['POST', 'GET'])
def login():
    if "user" in session:
        return render_template("index.html")
    else:
        if request.method == 'POST':
            data = request.form
            email = data.get("email")
            senha = data.get("senha")
            user = banco.login_status(email, senha)
            if user:
                session["user"] = user
                return render_template("index.html")
            else:
                return render_template("login.html")
        else:
            return render_template("login.html")


@app.route('/singup',)
def singup():
    return render_template("singup.html")


@app.route('/cadastro', methods=['POST', 'GET'])
def cadastro():

    if request.method == 'POST':
        data = request.form
        email = data.get("email")
        senha = data.get("senha")
        nome = data.get("nome")
        cpf = data.get("cpf")
        endereco = (data.get("rua")+", "+('Numero:')+data.get("numero")+", "
                    + data.get("bairro")+(' ')+data.get("cidade")
                    + ('/')+data.get("estado")+(' CEP: ')
                    + data.get("cep"))
        tel = data.get("tel")
        banco.add_usr(cpf, nome, email, senha, tel)
        banco.add_address(endereco, cpf)
        user = banco.login_status(email, senha)
        session["user"] = user
        if user:
            return render_template("index.html")
        else:
            return render_template("singup.html")


@app.route('/produtos', methods=['POST', 'GET'])
def getProdutos():
    if request.method == 'POST':
        categoria = request.form['categoria']
        if categoria != "":
            lista = banco.select_product_by_cat(categoria)
        else:
            lista = banco.fetch_product_all()
        produtos = []
        for i in lista:
            item = {'id': i[0], 'Nome': i[1], 'categoria': i[2],
                    'Preco': i[3], 'AVista': i[4], 'Img': i[5]}
            produtos.append(item)
        return jsonify(produtos)


@app.route("/form", methods=["GET"])
def get_form():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
