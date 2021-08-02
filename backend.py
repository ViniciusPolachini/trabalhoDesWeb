from flask import Flask, render_template, request
import database.scriptDatabase

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


@app.route('/scriptLogin', methods=['POST', 'GET'])
def scriptData():
    if request.method == 'POST':
        data = request.form
        email = data.get("email")
        senha = data.get("senha")
        resultado = database.scriptDatabase.login_status(email, senha)
        return resultado
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
