from flask import Flask, request
from flask_mysqldb import MySQL
from controllers.task_one_controller import handle_task1
from controllers.task_two_controller import handle_task2

app = Flask(__name__)

# database config
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'educationtoday'
mysql = MySQL(app)

# route config
@app.route('/api/task1')
def task1():
    author = request.args.get('author', default = '', type = str)
    number = request.args.get('number', default = 1, type = int)
    results = handle_task1(mysql, author, number)
    print(results)
    return results

@app.route('/api/task2')
def task2():
    affiliation = request.args.get('affiliation', default = '', type = str)
    affiliation += "\r"
    number = request.args.get('number', default = 1, type = int)
    results = handle_task2(mysql, affiliation, number)
    print(results)
    return results