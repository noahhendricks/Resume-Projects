# Noah Hendricks
# 1900219
# Final Project Main File

if __name__ == "__main__":

    import FinalProject_Input
    import FinalProject_Output
    import FinalProject_Query

    choice = input('Do you want to create Processed Inventory Reports or use the Interactive Inventory Query '
                   'Capability?\n1) Create Reports \n2) Query Inventory\nEnter: ')

    # Calls read Manufacturer file function and returns Manufacturer list
    man = FinalProject_Input.read_manufacturer_file()

    # Calls read Price file function and returns Price list
    price = FinalProject_Input.read_price_file()

    # Calls read Service Date file function and returns Service Date list
    serv_date = FinalProject_Input.read_service_date_file()

    if choice == '1':

        # Calls the four functions in FinalProjectWrite_files to create required inventory output report files
        FinalProject_Output.full_inventory(man, price, serv_date)
        FinalProject_Output.item_type_inventory(man, price, serv_date)
        FinalProject_Output.past_service_date_inventory(man, price, serv_date)
        FinalProject_Output.damage_inventory(man, price, serv_date)

    elif choice == '2':

        # Runs queries
        FinalProject_Query.run_queries()

    else:
        print('\nWrong Input')
