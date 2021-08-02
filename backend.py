from flask import Flask, render_template, jsonify, request
import database.scriptDatabase as api
import sys

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/confirmacao')
def confirmacao():
    return render_template("confirmacao.html")


@app.route('/login')
def login():
    return render_template("login.html")

@app.route('/carrinho')
def carrinho():
    return render_template("carrinho.html")

@app.route('/produtos', methods = ['POST', 'GET'])
def getProdutos():
    if request.method == 'POST':
        categoria = request.form['categoria']
        if categoria!="":
            lista = api.select_product_by_cat(categoria)
        else:
            lista = api.fetch_product_all()
        produtos = []
        for i in lista:
            item = {'id': i[0], 'Nome': i[1], 'categoria': i[2], 'Preco': i[3], 'AVista': i[4], 'Img': i[5]}
            produtos.append(item)
        return jsonify(produtos)
    
    

if __name__ == '__main__':
    app.run(debug=True)
