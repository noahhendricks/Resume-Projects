# Noah Hendricks
# 1900219
# Final Project Output File

import csv
import datetime


# Creates item type inventory files
def item_type_inventory(manufacture, price, service_date):

    # Different types of item type
    diff_types = []
    diff_item_type_inv = []
    diff_types_dic = {}

    # Go through all manufactures data row by row
    for m_list in manufacture:

        # Save unique item types and ignore repeated types
        if m_list[2] not in diff_types:
            diff_types.append(m_list[2])

    # Save total number of items
    total_items = len(manufacture)

    # Go through each item type
    for i_type in diff_types:

        # Go through each row inside of manufacture list
        for m_list in manufacture:

            # Check if item type of that row is same as given type
            if m_list[2] == i_type:

                # Go through price_list and append them to list
                for j in range(total_items):
                    if m_list[0] == price[j][0]:
                        m_list.append(price[j][1])

                # Run loop again
                for k in range(total_items):

                    # Go through each and every service list item
                    # append it to list
                    if m_list[0] == service_date[k][0]:
                        m_list.append(service_date[k][1])
                if m_list[3] == 'damaged':
                    m_list[3] = 'Yes'
                else:
                    m_list[3] = 'No'

                    # Re-arrange the list to suit the required format
                diff_item_type_inv.append(m_list[:2] + m_list[4:] + [m_list[3]])

                # Sort items by item ID
                diff_item_type_inv = sorted(diff_item_type_inv, key=lambda x: x[0])

        # Use type as dict key
        diff_types_dic[i_type] = diff_item_type_inv
        diff_item_type_inv = []

    for key, value in diff_types_dic.items():

        # Key in dictionary presents different types of items
        file = open(key + "Inventory.csv", 'w', newline="")
        writer = csv.writer(file)
        header = ["ID", "Manufacturer Name", "Price", "Service Date", "Damaged"]
        writer.writerow(header)

        # Write all values into dict to file
        for m_list in value:
            writer.writerow(m_list)
        file.close()


# Creates full inventory file
def full_inventory(manufacture, price, service_date):

    # Number of items
    total_items = len(manufacture)
    full_inventory_list = []
    for i in range(total_items):

        # Assign first 3 columns from row
        man_fact = manufacture[i][:3]

        # Find row item's corresponding price by using item id
        for j in range(total_items):

            # Go through each row of price.csv and check if the item id matches to assign
            if man_fact[0] == price[j][0]:

                # Concatenate that price value to the item list in manufacture variable if item id does not correspond
                man_fact.append(price[j][1])

        # Append service dates
        for k in range(total_items):
            if man_fact[0] == service_date[k][0]:
                man_fact.append(service_date[k][1])
        if manufacture[i][-1] == 'damaged':
            # Value damaged or not
            man_fact.append("Yes")
        else:
            man_fact.append("No")
        full_inventory_list.append(man_fact)
        full_inventory_list = sorted(full_inventory_list, key=lambda x: x[1])

    # Opens csv file and writes full inventory list values into the file
    file = open("FullInventory.csv", 'w',
                newline="")
    writer = csv.writer(file)

    # Headers
    header = ["ID", "Manufacturer Name", "Item Type", "Price", "Service Date", "Damaged"]

    # Write header to csv
    writer.writerow(header)

    # Go through each item list in full inventory list and write that as row in csv file
    for f_list in full_inventory_list:
        writer.writerow(f_list)

    # Close file
    file.close()


# Creates past service dates inventory file
def past_service_date_inventory(manufacture, price, service_date):
    total_items = len(manufacture)
    items_past_serv = []
    date_of_today = datetime.datetime.now()

    # Go through each row inside service date
    for s_list in service_date:

        # Convert service date to datetime.datetime object
        service_date = datetime.datetime.strptime(s_list[1], '%m/%d/%Y')

        # Comparing service date to verify if it is less than today's date
        if service_date < date_of_today:

            # If less than go though each file's list and append values
            # Go through manufacture list and take relevant items values
            for j in range(total_items):
                if s_list[0] == manufacture[j][0]:
                    items_past_serv.append(manufacture[j][:3])

            # Go through price list and append prices
            for k in range(total_items):
                if s_list[0] == price[k][0]:
                    items_past_serv[-1].append(price[k][1])
                    items_past_serv[-1].append(s_list[1])

            # Appending damaged or not to list end
            for i in range(total_items):
                if s_list[0] == manufacture[i][0]:
                    if manufacture[i][3] == 'Yes':
                        items_past_serv[-1].append("Yes")
                    else:
                        items_past_serv[-1].append("No")

    # Sort the list by dates
    items_past_serv = sorted(items_past_serv, key=lambda x: datetime.datetime.strptime(x[4], '%m/%d/%Y'))

    # Opens csv file named Past Service Date Inventory
    header = ["ID", "Manufacturer Name", "Item Type", "Price", "Service Date", "Damaged"]
    file = open("PastServiceDateInventory.csv", 'w', newline="")
    writer = csv.writer(file)
    writer.writerow(header)
    for s_list in items_past_serv:
        writer.writerow(s_list)
    file.close()


# Creates damaged inventory file
def damage_inventory(manufacture, price, service_date):
    total_items = len(manufacture)
    damaged_items = []
    for man_list in manufacture:
        if man_list[3] == 'Yes':
            damaged_items.append(man_list[:3])

            for j in range(total_items):
                if man_list[0] == price[j][0]:
                    damaged_items[-1].append(price[j][1])
            for k in range(total_items):
                if man_list[0] == service_date[k][0]:
                    damaged_items[-1].append(service_date[k][1])
    damaged_items = sorted(damaged_items, key=lambda x: x[3], reverse=True)
    header = ["ID", "Manufacturer Name", "Item Type", "Price", "Service Date"]
    file = open("DamagedInventory.csv", 'w', newline="")
    writer = csv.writer(file)
    writer.writerow(header)
    for man_list in damaged_items:
        writer.writerow(man_list)
    file.close()
