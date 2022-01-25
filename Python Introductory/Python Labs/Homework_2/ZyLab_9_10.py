# Noah Hendricks
# 1900219

import csv

file_name = str(input())
dictionary = dict()

# read file
with open(file_name, 'r') as excel_file:
    file_reader = csv.reader(excel_file)
    # parse through rows
    for current_row in file_reader:
        for word_count in current_row:
            # check for dictionary words if word exists then increase count by one and if not initialize to one
            if word_count not in dictionary.keys():
                dictionary[word_count] = 1
            else:
                dictionary[word_count] += 1

# print results
for key in dictionary.keys():
    print(key + ' ' + str(dictionary[key]))
