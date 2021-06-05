from flask import Flask, render_template

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


if __name__ == '__main__':
    app.run(debug = True)