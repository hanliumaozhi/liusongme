#coding=utf-8
from flask import render_template
from flask import request
from flask import g

from app import app

import json
import sqlite3

#DATABASE = './app/db/mc.db'
DATABASE = '/opt/virtualenvs/flaskapp/liusongme/app/db/mc.db'

def connect_to_database():
    return sqlite3.connect(DATABASE)

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = connect_to_database()
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

#@app.before_request
#def before_request():
#    g.db = sqlite3.connect(DATABASE)

#@app.after_request
#def after_request(response):
#    g.db.close()
#    return response


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return render_template("index.html")
    else:
        return json.dumps({'data':"null"})
        
@app.route('/show_mc_user_online_time', methods=['GET', 'POST'])
def show_mc_user_online_time():
    if request.method == 'GET':
        return render_template("show_mc.html")
    else:
        db = get_db()
        cur = db.cursor()
        cur.execute("select * from MC_user_online_time")
        the_res = cur.fetchall()
        data_dict = dict()
        data_list = list()
        for i in the_res:
            data_list.append([i[0], str(i[1]), str(i[2])])
        return json.dumps({'data': data_list, 'isSuccess': 'True'})

@app.route('/update_mc_online_time', methods=['POST'])        
def update_mc_online_time():
    if request.method == 'POST':
        print "xxx"
        print request.form['user_name']
        user_name = request.form['user_name']
        online_time = int(request.form['online_time'])
        db = get_db()
        cur = db.cursor()
        print "2"
        cur.execute("select * from MC_user_online_time where user_name = '%s'" % user_name)
        the_res = cur.fetchall()
        print "3"
        if len(the_res) == 0:
             cur.execute("insert into MC_user_online_time values (?,?,?)", (user_name, 0, online_time))
             db.commit()
        else:
            cur.execute("select * from MC_user_online_time where user_name = '%s'" % user_name)
            cur_time = cur.fetchall()[0][2]
            cur.execute("update MC_user_online_time set current_time_length= ? where user_name = ? ", ((cur_time+online_time),user_name))
            db.commit()
        return json.dumps({'data': "ok"})
    
    
    
    