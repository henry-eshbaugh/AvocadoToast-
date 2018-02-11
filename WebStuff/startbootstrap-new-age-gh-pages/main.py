from flask import Flask
app = Flask(__name__)

@app.route("/")
@app.route('/index')
def index():
	with open('dashboard.html') as f:
		content = f.read()
	return content
