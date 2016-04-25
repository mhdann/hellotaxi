# Models file to define global database for site

import json

def get_data(time=None):
    ''' Retrieve the geojson data associated with the time'''
    with open('taxi_test.json') as f:
        gridpolys = json.load(f)
    return gridpolys

def leaf_plot(data=None):
    ''' Take map geojson and return leaflets javascript '''
    return None