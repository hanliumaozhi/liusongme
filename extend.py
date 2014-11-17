#coding=utf-8
import sqlite3

def init_db():
    cx = sqlite3.connect("./app/db/mc.db")
    cu=cx.cursor()
    cu.execute("create table MC_user_online_time (user_name text primary key, pre_total_time integer, current_time_length integer)")
    cu.close()
    cx.close()
    
    
def main():
    init_db()
    
main()