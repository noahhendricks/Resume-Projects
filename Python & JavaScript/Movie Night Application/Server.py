#// NOAH HENDRICKS CIS 3368 - Final Project Sprint 1 //#
#// PATRICK KURTH CIS 3368 - Final Project Sprint 1  //#
#// Movie Night Organizer App                        //#

# Note: Emailed Professor Otto about the force push command that accidently wiped a lot of our previous commits on our github repository

import requests
import json
import urllib3
import flask
from flask import jsonify
from flask import request, make_response, abort
import mysql.connector
from mysql.connector import Error
from FriendController import FriendController
from SqlConnect import SqlConnector
from MovieController import MovieController

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# staticmethod used because were not going to create objects itself we will be using it in the insance data

# All apps Referenced from Professor's class example
# setting up an application name and the application
app = flask.Flask(__name__) 
#allow to show error message in browser
app.config["DEBUG"] = True 

# Creates the connection between the database and the python program
db = SqlConnector("cis3368v1.cajh5ngvt8lu.us-east-2.rds.amazonaws.com", "NoahHendricks", "H-TownRockets123", "cis3368v1db")


# Adds a table for "friend" but only if a "friend" table does not already exist
# This piece of code is only necessary if there is no table created yet
# For this assignment I already created my table in MySQL Workbench so this piece of code is excess and serves as just a backup table creator
create_friend_table = """
CREATE TABLE IF NOT EXISTS friend(
id INT AUTO_INCREMENT,
firstname VARCHAR(50) NOT NULL,
Lastname VARCHAR(50) NOT NULL,
PRIMARY KEY (id)
)"""

# excutes the "CREATE TABLE" command to run from Python to MySQL
# This piece of code is also excess for the same reason as above
db.execute_query(create_friend_table)

# Adds a table for "movielist" but only if a "movielist" table does not already exist
# This piece of code is only necessary if there is no table created yet
# For this assignment I already created my table in MySQL Workbench so this piece of code is excess and serves as just a backup table creator
create_movielist_table = """
CREATE TABLE IF NOT EXISTS movielist(
id int AUTO_INCREMENT,
friendid int not null,
movie1 VARCHAR(75) not null,
movie2 VARCHAR(75) not null,
movie3 VARCHAR(75) not null,
movie4 VARCHAR(75) not null,
movie5 VARCHAR(75) not null,
movie6 VARCHAR(75) not null,
movie7 VARCHAR(75) not null,
movie8 VARCHAR(75) not null,
movie9 VARCHAR(75) not null,
movie10 VARCHAR(75) not null,
PRIMARY KEY (id)
)"""

# excutes the "CREATE TABLE" command to run from Python to MySQL
# This piece of code is also excess for the same reason as above
db.execute_query(create_movielist_table)

# Adds a foreign key for "movielist" but only if the foreign key does not already exist
# This piece of code is only necessary if there is no foreign key created yet for friendid refernecing "id" from the friend table
# For this assignment I already created my foreign key of  in MySQL Workbench so this piece of code is excess and serves as just a backup 
alter_movielist_table = """
ALTER TABLE movielist
    ADD FOREIGN KEY (friendid) REFERENCES friend(id)"""

# excutes the "ALTER TABLE" command to run from Python to MySQL
# This piece of code is also excess for the same reason as above
db.execute_query(alter_movielist_table)


# A route to return all of the friends existing in the friend table 
@app.route('/api/friends', methods=['GET'])
def api_all_friends():
    # Outputting all existing friends to the server
    return FriendController.get_all_friends(db)

# A route to return all of the movies
@app.route('/api/movies', methods=['GET'])
def api_all_movies():
    # Outputting all existing movielists to the server
    return MovieController.get_all_movies(db)

# A route to get a single friend
@app.route('/api/friends/<id>', methods=['GET']) #API to get a user from the db table in AWS by id as a JSON response
def api_friends_id(id):
    # Outputting a single selected friend to the server
    return FriendController.get_single_friend(db, id)

# A route to get a single movielist
@app.route('/api/movies/<id>', methods=['GET']) #API to get a user from the db table in AWS by id as a JSON response
def api_movielist_id(id):
    # Outputting a single selected movielist to the server
    return MovieController.get_single_movie(db, id)

# Creating a new friend through a POST request 
@app.route('/api/friends', methods=['POST'])
def add_friend():
    request_data = request.get_json()
    newfirst = request_data['firstname']
    newlast = request_data['lastname']
    # Adding a new friend to the server
    return FriendController.add_friends(db, newfirst, newlast)

# Creating a Movie List for a friend through a POST request
@app.route('/api/movies', methods=['POST'])
def add_movies():
    request_data = request.get_json()
    friendid = request_data['friendid']
    movie1 = request_data['movie1']
    movie2 = request_data['movie2']
    movie3 = request_data['movie3']
    movie4 = request_data['movie4']
    movie5 = request_data['movie5']
    movie6 = request_data['movie6']
    movie7 = request_data['movie7']
    movie8 = request_data['movie8']
    movie9 = request_data['movie9']
    movie10 = request_data['movie10']
    # Adding a new movielist to my movie collection by specific friends to the server
    return MovieController.add_movies(db, friendid, movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10)

# Deletes a friend through id
@app.route('/api/friends/<id>', methods=['DELETE'])
def delete_friend(id):
    # Deleting a single selected friend from the server
    return FriendController.delete_friends(db, id)

# Deletes a movie through id
@app.route('/api/movies/<id>', methods=['DELETE'])
def delete_movies(id):
    # Deleting a movielist for a selected friend from the server
    return MovieController.delete_movies(db, id)

# A route to modify friend 
@app.route('/api/friends', methods=['PUT'])
def modify_friend():
    # Allows user ability to modify a friend by firstname, lastname, or both
    request_data = request.get_json()
    id_friend = request_data['id']
    update_first = request_data['firstname']
    update_last = request_data['lastname']
    # Updating a single selected friend on the server
    return FriendController.modify_friends(db, id_friend, update_first, update_last)

# A route to modify a friend's movielist 
@app.route('/api/movies', methods=['PUT'])
def modify_movie():
    request_data = request.get_json()
    id_movie = request_data['id']
    update_friendid = request_data['friendid']
    update_movie1 = request_data['movie1']
    update_movie2 = request_data['movie2']
    update_movie3 = request_data['movie3']
    update_movie4 = request_data['movie4']
    update_movie5 = request_data['movie5']
    update_movie6 = request_data['movie6']
    update_movie7 = request_data['movie7']
    update_movie8 = request_data['movie8']
    update_movie9 = request_data['movie9']
    update_movie10 = request_data['movie10']
    # Updating a single selected movielist on the server
    return MovieController.modify_movies(db, id_movie, update_friendid, update_movie1, update_movie2, update_movie3, update_movie4, update_movie5, update_movie6, update_movie7, update_movie8, update_movie9, update_movie10)

# Route to GET the randomly selected movie
@app.route('/api/movies/random', methods=['GET'])
def random_movie():
    return  MovieController.random_movie(db)
    

app.run()   
   

######################## REFERENCES ##########################################
##############################################################################
### https://www.w3schools.com/python/ref_random_choice.asp ###################
### https://www.w3schools.com/python/gloss_python_array_length.asp ###########
### https://stackabuse.com/pythons-classmethod-and-staticmethod-explained/ ###
##############################################################################
##############################################################################
##############################################################################
