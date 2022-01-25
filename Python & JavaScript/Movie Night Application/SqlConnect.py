#// NOAH HENDRICKS CIS 3368 - Final Project Sprint 1 //#
#// PATRICK KURTH CIS 3368 - Final Project Sprint 1  //#
#// Movie Night Organizer App                        //#

# This is the SqlConnector class that the professor showed us during lecture  
# SqlConnect class tests connection the DB 
# SqlConnect class will let user know if query execution was succesful


import mysql.connector
from mysql.connector import Error

# SQLConnector class that handles all methods to connect, read, and execute the database

class SqlConnector:

    # Professor provided code from his in class example but used inside of a class
    # Creates the connection between the database and the python program
    def __init__(self, host_name, user_name, user_password, db_name):
        self.connection = None
        try:
            self.connection = mysql.connector.connect(
                host=host_name,
                user=user_name,
                password=user_password,
                database=db_name
            )
            print("Connection to MySQL DB successful")
        except Error as e:
            print(f"The error '{e}' occurred")

    # Professor provided code from his in class example but used inside of a class
    # Executes the query in the database
    def execute_query(self, query):
        cursor = self.connection.cursor()
        try:
            cursor.execute(query)
            self.connection.commit()
            print("Query executed successfully")
        except Error as e:
            print(f"The error '{e}' occurred")

    # Professor provided code from his in class example but used inside of a class
    # Executes the query to read the database into the python program
    def execute_read_query(self, query):
        cursor = self.connection.cursor()
        result = None
        try:
            cursor.execute(query)
            result = cursor.fetchall()
            return result
        except Error as e:
            print(f"The error '{e}' occurred")
