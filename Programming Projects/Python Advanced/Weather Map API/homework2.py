# Noah Hendricks
# Student ID: 1900219
# CIS 3368 - 22693 Homework 2, Spring 2021
# Command Line Based API Service Call

import requests
import json
import urllib3
import mysql.connector
from mysql.connector import Error

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# Professor provided code from class example
# Creates the connection between the database and the python program
def create_connection(host_name, user_name, user_password, db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name
        )
        print("\nConnection to MySQL DB successful")
    except Error as e:
        print(f"\nThe error '{e}' occurred")
    return connection


# Professor provided code from class example
# Executes the query in the database
def execute_query(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
        print("\nQuery executed successfully")
    except Error as e:
        print(f"\nThe error '{e}' occurred")


# Professor provided code from class example
# Executes the query to read the database into the python program
def execute_read_query(connection, query):
    cursor = connection.cursor()
    result = None
    try:
        cursor.execute(query)
        result = cursor.fetchall()
        return result
    except Error as e:
        print(f"\nThe error '{e}' occurred")


# Data for temperature is retrieved, parsed, and then returned
def get_temp_data():
    # initiates website
    try:
        main_parse = requests.get(url, verify = False)
        # grabs data from the current weather data website in json structure
        json_main_parse = main_parse.json()
        # grabs and parses specific "main" data 
        main_parse = json_main_parse["main"]
        # grabs and parses specific "temp" data
        temp_parse = main_parse["temp"]
        return temp_parse
    except:
        print("DATA DOES NOT EXIST!\tINVALID CITY/COUNTRY!\n")


# Data for feels_like is retrieved, parsed and then returned
def get_feels_like_data():
    try:
        #initiates website
        main_parse = requests.get(url, verify = False)
        # grabs data from the current weather data website in json structure
        json_main_parse = main_parse.json()
        # grabs and parses specific "main" data 
        main_parse = json_main_parse["main"]
        # grabs and parses specific "feels_like" data
        feels_like_parse = main_parse["feels_like"]
        return feels_like_parse
    except:
        print("")


# Data for humidity is retrieved, parsed and then returned
def get_humidity_data():
    try:
        #initiates website
        main_parse = requests.get(url, verify = False)
        # grabs data from the current weather data website in json structure
        json_main_parse = main_parse.json()
        # grabs and parses specific "main" data 
        main_parse = json_main_parse["main"]
        # grabs and parses specific "humidity" data
        humidity_parse = main_parse["humidity"]
        return humidity_parse
    except:
        print("")


# Store data
def store_data():
    print('\nStored current weather data for the city of', city_input.upper(), 'in the country of', country_input.upper(), 'into the database')
    # MySQL Syntax via Python to insert contact details and their date created (datetime function) to add new contacts
    # Code style referenced from the Professor's "Hello.py" in class example
    query = """INSERT INTO results (Country, City, Temperature, Feels_Like, Humidity)
    VALUES ('%s','%s', '%s', '%s', '%s')""" % (country_input.upper(), city_input.upper(), output_get_temp_data, output_get_feels_like_data, output_get_humidity_data)
    # executes and connects database statement for query to the program & MySQL Workbench
    execute_query(connection, query)

# Output in abc order
def output_alphabetical_order():
    print('\nOutput List of all current weather data in alphabetical order by city:')
    # MySQL Syntax via Python to output in alphabetical order
    abc_results = """
    SELECT * FROM results
    ORDER BY Country ASC, City ASC, ID ASC"""
    # executes and connects database statement for abc_results to the program & MySQL Workbench
    weather_results = execute_read_query(connection, abc_results)
    # Referenced Code styleLink: https://pynative.com/python-mysql-select-query-to-fetch-data/
    print("%-10s %-15s %-65s %-20s %-20s %s" % ('\nID', 'Country', 'City', 'Temperature', 'Feels_Like', 'Humidity\n'))
    # Outputs all data for table results in order of country and then city onto the terminal
    for x in weather_results:
        print("%-10s %-15s %-65s %-20s %-20s %s" % (x[0], x[1], x[2], x[3], x[4], x[5]))

# Output in acscending order by temperature
def output_temp_order():
    print('\nOutput List of all current weather data in ascending order by temperature:')
    # MySQL Syntax via Python to output in ascending order
    temp_results = """
    SELECT * FROM results
    ORDER BY Temperature ASC, ID ASC"""
    # executes and connects database statement for temp_results to the program & MySQL Workbench
    weather_results = execute_read_query(connection, temp_results)
    # Referenced Code styleLink: https://pynative.com/python-mysql-select-query-to-fetch-data/
    print("%-10s %-15s %-65s %-20s %-20s %s" % ('\nID', 'Country', 'City', 'Temperature', 'Feels_Like', 'Humidity\n'))
    # Outputs all data for table results in order of country and then city onto the terminal
    for x in weather_results:
        print("%-10s %-15s %-65s %-20s %-20s %s" % (x[0], x[1], x[2], x[3], x[4], x[5]))


# Output all data
def output_all():
    # MySQL Syntax for outputting the entire results table default (ordered by ID)
    # Referenced Link: W3Schools.com/python
    print('\nOutput List of all current weather data:')
    select_results = "SELECT * FROM results"
    # executes and connects database statement for select_contacts to the program & MySQL Workbench
    weather_results = execute_read_query(connection, select_results)
    # Formatting of output columns
    # Reference Link: https://www.youtube.com/watch?v=0tjVynTgTX4
    print("%-10s %-15s %-65s %-20s %-20s %s" % ('\nID', 'Country', 'City', 'Temperature', 'Feels_Like', 'Humidity\n'))
    # Outputs all data for table contacts in the terminal
    for x in weather_results:
        print("%-10s %-15s %-65s %-20s %-20s %s" % (x[0], x[1], x[2], x[3], x[4], x[5]))


# Delete functionality where range of entries can be deleted
def delete_results():
    try:
        # user input (integer only) for which results' id they wish to delete
        print("\nWhat is the range of ID's you would like to delete?\n")
        delete_data_results = int(input("Enter the lowest ID in the range of numbers you wish to delete: "))
        delete_data_results_2 = int(input("Enter the highest ID in the range of numbers you wish to delete: "))
        # Reference Link: https://www.designcise.com/web/tutorial/how-to-delete-multiple-rows-with-different-ids-in-a-sql-query
        # MySQL Syntax via Python to delete 
        delete_query = "DELETE FROM results WHERE ID BETWEEN %d AND %d" % (delete_data_results, delete_data_results_2)
        # executes and connects database statement for delete_query to the program & MySQL Workbench
        execute_query(connection, delete_query)
    except:
        print('\nInvalid Input: Please Try Again')


# Create the connection for Python Program and MySQL Workbench
connection = create_connection("cis3368v1.cajh5ngvt8lu.us-east-2.rds.amazonaws.com", "NoahHendricks", "H-TownRockets123", "cis3368v1db") 

# Adds a table for "results" but only if a "results" table does not already exist in SQL
# For this assignment I already created my table in MySQL Workbench so this piece of code is excess and serves as just a backup table creator
create_contact_table = """
CREATE TABLE IF NOT EXISTS results(
ID INT AUTO_INCREMENT,
Country VARCHAR(3) NOT NULL,
City VARCHAR(60) NOT NULL,
Temperature DECIMAL(10,2) NOT NULL,
Feels_Like DECIMAL(10,2) NOT NULL,
Humidity DECIMAL NOT NULL,
PRIMARY KEY (ID)
)"""

# excutes the "CREATE TABLE" command to run from Python to MySQL
# This piece of code is also excess for the same reason as above
execute_query(connection, create_contact_table)

print('\n\nWelcome To The Command Line Based API Service Call For Current Weather In The Open Weather Map\n')

# While Loop checks for country and city alphabetical character input only
# Reference Link: https://realpython.com/python-while-loop/
abc_check = True
while abc_check == True:
    country_input = (input("\nEnter the country abbreviation for which the weather data you'd like to retrieve (ex: USA): "))
    # country abbreviation input is set at a max length of 3 characters
    if len(country_input) > 3:
        print("\nInvalid Country Input: Please Try again")

    # Check function for alphabetical characters
    # Reference Link: https://www.geeksforgeeks.org/python-ways-to-check-if-given-string-contains-only-letter/
    elif not country_input.isalpha():
        print("\nInvalid Country Input: Please Try Again")
        print("(Make sure to enter alphebetical characters only!)")
    else:
        abc_check = False

abc_check = True
while abc_check == True:
    city_input = input("\nEnter the city for which the weather data you'd like to retrieve (ex: Houston): ")
    # city input is set at a max length of 60 characters
    if len(city_input) > 60:
        print("\nInvalid City Input: Please Try Again")

    # Check to allow spaces in string "isspace()" because of our "isalpha()" function
    # Reference Link: https://stackoverflow.com/questions/20890618/isalpha-python-function-wont-consider-spaces/20890671
    elif all (not x.isalpha() or x.isspace() for x in city_input):
        print("\nInvalid City Input: Please Try Again")
        print("(Make sure to enter alphebetical characters only!)")
    else:
        abc_check = False

# Website used for the current weather API
# Parsed the Website and inserted the ability for user input information
url1 = "http://api.openweathermap.org/data/2.5/weather?q="
url2 = ","
url3 = "&units=imperial&appid=6f1b9e26a76acfc0cc8f2682c9d91139"

# Current Weather API with user entry ability
url = ("{}{}{}{}{}".format(url1, city_input, url2, country_input, url3))

print("\n\nThe current weather data report for the city of", city_input.upper(), "in the country of", country_input.upper(), "is:\n")

# calls "get_temp_data" function to retrieve data and output it
output_get_temp_data =  get_temp_data()
print("Temperature:\t", output_get_temp_data, "°F")

# calls "get_feels_like_data" function to retrieve data and output it
output_get_feels_like_data = get_feels_like_data()
print("Feels_Like:\t", output_get_feels_like_data, "°F")

# calls "get_humidity_data" function to retrieve data and output it
output_get_humidity_data = get_humidity_data()
print("Humidity:\t", output_get_humidity_data, "°F")


print('\n\nPlease Select One of the following:\n')

# Initiates Menu
command = ''

# Operates Menu
while command != 'q':

    # Running Menu for entire program
    menu = ('\nMENU\n'
        's - Store current weather result\n'
        'a - Output all weather results in alphabetical order by country & city\n'
        't - Output all weather results in ascending order by temperature\n'
        'o - Output all weather results\n'
        'd - Delete weather result(s)\n'
        'q - Quit\n')
    print(menu)

    # User chooses their option
    choice = input('\nChoose an option:\n')

     # Stores weather result to database 
    if choice.lower() == 's':
        store_data()

    # Output of all weather results in alphabetical order by each country & then city in the database
    elif choice.lower() == 'a':
        output_alphabetical_order()

    # Output of all weather results in ascending order by each temperature in the database
    elif choice.lower() == 't':
        output_temp_order()

    # Output of all weather results in the database
    elif choice.lower() == 'o':
        output_all()
    
    # Delete any weather result(s) in the database
    elif choice.lower() == 'd':
        delete_results()

    # Quit (End Program)
    elif choice.lower() == 'q':
        print('\nProgram Ended...')
        break

    # User friendly error if the user types an invalid input for the menu
    else:
        print('\nInvalid input: Please Try Again')
