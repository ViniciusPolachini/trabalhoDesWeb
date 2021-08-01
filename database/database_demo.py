import sqlite3


def add_usr(usr):
    # usr = {('cpf','nome','email', 'senha', 'tel')}
    conn = sqlite3.connect(r'./database/database.db')
    cursor = conn.cursor()
    cursor.execute("INSER INTO users VALUES (?,?,?,?,?)", usr)
    conn.commit()
    conn.close()


def select_user(cpf):  # passar o parametro como STRING ('1')
    conn = sqlite3.connect(r'./database/database.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE cpf = (?)", (cpf,))
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


def select_product(product_id):  # passar o parametro como STRING ('1')
    conn = sqlite3.connect(r'./database/database.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM products WHERE product_id = (?)", (product_id,))
    product = cursor.fetchall()
    conn.close()
    return(product)


def delete_product(product_id):  # passar o parametro como STRING ('1')
    conn = sqlite3.connect(r'./database/database.db')
    cursor = conn.cursor()
    cursor.execute("DELETE from products WHERE product_id = (?)", (product_id,))
    conn.commit()
    conn.close()
