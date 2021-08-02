from flask import Flask, render_template, jsonify, request
import database.scriptDatabase as banco


app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/confirmacao')
def confirmacao():
    return render_template("confirmacao.html")


@app.route('/carrinho')
def carrinho():
    return render_template("carrinho.html")


@app.route('/login')
def login():
    return render_template("login.html")


@app.route('/singup')
def singup():
    return render_template("singup.html")

@app.route('/produtos', methods = ['POST', 'GET'])
def getProdutos():
    if request.method == 'POST':
        categoria = request.form['categoria']
        if categoria!="":
            lista = banco.select_product_by_cat(categoria)
        else:
            lista = banco.fetch_product_all()
        produtos = []
        for i in lista:
            item = {'id': i[0], 'Nome': i[1], 'categoria': i[2], 'Preco': i[3], 'AVista': i[4], 'Img': i[5]}
            produtos.append(item)
        return jsonify(produtos)
    
    

@app.route('/scriptLogin', methods=['POST', 'GET'])
def scriptData():
    if request.method == 'POST':
        data = request.form
        email = data.get("email")
        senha = data.get("senha")
        resultado = banco.login_status(email, senha)
        return 
    return 


@app.route('/scriptCadastro', methods=['POST', 'GET'])
def scriptCadastro():
    if request.method == 'POST':
        data = request.form
        return 
    return


@app.route("/form", methods=["GET"])
def get_form():
    return render_template('index.html')

if  __name__ == '__main__':
    app.run(debug=True)
