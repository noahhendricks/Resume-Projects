# Noah Hendricks
# 1900219
# Coding Problem 1
# Birthday Calculator that the user inputs the current date as well as their birthday date to compute current age.

print('Birthday Calculator')
print('Current day')

Age = 0
C_month = int(input('Month: '))
if C_month not in range(1, 13):  # Check for valid month
    print('Invalid month')  # If range requirement is not met for months then program is invalid

else:
    C_day = int(input('Day: '))
    if C_day not in range(1, 32):  # Check for valid day
        print('Invalid day')  # If range requirement is not met for days then program is invalid
    else:
        C_year = int(input('Year: '))

        print('Birthday')
        B_month = int(input('Month: '))

        if B_month not in range(1, 13):  # Check for valid month
            print('Invalid month')  # If range requirement is not met for months then program is invalid
        else:
            B_day = int(input('Day: '))

            if B_day not in range(1, 32):  # Check for valid day
                print('Invalid day')  # If range requirement is not met for days then program is invalid
            else:
                B_year = int(input('Year: '))

                if C_month <= B_month:  # Current month is less than or equal to Birthday month
                    if C_day < B_day:
                        Age = (C_year - B_year) - 1
                        print('You are', Age, 'years old.')

                    elif C_day > B_day:  # Current Day is greater than Birthday day
                        Age = (C_year - B_year)
                        print('You are', Age, 'years old.')

                    elif C_day == B_day:  # Current date equals Birthday date then "Happy Birthday!" is stated
                        Age = (C_year - B_year)
                        print('You are', Age, 'years old.')
                        print('Happy Birthday!')

                else:
                    Age = int(C_year - B_year)  # Age of the user is computed
                    print('You are', Age, 'years old.')
