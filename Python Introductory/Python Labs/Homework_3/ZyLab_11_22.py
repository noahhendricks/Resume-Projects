# Noah Hendricks
# 1900219
# ZyLab 11.22

# Words that are inputted into the program command line
words = input()

# separating each word using the split function
separated_words = words.split(' ')

# "i" is the counter
for i in separated_words:
    print(i, separated_words.count(i))
