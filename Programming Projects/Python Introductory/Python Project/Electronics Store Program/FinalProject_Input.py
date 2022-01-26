# Noah Hendricks
# 1900219
# Final Project Input File

import csv


# Opens and reads ManufacturerList.csv
def read_manufacturer_file():
    file = open("ManufacturerList.csv", "r")
    reader = csv.reader(file)
    manufacturer = []
    for row in reader:

        # Assigns each row to manufacturer list
        manufacturer.append(row)
    file.close()

    return manufacturer


# Opens and reads PriceList.csv
def read_price_file():
    file = open("PriceList.csv", "r")
    reader = csv.reader(file)
    prices = []
    for row in reader:

        # Assigns each row to prices list
        prices.append(row)
    file.close()
    return prices


# Opens and reads ServiceDatesList.csv
def read_service_date_file():
    file = open("ServiceDatesList.csv", "r")
    reader = csv.reader(file)
    service_dates = []
    for row in reader:

        # Assigns each row to ser_dates list
        service_dates.append(row)
    file.close()
    return service_dates
