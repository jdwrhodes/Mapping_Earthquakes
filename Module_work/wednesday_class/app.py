#%%
from flask import Flask, render_template
#%%
app = Flask(__name__)
#%%
@app.route("/")
def home():
    return render_template('index.html')

@app.route("/iterativeExample")
def iterativeExample():
    return render_template('iterativeExample.html')

@app.route("/padLocations")
def padLocations():
    return render_template('padLocations.html')