from flask import Flask, render_template
from flask import jsonify
from flask import Response
from flask import json
app = Flask(__name__)
app.static_folder = 'static'

@app.route("/")
@app.route('/index')
def index():
	return render_template('index.html')

@app.route('/db', methods = ['GET'])
def file():
    with open('db.json') as f:
        data = f.readlines()
    js = list(map(json.loads, data))
    return jsonify(js)
