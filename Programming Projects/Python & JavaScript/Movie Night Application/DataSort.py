#// NOAH HENDRICKS CIS 3368 - Final Project Sprint 1 //#
#// PATRICK KURTH CIS 3368 - Final Project Sprint 1  //#
#// Movie Night Organizer App                        //#

# File that creates lists and dictionary methods for the data from the database

# Import Random to allow us to select random movie (used in function below)
import random

#Datasort class that handles all data sort methods for the database

class DataSort():

    # Method to make a list and iterate that list to put into a dictionary
    @staticmethod
    def parse_friend(rows):

        # Result from loop after iterating
        result = []

        # Iterates list into dictionary
        for row in rows:
            friend_map = {"id": row[0], "firstname": row[1], "lastname": row[2]}
            # Appends friend_map
            result.append(friend_map)
        return result

    # MOVIELIST table dictionary
    @staticmethod
    def parse_movies(rows):

        # Result from loop after iterating
        result = []

        # Iterates list into dictionary
        for row in rows:
            movies_map = {"id": row[0], "friendid": row[1], "movie1": row[2], "movie2": row[3], "movie3": row[4], "movie4": row[5], "movie5": row[6], "movie6": row[7], "movie7": row[8], "movie8": row[9], "movie9": row[10], "movie10": row[11]}
            # Appends movies_map 
            result.append(movies_map)
        return result

    # Parse the movies and append that into results
    @staticmethod
    def parse_movie(rows):

        result = []

        # Parse each movie in the movielist table and appends them into the results list
        for row in rows:
            result.append(row[2])
            result.append(row[3])
            result.append(row[4])
            result.append(row[5])
            result.append(row[6])
            result.append(row[7])
            result.append(row[8])
            result.append(row[9])
            result.append(row[10])
            result.append(row[11])
        return result

    # Parse the id's and append that into results
    @staticmethod
    def parse_id(rows):

        result = []

        # Appends the id row
        for row in rows:
            result.append(row[0])
        return result

        

    # Randomize the movie list
    @staticmethod
    def random_movie(movies):
        # Random method that selects a single movie
        return random.choice(movies)

    
    # If the array contains "" remove it from the array
    @staticmethod
    def exists_movie(movies):

        result = []

        # Appends movie into list if it is not empty
        for movie in movies:
            if movie != "":
                result.append(movie)
                print(movie)
        return result
