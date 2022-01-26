# Noah Hendricks
# 1900219

wall_height = int(input('Enter wall height (feet):\n'))
wall_width = int(input('Enter wall width (feet):\n'))
wall_area = (wall_height * wall_width)
paint_gallon = 350
paint_needed = ((wall_height * wall_width) / paint_gallon)
cans = round(paint_needed)
paint_colors = {
    'red': 35,
    'blue': 25,
    'green': 23
}

print('Wall area:', wall_area, 'square feet')
print('Paint needed:', '{:.2f}'.format(paint_needed), 'gallons')
print('Cans needed:', round(paint_needed), 'can(s)\n')
color = input('Choose a color to paint the wall:\n')
total_cost = (cans * paint_colors[color])
print('Cost of purchasing', color, 'paint:', '${:.0f}'.format(total_cost))
