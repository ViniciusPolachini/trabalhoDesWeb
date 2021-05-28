from flask import Flask, render_template, session, request, redirect, url_for

app = Flask(__name__)
app.secret_key ="534111237996544"

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/user', methods = ['POST', 'GET'])
def user():
    if request.method == 'POST':
        username = request.form['username']
        session['username'] = username
        return render_template("user.html")
    elif not session['username'] == "":
        return render_template("user.html")
    else:
        return redirect(url_for('login'))


@app.route('/login')
def login():
    if 'username' in session:
        return redirect(url_for("user"))
    else:
        return render_template("login.html")

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for("index.html"))


if __name__ == '__main__':
    app.run(debug = True)