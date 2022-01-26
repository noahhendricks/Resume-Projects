# Noah Hendricks
# 1900219
# Final Project Query File

import csv
import datetime
from os import path


# Query function
def run_queries():
    if path.exists('FullInventory') == "False":
        print("\nNo such file, please create files first")
    else:
        while True:
            print("\nEnter \n1) Check Item\nQ) Quit ")
            choice = input("Enter: ")
            if choice.lower() == 'q':
                print("Thank You")
                break

            elif choice.lower() == '1':
                manufacturer = input("\nEnter the manufacturer name and item type, ex: (Apple laptop): ").lower()
                items = []

                # Opens an output file FullInventory.csv which was created
                file = open("FullInventory.csv", "r")
                reader = csv.reader(file)
                next(reader)
                price_diff = 0
                for row in reader:

                    # Checks if given manufacturer and item type exists
                    if row[2].lower() in manufacturer and row[1].lower() in manufacturer:
                        if price_diff < int(row[3]):
                            if datetime.datetime.strptime(row[4], '%m/%d/%Y') > datetime.datetime.now() \
                                    and row[-1] != 'Yes':
                                price_diff = int(row[3])
                                items.append(row)

                # If there are any other items it will show highest price item with same type and manufacturer
                if len(items) > 0:
                    items = sorted(items, key=lambda x: x[3])
                    print("Your item is: Item ID: {}, Manufacturer Name: {}, Item Type: {}, Price: ${}"
                          .format(items[-1][0], items[-1][1], items[-1][2], items[-1][3]))
                    file.seek(0)
                    reader = csv.reader(file)
                    next(reader)
                    price_diff = 10000
                    item_suggested = ""

                    # Goes through each
                    for row in reader:
                        if row[2].lower() in manufacturer and row[0] != items[-1][0] and row[1] != items[-1][1]:
                            if price_diff > abs(int(items[-1][3]) - int(row[3])):

                                # Price  cannot be damaged or past service date
                                if datetime.datetime.strptime(row[4], '%m/%d/%Y') > datetime.datetime.now() \
                                        and row[-1] \
                                        != 'Yes':
                                    price_diff = abs(int(items[-1][3]) - int(row[3]))
                                    item_suggested = row

                    if item_suggested != "":
                        print("You may, also, consider: Item ID: {}, Manufacturer Name: {}, Item Type: {}, and Price: "
                              "${}".format(item_suggested[0], item_suggested[1], item_suggested[2], item_suggested[3]))
                else:
                    print('No such item in inventory')
            else:
                print("Please enter 1 or q")
