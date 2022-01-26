#// NOAH HENDRICKS CIS 3368 - Final Project Sprint 1 //#
#// PATRICK KURTH CIS 3368 - Final Project Sprint 1  //#
#// Movie Night Organizer App                        //#

# File that creates and holds all methods used for the friend table
# Methods include: CRUD Functions
# OUTPUT ALL, OUTPUT A SINGLE SELECTED FRIEND, ADD, DELETE, and UPDATE

import SqlConnect
import mysql.connector
from DataSort import DataSort
from mysql.connector import Error
from flask import jsonify
from flask import request, make_response

#FriendController class that handles methods for the friend tables

class FriendController():
    
    
   # FRIEND table output all existing friend(s)
    @staticmethod
    def get_all_friends(db):
        rows = db.execute_read_query(f'SELECT id, firstname, lastname from friend ')

        # Parse method that puts our entire friend table into a dictionary
        dict_friends = DataSort.parse_friend(rows)
        print("\nSuccessful Connection to Output of all existing friends\nNote: movielist table must exist in database to perform correctly\n")
        print(dict_friends)
        return jsonify("Successful Connection Output of all existing friends", "Note: movielist table must exist in database to perform correctly", dict_friends)

    # MOVIELIST table to get single friend
    @staticmethod
    def get_single_friend(db, id):
        singlefriend = db.execute_read_query(f'SELECT id, firstname, lastname from friend WHERE id = "{id}"')

        # Parse method that puts our friend into a dictionary
        friend = DataSort.parse_friend(singlefriend)

        # Allows friend to be selected only if it contains data
        # If no data exists, then it does not allow the user to grab that friend
        # Reason being if the list has data, it should be greater than zero
        if len(friend) > 0:
            print("\nSuccessfully Selected a Friend\n")
            return jsonify("Successfully Selected a Friend!", friend)
        else:
            print("\nNo friend exists with this ID\n")
            return jsonify("No friend exists with this ID")

    # FRIEND table to add a friend 
    @staticmethod
    def add_friends(db, firstname, lastname):
        addfriends = db.execute_query(f'INSERT INTO friend (firstname, lastname) VALUES ("{firstname}", "{lastname}")')
        print("\nAdd friend Connection Succeful!\n", "Note: friend table must exist in database to perform correctly\n")
        return jsonify("Add friend Connection Succeful!", "Note: friend table must exist in database to perform correctly")

    # MOVIELIST table to delete a movielist for a specific friend
    @staticmethod
    def delete_friends(db, id):
        deletefriend = db.execute_query(f'DELETE FROM friend WHERE id = "{id}"')
        print("\nDelete friend by ID Connection Succeful!\n", "Note: friend ID must exist in database to perform correctly\n", "Note: Corresponding Movielist must be deleted before you delete a friend because of the FOREIGN KEY constraints\n")
        return jsonify("Delete friend by ID Connection Succeful!", "Note: friend ID must exist in database to perform correctly", "Note: Corresponding Movielist must be deleted before you delete a friend because of FOREIGN KEY constraints")

    # FRIEND table update a friend
    @staticmethod
    def modify_friends(db, id, firstname, lastname):
        update_friends = db.execute_query(f'UPDATE friend SET firstname = "{firstname}", lastname = "{lastname}" WHERE id = "{id}"')
        print("\nUpdate Connection Succeful!\n", "Note: friend ID must exist to perform correctly\n")
        return jsonify("Update Connection Succeful!", "Note: friend ID must exist to perform correctly")
