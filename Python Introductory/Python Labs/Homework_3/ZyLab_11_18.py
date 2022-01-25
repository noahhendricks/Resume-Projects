# Noah Hendricks
# 1900219
# ZyLab 11.18

# Numbers that are inputted into program command line
input_numbers = input()

# formula for integers to list out with only certain values
integer_list = [int(value) for value in input_numbers.split() if int(value) >= 0]

# sorting list
integer_list.sort()

# for loop to print each integer
for index in integer_list:
    print(index, end=' ')
