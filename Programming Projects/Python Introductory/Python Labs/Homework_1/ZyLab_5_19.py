# Noah Hendricks
# 1900219

total = 0
print("Davy's auto shop services")
print('Oil change -- $35')
print('Tire rotation -- $19')
print('Car wash -- $7')
print('Car wax -- $12\n')

print('Select first service:')
service1 = input()
print('Select second service:\n')
service2 = input()

print("Davy's auto shop invoice\n")
if service1 == 'Oil change':
    print('Service 1: Oil change, $35')
    total = total + 35
elif service1 == 'Tire rotation':
    print('Service 1: Tire rotation, $19')
    total = total + 19
elif service1 == 'Car wash':
    print('Service 1: Car wash, $7')
    total = total + 7
elif service1 == 'Car wax':
    print('Service 1: Car wax, $12')
    total = total + 12
elif service1 == '-':
    print('Service 1: No service')

if service2 == 'Oil change':
    print('Service 2: Oil change, $35\n')
    total = total + 35
elif service2 == 'Tire rotation':
    print('Service 2: Tire rotation, $19\n')
    total = total + 19
elif service2 == 'Car wash':
    print('Service 2: Car wash, $7\n')
    total = total + 7
elif service2 == 'Car wax':
    print('Service 2: Car wax, $12\n')
    total = total + 12
elif service2 == '-':
    print('Service 2: No service\n')

print('Total:', '${:.0f}'.format(total))
