from flask import Flask
from flask_bootstrap import Bootstrap

app = Flask(__name__)

import application.views

if __name__ == '__main__':
    app.run()

