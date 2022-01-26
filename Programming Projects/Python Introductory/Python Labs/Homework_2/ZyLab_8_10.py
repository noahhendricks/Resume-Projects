# Noah Hendricks
# 1900219

input_word = input()
forward = ''
backward = ''
for _x_ in input_word:
    if _x_ != ' ':
        forward += _x_
        backward = _x_ + backward

if forward == backward:
    print(input_word + ' is a palindrome')
else:
    print(input_word + ' is not a palindrome')
