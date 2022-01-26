# Noah Hendricks
# 1900219
# Homework 1
# Comand Line Based Contact Book Assignment

import datetime
from datetime import date
import mysql.connector
from mysql.connector import Error

# Created class for Contact (not used)
class Contact:
    def __init__(self, id, contactDetails, creationDate):
        self.id = id
        self.contactDetails = contactDetails
        self.creationDate = creationDate


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


def add_contact():
    # User input for which contact details they would like to add
    add_contact_details = input('\nEnter Contact Details:\n')
    # Format for the date & datetime function sets the default date (today) of the newly created contact
    today = datetime.datetime(2021, 1, 1)
    str_today = date.today().isoformat()
    # MySQL Syntax via Python to insert contact details and their date created (datetime function) to add new contacts
    # Code style referenced from the Professor's "Hello.py" in class example
    query = "INSERT INTO contacts (contactDetails, creationDate) VALUES ('" + add_contact_details + "', '" + str_today + "')"
    # executes and connects database statement for query to the program & MySQL Workbench
    execute_query(connection, query)


def remove_contact():
    try:
        # user input (integer only) for which contact id they wish to remove
        delete_contact_details = int(input('Which contact id would you like to remove?\n'))
        # MySQL Syntax via Python to delete 
        delete_statement = "DELETE FROM contacts WHERE id = %d" % (delete_contact_details)
        # # executes and connects database statement for delete_statement to the program & MySQL Workbench
        execute_query(connection, delete_statement)
    except:
        print('\nInvalid Input: Please Try Again')


def update_contact():
    try:
        # user input (integer only) for which contact id they wish to update
        update_contact_details = int(input('\nWhich contact id would you like to update?\n'))
        # user input for contact details and what they wish the new contact be called
        new_contact_details = input('\nWhat would you like your new contact to be?\n')
        # MySQL Syntax via Python to update
        # Referenced Code styleLink: https://stackoverflow.com/questions/22675535/sql-how-to-update-existing-value-with-variable
        update_contact_statement = """
        UPDATE contacts 
        SET contactDetails = '%s' 
        WHERE id = %d """% (new_contact_details, update_contact_details)
        # executes and connects database statement for update_contact_statement to the program & MySQL Workbench
        execute_query(connection, update_contact_statement)
    except:
        print('\nInvalid Input: Please Try Again')


def output_abc_order():
    print('\nOutput List of all contacts in alphabetical order:')
    # MySQL Syntax via Python to output in alphabetical order
    abc_contacts = """
    SELECT * FROM contacts
    ORDER BY contactDetails ASC, id ASC"""
    # executes and connects database statement for abc_contacts to the program & MySQL Workbench
    contacts = execute_read_query(connection, abc_contacts)
    # Referenced Code styleLink: https://pynative.com/python-mysql-select-query-to-fetch-data/
    print("%-15s %-25s %s" % ('\nID', 'Contact Details', 'Creation Date\n'))
    # Outputs all data for table contacts in order of contact details to the terminal
    for x in contacts:
        print("%-15d %-25s %s" % (x[0], x[1], x[2]))


def output_creation_date_order():
    print('\nOutput List of all contacts by the creation date:')
    # MySQL Syntax via Python to output in ascending order of the creation date
    # If 2 or more contacts have the same creation date, then it outputs them in ascending order by their unique id
    date_order = """
    SELECT * FROM contacts
    ORDER BY creationDate ASC, id ASC"""
    # executes and connects database statement for date_order to the program & MySQL Workbench
    contacts = execute_read_query(connection, date_order)
    print("%-15s %-25s %s" % ('\nID', 'Contact Details', 'Creation Date\n'))
    # Outputs all data for table contacts in order of creation date to the tetminal
    for x in contacts:
        print("%-15d %-25s %s" % (x[0], x[1], x[2]))


def output_all():
    # MySQL Syntax for outputting the entire contacts table default (ordered by id)
    # Referenced Link: W3Schools.com/python
    print('\nOutput List of all contacts:')
    select_contacts = "SELECT * FROM contacts"
    # executes and connects database statement for select_contacts to the program & MySQL Workbench
    contact_book = execute_read_query(connection, select_contacts)
    # Formatting of output columns
    # Reference Link: https://www.youtube.com/watch?v=0tjVynTgTX4
    print("%-15s %-25s %s" % ('\nID', 'Contact Details', 'Creation Date\n'))
    # Outputs all data for table contacts in the terminal
    for x in contact_book:
        print("%-15d %-25s %s" % (x[0], x[1], x[2]))


# Create the connection for Python Program and MySQL Workbench
connection = create_connection("cis3368v1.cajh5ngvt8lu.us-east-2.rds.amazonaws.com", "NoahHendricks", "H-TownRockets123", "cis3368v1db") 

# Adds a table for "contacts" but only if a "contacts" table does not already exist
# This piece of code is only necessary if there is no table created yet
# For this assignment I already created my table in MySQL Workbench so this piece of code is excess and serves as just a backup table creator
create_contact_table = """
CREATE TABLE IF NOT EXISTS contacts(
id INT AUTO_INCREMENT,
contactDetails VARCHAR(255) NOT NULL,
creationDate DATE NOT NULL,
PRIMARY KEY (id)
)"""

# excutes the "CREATE TABLE" command to run from Python to MySQL
# This piece of code is also excess for the same reason as above
execute_query(connection, create_contact_table)

print('\n\nWelcome To The Command Line Based Contact Book\n')
print('Please Select One of the following:')

# Initiates Menu
command = ''

# Operates Menu
while command != 'q':

    # Running Menu for entire program
    menu = ('\nMENU\n'
        'a - Add contact\n'
        'd - Remove contact\n'
        'u - Update contact details\n'
        'b - Output all contacts in alphabetical order\n'
        'c - Output all contacts by creation date\n'
        'o - Output all contacts\n'
        'q - Quit\n')
    print(menu)
                
    # User chooses their option
    choice = input('\nChoose an option:\n')

    # Adds a contact
    if choice.lower() == 'a':
        add_contact()

    # Removes a contact
    elif choice.lower() == 'd':
        remove_contact()

    # Updates the contact details
    elif choice.lower() == 'u':
        update_contact()

    # Outputs all contacts in alphabetical order by Contcact Details
    elif choice.lower() == 'b':
        output_abc_order()

    # Outputs all of the contacts by the Creation Date
    elif choice.lower() == 'c':
        output_creation_date_order()

    # Outputs all of the contacts
    elif choice.lower() == 'o':
        output_all()

    # Quit (End Program)
    elif choice.lower() == 'q':
        print('\nProgram Ended...')
        break

    # User friendly error if the user types an invalid input
    else:
        print('\nInvalid input: Please Try Again')
