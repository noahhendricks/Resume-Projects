# Noah Hendricks
# 1900219
# ZyLab 12.9

# Read name and age input
input_info = input().split()
name = input_info[0]

# Read name and age until you read a -1
while name != '-1':
    try:
        # Increment age
        persons_age = int(input_info[1]) + 1
    except ValueError as exception:
        persons_age = 0
    print('{} {}'.format(name, persons_age))
    input_info = input().split()
    name = input_info[0]
