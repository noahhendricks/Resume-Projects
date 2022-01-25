# Noah Hendricks
# 1900219
# ZyLab 12.7

# defined function gets the person's age
def get_age():
    persons_age = int(input())
    if persons_age < 18 or persons_age > 75:
        raise ValueError('Invalid age.')
    return persons_age


# defined function gets the person's fat burning heart rate
def fat_burning_heart_rate(adult_age):
    adult_heart_rate = (220 - adult_age) * .70
    return adult_heart_rate


if __name__ == '__main__':
    # start of the main program
    try:
        # read age
        calculated_age = get_age()
        print('Fat burning heart rate for a {} year-old: {} bpm'.format(calculated_age,
              fat_burning_heart_rate(calculated_age)))

    except ValueError as val_err:
        print(val_err)
        print('Could not calculate heart rate info.\n')
