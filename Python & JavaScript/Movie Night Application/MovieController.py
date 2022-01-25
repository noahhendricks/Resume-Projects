#// NOAH HENDRICKS CIS 3368 - Final Project Sprint 1 //#
#// PATRICK KURTH CIS 3368 - Final Project Sprint 1  //#
#// Movie Night Organizer App                        //#

# File that creates and holds all methods used for the movielist table
# Methods include: CRUD Functions
# OUTPUT ALL, OUTPUT A SINGLE SELECTED MOVIELIST, ADD, DELETE, UPDATE, and SELECT A RANDOM MOVIE

import SqlConnect
import mysql.connector
from DataSort import DataSort
from mysql.connector import Error
from flask import jsonify
import random



# MovieController class that handles methods for the movie tables

class MovieController():


    # MOVIELIST table output of all movie(s) for existing friends
    @staticmethod
    def get_all_movies(db):
        movies = db.execute_read_query(f'SELECT * FROM movielist')

        # Parse method that puts our entire movielist table into a dictionary
        dict_movies = DataSort.parse_movies(movies)
        print("\nSuccessful Connection to Output of all existing friend's movielists\nNote: movielist table must exist in database to perform correctly\n")
        print(dict_movies)
        return jsonify("Successful Connection Output of all existing friend's movielist", "Note: movielist table must exist in database to perform correctly", 
                        dict_movies)

    # MOVIELIST table to get single movielist for a specific friend
    @staticmethod
    def get_single_movie(db, id):
        single_movielist = db.execute_read_query(f'SELECT id, friendid, movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10 from movielist WHERE id = "{id}"')
        
        # Parse method that puts our movielist into a dictionary
        movielist = DataSort.parse_movies(single_movielist)

        # Allows movielist to be selected only if it contains data
        # If no data exists, then it does not allow the user to grab that movielist
        # Reason being if the list has data, it should be greater than zero
        if len(movielist) > 0:
            print("\nSuccessfully Selected a Friend's movielist\n")
            return jsonify("Successfully Selected a Friend's movielist", movielist)
        else:
            print("\nNo movielist exists with this ID\n")
            return jsonify("No movielist exists with this ID")

    # MOVIELIST table to add a movielist for a specific friend
    @staticmethod
    def add_movies(db, friendid, movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10):
        addmovies = db.execute_query(f"""INSERT INTO movielist (friendid, movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10)
        VALUES ("{friendid}", "{movie1}", "{movie2}", "{movie3}", "{movie4}", "{movie5}", "{movie6}", "{movie7}", "{movie8}", "{movie9}", "{movie10}")""")

        print("\nAdd movielist Connection Succeful!\n", "Note: movielist table must exist in database to perform correctly\n", 
        "Note: Foreign Keys of the friend ID must exist in the friend table to perform correctly")
        return jsonify("Add movielist Connection Succeful!", "Note: movielist table must exist in database to perform correctly", 
        "Note: Foreign Keys of the friend ID must exist in the friend table to perform correctly")

    # MOVIELIST table to delete a movielist for a specific friend that exists
    @staticmethod
    def delete_movies(db, id):
        deletemovie = db.execute_query(f'DELETE FROM movielist WHERE id = "{id}"')
        print("\nDelete movielist by ID Connection Succeful!\n", "Note: movielist ID must exist in database to perform correctly\n")
        return jsonify("Delete movielist by ID Connection Succeful!", "Note: movielist ID must exist in database to perform correctly")

    # MOVIELIST table to update a movielist for a specific friend
    @staticmethod
    def modify_movies(db, id, friendid, movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10):
        update_movies = db.execute_query(f'UPDATE movielist SET friendid = "{friendid}", movie1 = "{movie1}", movie2 = "{movie2}", movie3 = "{movie3}", movie4 = "{movie4}", movie5 = "{movie5}", movie6 = "{movie6}", movie7 = "{movie7}", movie8 = "{movie8}", movie9 = "{movie9}", movie10 = "{movie10}" WHERE id = "{id}"')
        print("\nUpdate Connection Succeful!\n", "Note: movielist ID must exist to perform correctly\n")
        return jsonify("Update Connection Succeful!", "Note: movielist ID must exist to perform correctly")

    # Random movie selection for the MOVIELIST table from the presently selected friends
    # Select from movielist, parse the data and use the random module
    @staticmethod
    def random_movie(db):
        all_movies = db.execute_read_query(f'SELECT * FROM movielist')

        # Parse method that puts all movielists into a dictionary
        movies = DataSort.parse_movie(all_movies)

        # Verifies the the movie exists through the exists_movie method
        legit_movies = DataSort.exists_movie(movies)

        # Randomizes movie through the called random_movie method
        random_movie = DataSort.random_movie(legit_movies)
        print("\nRANDOMLY SELECTED MOVIE:\n")
        print(random_movie)
        return jsonify("RANDOMLY SELECTED MOVIE:", random_movie)
