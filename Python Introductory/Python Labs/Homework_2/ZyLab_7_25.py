# Noah Hendricks
# 1900219

import sys


def exact_change(user_total):
    if user_total <= 0:
        print('no change')
        sys.exit()
    else:
        num_dollars = user_total // 100
        user_total %= 100
        num_quarters = user_total // 25
        user_total %= 25
        num_dimes = user_total // 10
        user_total %= 10
        num_nickels = user_total // 5
        user_total %= 5
        num_pennies = user_total
        return num_dollars, num_quarters, num_dimes, num_nickels, num_pennies


def main():
    # Program starts here
    input_val = int(input())
    dollars, quarters, dimes, nickels, pennies = exact_change(input_val)

# Dollars amount
    if dollars > 1:
        print('%d dollars' % dollars)
    elif dollars == 1:
        print('%d dollar' % dollars)

    # Quarters amount
    if quarters > 1:
        print('%d quarters' % quarters)
    elif quarters == 1:
        print('%d quarter' % quarters)

    # Dimes amount
    if dimes > 1:
        print('%d dimes' % dimes)
    elif dimes == 1:
        print('%d dime' % dimes)

    # Nickels amount
    if nickels > 1:
        print('%d nickels' % nickels)
    elif nickels == 1:
        print('%d nickel' % nickels)

    # Pennies amount
    if pennies > 1:
        print('%d pennies' % pennies)
    elif pennies == 1:
        print('%d penny' % pennies)


if __name__ == '__main__':
    main()
