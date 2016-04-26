from flask import Flask, request, render_template, redirect
from application import app

@app.route('/')
def main():
    return redirect('/index.html')

@app.route('/models.html')
def models():
    return render_template('models.html')

@app.route('/trends.html')
def trends():
    return render_template('trends.html')


@app.route('/index.html', methods= ['GET', 'POST'])
def index():
    #if request.method == 'POST':
    #    data = models.get_data(request['time'])
    #else:
    #    data = models.get_data()
    #myplot = models.leaf_plot(data)
    params={}
    return render_template('index.html')

@app.route('/test')
def test():
    return render_template('/jay_test.html')
