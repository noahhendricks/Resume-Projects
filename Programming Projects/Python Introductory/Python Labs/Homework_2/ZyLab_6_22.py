# Noah Hendricks
# 1900219

x1 = int(input())
y1 = int(input())
s1 = int(input())
x2 = int(input())
y2 = int(input())
s2 = int(input())
solution = False

for x in range(-10, 11):
    for y in range(-10, 11):
        if (x1 * x) + (y1 * y) == s1 and (x2 * x) + (y2 * y) == s2:
            print(x, y)
            solution = True

if not solution:
    print('No solution')
