from flask import Flask, render_template
from flask import jsonify
from flask import Response
app = Flask(__name__)


@app.route("/")
@app.route('/index')
def index():
	with open('static/index.html') as f:
		content = f.read()
	return content
@app.route('/dash')
def dash():
	with open('dashboard.html') as g:
		content = g.read()
	return content

@app.route('/json.json', methods = ['GET'])
def file():
    with open('db.json', 'r') as f:
        data = f.read()
    js = jsonify(data)
    js.status_code = 200
    return js

@app.route('/test.json', methods = ['GET'])
def file2():
	data2 = [	{'x': 1, 'y': 5.38108801203645},
			{'x': 2, 'y': 5.13617061162582},
			{'x': 3, 'y': 5.09662662304338},
			{'x': 4, 'y': 5.30516164157148},
			{'x': 5, 'y': 5.8238836498647},
			{'x': 6, 'y': 5.627252866033},
			{'x': 7, 'y': 5.2059327641563},
			{'x': 8, 'y': 5.98018545803758},
			{'x': 9, 'y': 5.43777428013329},
			{'x': 10, 'y': 5.83519577423989},
			{'x': 11, 'y': 5.53918044796104},
			{'x': 12, 'y': 5.02512693318836},
			{'x': 13, 'y': 5.00682427912703},
			{'x': 14, 'y': 5.78608623851813}]
	jstest = jsonify(data2)
	jstest.status_code = 200
	return jstest
