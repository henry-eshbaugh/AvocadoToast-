from flask import Flask, render_template
from flask import jsonify
from flask import Response
from flask import json
app = Flask(__name__)
app.static_folder = 'static'

db = 'db.json'
def slurp(filepath=None):  
    def slurp_(filepath):
        with open(filepath, 'r') as f:
            dat = f.readlines()
            return [json.loads(s) for s in dat[::-1]]
    if filepath is not None:
        return slurp_(filepath)
    else:
        return slurp_(db)

@app.route("/")
@app.route('/index')
def index():
        return render_template('index.html')
@app.route('/dash')
def dash():
        with open('dashboard.html') as g:
                content = g.read()
        return content

# @app.route('/db', methods = ['GET'])
# def file():
#     with open('db.json', 'r') as f:
#         data = f.read()
#     js = jsonify(data)
#     js.status_code = 200
#     return js

@app.route('/db', methods = ['GET'])
def file():
    with open('db.json') as f:
        data = f.readlines()
    js = list(map(json.loads, data))
    return jsonify(js)

@app.route('/laundry')
def islaundrydone():
    data = slurp()
    accel = data[0]['accelData']['norm'] - data[1]['accelData']['norm']
    if accel > 0.07:
        return "it's running; better go catch it"
    else:
        return "HELLO, HUMAN. YOUR UNDERWEAR IS FINISHED."

@app.route('/sensor/<cmd>')
def sensor(cmd):
    data = slurp()
    data = data[0]
    return str({ 'scalar' : data['accelData']['norm'],
                 'x'      : data['accelData']['x']   ,
                 'y'      : data['accelData']['y']   ,
                 'z'      : data['accelData']['z']   ,
                 'temp'   : data['temperature']
                 }.get(cmd,
                       "Err: " + cmd + " is not a sensor or service"))
                        # TODO insert shellcode here
