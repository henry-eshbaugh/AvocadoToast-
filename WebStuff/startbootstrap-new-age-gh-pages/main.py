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

@app.route('/db', methods = ['GET'])
def file():
    with open('db.json', 'r') as f:
        data = f.read()
    js = jsonify(data)
    js.status_code = 200
    return js
