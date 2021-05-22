from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/user', methods = ['POST', 'GET'])
def user():
    if request.method == 'POST':
        result = request.form
        return render_template("user.html", result = result)

@app.route('/login')
def login():
    return render_template("login.html")


if __name__ == '__main__':
    app.run(debug = True)