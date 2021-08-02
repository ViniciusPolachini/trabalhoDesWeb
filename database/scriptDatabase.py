import sqlite3


def add_usr(cpf, nome, email, senha, tel):
    conn = sqlite3.connect(r'./database/database.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO users VALUES (?,?,?,?,?)", (cpf, nome, email, senha, tel))
    conn.commit()
    conn.close()


def add_address(endereco, cpf):
    conn = sqlite3.connect(r'./database/database.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO addresses VALUES (?,?)", (endereco, cpf))
    conn.commit()
    conn.close()


#  Selecionar usuario pelo CPF
def select_user(cpf):  # passar o parametro como STRING ('1')
    conn = sqlite3.connect(r'./database/database.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE cpf = (?)", (cpf,))
    user = cursor.fetchall()
    print(user)
    conn.close()
    return(user)


def select_user_byemail(email):  # passar o parametro como STRING ('1')
    conn = sqlite3.connect(r'./database/database.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE email = (?)", (email,))
    user = cursor.fetchall()
    conn.close()
    return(user)


def delete_user(cpf):  # passar o parametro como STRING ('1')
    conn = sqlite3.connect(r'./database/database.db')
    cursor = conn.cursor()
    cursor.execute("DELETE from users WHERE cpf = (?)", (cpf,))
    conn.commit()
    conn.close()


def add_product(product):
    # product = {('product_id','nome','categoria', 'preco', 'avista', 'img')}
    conn = sqlite3.connect(r'./database/database.db')
    cursor = conn.cursor()
    cursor.execute("INSER INTO users VALUES (?,?,?,?,?,?)", product)
    conn.commit()
    conn.close()


# Selecionar o produto pelo ID
def select_product(product_id):  # passar o parametro como STRING ('1')
    conn = sqlite3.connect(r'./database/database.db')
    cursor = conn.cursor()
    Q1 = ("SELECT * FROM products WHERE product_id = (?)")
    cursor.execute(Q1, (product_id,))
    product = cursor.fetchall()
    conn.close()
    return(product)


#  Selecionar o produo pela categoria
def select_product_by_cat(categoria):  # passar o parametro como STRING ('1')
    conn = sqlite3.connect(r'./database/database.db')
    cursor = conn.cursor()
    Q1 = ("SELECT * FROM products WHERE categoria = (?)")
    cursor.execute(Q1, (categoria,))
    product = cursor.fetchall()
    conn.close()
    return(product)


def delete_product(product_id):  # passar o parametro como STRING ('1')
    conn = sqlite3.connect(r'./database/database.db')
    cursor = conn.cursor()
    Q1 = ("DELETE from products WHERE product_id = (?)")
    cursor.execute(Q1, (product_id,))
    conn.commit()
    conn.close()


#  Pegar todos os produtos pelo Valor CRESCENTE
def fetch_product_valueASC():
    conn = sqlite3.connect(r'./database/database.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM products ORDER BY preco")
    product = cursor.fetchall()
    conn.close()
    return(product)


#  Pegar todos os produtos pelo Valor DECRESCENTE
def fetch_product_value(val1, val2):
    conn = sqlite3.connect(r'./database/database.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM products WHERE preco >= (?) AND preco <= (?)",(val1, val2))
    product = cursor.fetchall()
    print(product)
    conn.close()
    return(product)


#  Pegar todos os produtos
def fetch_product_all():
    conn = sqlite3.connect(r'./database/database.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM products")
    product = cursor.fetchall()
    conn.close()
    return(product)


def login_status(email, senha):
    try:
        usr = select_user_byemail(email,)
        senha_bd = usr[0][3]
        if senha == senha_bd:
            return(usr)
        else:
            return()
    except:
        return()


def update_product():
    conn = sqlite3.connect(r'./database/database.db')
    cursor = conn.cursor()
    img = ('static/images/bateria2.png')
    cursor.execute('SELECT * FROM products')
    cursor.execute('UPDATE products SET img = (?) WHERE product_id = 4', (img,))
    conn.commit()
    conn.close()
