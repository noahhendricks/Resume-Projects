# Noah Hendricks
# 1900219
# ZyLab 10.19

# defined class for Item To Purchase
class ItemToPurchase:
    # defined function for __init__
    def __init__(self, name='none', price=0, quantity=0, description='none'):
        self.item_name = name
        self.item_price = price
        self.item_quantity = quantity
        self.item_description = description

    # defined function for print item cost
    def print_item_cost(self):
        print((self.item_name + ' ' + str(self.item_quantity) + ' @ $' + str(self.item_price) +
               ' = $' + str(self.item_price * self.item_quantity)))

    # defined print item description
    def print_item_description(self):
        print('%s: %s' % (self.item_name, self.item_description))


# defined class for Shopping Cart
class ShoppingCart:
    # defined function for __init__
    def __init__(self, cus_name='none', curr_date='January 1, 2016', cart_items=None):
        if cart_items is None:
            cart_items = []
        self.customer_name = cus_name
        self.current_date = curr_date
        self.cart_items = cart_items

    # defined function for add item
    def add_item(self, items_to_purchase):
        self.cart_items.append(items_to_purchase)

    # defined function for remove item
    def remove_item(self, new_item_name):
        x_remove_item = False
        for item in self.cart_items:
            if item.item_name == new_item_name:
                self.cart_items.remove(item)
                x_remove_item = True
                break
        if not x_remove_item:
            print('Item not found in cart. Nothing removed.')

    # defined function for modify item
    def modify_item(self, items_to_purchase):
        i_modify_item = False

        for i in range(len(self.cart_items)):
            if self.cart_items[i].item_name == items_to_purchase.item_name:
                i_modify_item = True
                self.cart_items[i].item_quantity = items_to_purchase.item_quantity
                break

        if not i_modify_item:
            print('Item not found in cart. Nothing modified.')

    # defined function for get num items in cart
    def get_num_items_in_cart(self):
        num_items = 0
        for item in self.cart_items:
            num_items += item.item_quantity
        return num_items

    # defined function for get cost of cart
    def get_cost_of_cart(self):
        total_cost = 0
        for item in self.cart_items:
            cost = (item.item_quantity * item.item_price)
            total_cost += cost
        return total_cost

    # defined function for print total
    def print_total(self):
        total_cost = self.get_cost_of_cart()
        if total_cost == 0:
            print('OUTPUT SHOPPING CART')
            print("{}\'s Shopping Cart - {}".format(self.customer_name, self.current_date))
            print('Number of Items: 0\n')
            print('SHOPPING CART IS EMPTY\n')
            print('Total: $0')
        else:
            print("{}\'s Shopping Cart - {}".format(self.customer_name, self.current_date))
            print("Number of Items: %d\n" % self.get_num_items_in_cart())
            for item in self.cart_items:
                total = item.item_price * item.item_quantity
                print("%s %d @ $%d = $%d" % (item.item_name, item.item_quantity, item.item_price, total))
            print('\nTotal: $%d' % total_cost)

    # defined function for print descriptions
    def print_descriptions(self):
        if len(self.cart_items) == 0:
            print('SHOPPING CART IS EMPTY')
        else:
            print("{}\'s Shopping Cart - {}".format(self.customer_name, self.current_date))
            print('\nItem Descriptions')
            for item in self.cart_items:
                item.print_item_description()


# defined function for print menu
def print_menu(revised_cart):
    customer_cart = revised_cart
    menu = ('\nMENU\n'
            'a - Add item to cart\n'
            'r - Remove item from cart\n'
            'c - Change item quantity\n'
            "i - Output items' descriptions\n"
            'o - Output shopping cart\n'
            'q - Quit\n')

    command = ''
    while command != 'q':
        print(menu)
        command = input('Choose an option:\n')
        while(command != 'a' and command != 'o' and command != 'i' and command != 'q' and command != 'r'
              and command != 'c'):
            command = input('Choose an option:\n')

        # if statement for add item to cart
        if command == 'a':
            print('\nADD ITEM TO CART')
            item_name = input('Enter the item name:\n')
            item_description = input('Enter the item description:\n')
            item_price = int(input('Enter the item price:\n'))
            item_quantity = int(input('Enter the item quantity:\n'))
            item_to_purchase = ItemToPurchase(item_name, item_price, item_quantity, item_description)
            customer_cart.add_item(item_to_purchase)

        # elif statement for output shopping cart
        elif command == 'o':
            print('OUTPUT SHOPPING CART')
            customer_cart.print_total()

        # elif statement for output items' descriptions
        elif command == 'i':
            print("OUTPUT ITEMS' DESCRIPTIONS")
            customer_cart.print_descriptions()

        # elif statement for remove item from cart
        elif command == 'r':
            print('REMOVE ITEM FROM CART')
            new_item_name = input('Enter name of item to remove:\n')
            customer_cart.remove_item(new_item_name)

        # elif statement for change item quantity
        elif command == 'c':
            print('\nCHANGE ITEM QUANTITY')
            new_item_name = input('Enter the item name:\n')
            qty = int(input('Enter the new quantity:\n'))
            item_to_purchase = ItemToPurchase(new_item_name, 0, qty)
            customer_cart.modify_item(item_to_purchase)


if __name__ == "__main__":
    # start of main function
    customer_name = input("Enter customer's name:\n")
    current_date = input("Enter today's date:\n")
    print('\nCustomer name: %s' % customer_name)
    print("Today's date: %s" % current_date)
    updated_cart = ShoppingCart(customer_name, current_date)
    print_menu(updated_cart)
