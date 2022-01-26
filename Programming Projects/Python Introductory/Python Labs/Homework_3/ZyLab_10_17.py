# Noah Hendricks
# 1900219
# ZyLab 10.17

# defined class for Item To Purchase
class ItemToPurchase:
    # defined function for __init__
    def __init__(self):
        self.item_name = 'none'
        self.item_price = 0
        self.item_quantity = 0

    # defined function for print item cost
    def print_item_cost(self):
        print((self.item_name + ' ' + str(self.item_quantity) + ' @ $' + str(self.item_price) +
               ' = $' + str(self.item_price * self.item_quantity)))


if __name__ == "__main__":
    # start of main function
    print('Item 1')

    item_1 = ItemToPurchase()
    item_2 = ItemToPurchase()

    # item 1
    item_1.item_name = input('Enter the item name:\n')
    item_1.item_price = int(input('Enter the item price:\n'))
    item_1.item_quantity = int(input('Enter the item quantity:\n'))
    print('\nItem 2')

    # item 2
    item_2.item_name = input('Enter the item name:\n')
    item_2.item_price = int(input('Enter the item price:\n'))
    item_2.item_quantity = int(input('Enter the item quantity:\n'))
    print('\nTOTAL COST')

    item_1.print_item_cost()
    item_2.print_item_cost()

    # item totals $
    total_cost = (item_1.item_price * item_1.item_quantity) + (item_2.item_price * item_2.item_quantity)

    print('\nTotal: $' + str(total_cost))
