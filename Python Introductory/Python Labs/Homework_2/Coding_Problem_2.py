# Noah Hendricks
# 1900219
# Part c

# defined function for date format
def date_formatter(num_month):
    new_day = 00
    new_year = 0000
    other_format = 0   # signals is the format with the dashes

    # Parse split of the "-" and separates with the "/" operator for the correct date format
    if num_month == 20:
        new_date = single_line.split('-')
        separator = '/'
        format_date = separator.join(new_date)
        # output file for parsed Dates in write format
        output_file.write(format_date)
        output_file.write('\n')

    else:
        new_date = single_line.split(' ')

        # for loop for the new date
        for x in range(len(new_date)):

            if x == 1:   # get day of month
                day = new_date[x]
                new_day = day.split(',')
                new_day = new_day[0]

            if x == 2:  # get year
                year = new_date[x]
                new_year = year.split('\n')
                new_year = new_year[0]

        # date format restrictions for day
        if len(new_day) > 2:
            print('Incorrect day format')
        elif int(new_day) > 31:
            print('Incorrect day of month')

        # date format restrictions for year
        elif len(new_year) > 4 or len(new_year) < 4:
            print('Incorrect year format')

        # correct format of date that separates it with "/" and returns each line at the end of the date
        elif other_format != 1:
            newer_date = (str(num_month), str(new_day), str(new_year))
            separator = '/'
            format_date = separator.join(newer_date)
            # print(format_date)
            output_file.write(format_date)
            output_file.write('\n')

# dictionary is not used just there for reference and reminder!


dictionary = {'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6, 'July': 7, 'August': 8,
              'September': 9, 'October': 10, 'November': 11, 'December': 12}

# program runs: while loop is triggered when data is set to 1
new_data = 1

# file being inputted into program
file_name = str(input())

# opens the input file as read only
with open(file_name, 'r') as txt_file:
    output_file = open('parsedDates.txt', 'w')
    # reads each line in the text file individually
    while new_data == 1:
        single_line = txt_file.readline()

        # if, else, and elif statements for all months and coverts each to its specified number using find() command
        if single_line.find('January') != -1 or single_line.find('Jan') != -1:
            month = 1
            date_formatter(month)

        elif single_line.find('February') != -1 or single_line.find('Feb') != -1:
            month = 2
            date_formatter(month)

        elif single_line.find('March') != -1 or single_line.find('Mar') != -1:
            month = 3
            date_formatter(month)

        elif single_line.find('April') != -1 or single_line.find('Apr') != -1:
            month = 4
            date_formatter(month)

        elif single_line.find('May') != -1:
            month = 5
            date_formatter(month)

        elif single_line.find('June') != -1 or single_line.find('Jun') != -1:
            month = 6
            date_formatter(month)

        elif single_line.find('July') != -1 or single_line.find('Jul') != -1:
            month = 7
            date_formatter(month)

        elif single_line.find('August') != -1 or single_line.find('Aug') != -1:
            month = 8
            date_formatter(month)

        elif single_line.find('September') != -1 or single_line.find('Sept') != -1:
            month = 9
            date_formatter(month)

        elif single_line.find('October') != -1 or single_line.find('Oct') != -1:
            month = 10
            date_formatter(month)

        elif single_line.find('November') != -1 or single_line.find('Nov') != -1:
            month = 11
            date_formatter(month)

        elif single_line.find('December') != -1 or single_line.find('Dec') != -1:
            month = 12
            date_formatter(month)

        # ends program when "-1" is read
        elif single_line == '-1':
            output_file.close()
            break

        elif single_line.find('-') != -1:
            month = 20
            date_formatter(month)

        # input is in / date format
        elif single_line.find('/') != -1:
            output_file.write(single_line)
