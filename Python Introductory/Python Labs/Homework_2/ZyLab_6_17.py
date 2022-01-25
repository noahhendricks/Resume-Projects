# Noah Hendricks
# 1900219

password = input()
improved_password = ''

# looping through the inputted password to find which variables to encrypt
for i in password:
    if i == 'i':
        improved_password += '!'
    elif i == 'a':
        improved_password += '@'
    elif i == 'm':
        improved_password += 'M'
    elif i == 'B':
        improved_password += '8'
    elif i == 'o':
        improved_password += '.'
    else:
        improved_password += i

improved_password += 'q*s'
password = improved_password
print(password)
