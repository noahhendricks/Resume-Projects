# Noah Hendricks
# 1900219

lemon_juice = float(input('Enter amount of lemon juice (in cups):\n'))
water = float(input('Enter amount of water (in cups):\n'))
agave_nectar = float(input('Enter amount of agave nectar (in cups):\n'))
servings = float(input('How many servings does this make?\n\n'))
gallons = 16

print('Lemonade ingredients - yields', '{:.2f}'.format(servings), 'servings')
print('{:.2f}'.format(lemon_juice), 'cup(s) lemon juice')
print('{:.2f}'.format(water), 'cup(s) water')
print('{:.2f}'.format(agave_nectar), 'cup(s) agave nectar\n')
desired_servings = float(input('How many servings would you like to make?\n\n'))
print('Lemonade ingredients - yields', '{:.2f}'.format(desired_servings), 'servings')
print('{:.2f}'.format((desired_servings / servings) * lemon_juice), 'cup(s) lemon juice')
print('{:.2f}'.format((desired_servings / servings) * water), 'cup(s) water')
print('{:.2f}'.format((desired_servings / servings) * agave_nectar), 'cup(s) agave nectar\n')
gallons_lemon_juice = (desired_servings / servings) * lemon_juice
gallons_water = (desired_servings / servings) * water
gallons_agave_nectar = (desired_servings / servings) * agave_nectar
print('Lemonade ingredients - yields', '{:.2f}'.format(desired_servings), 'servings')
print('{:.2f}'.format(gallons_lemon_juice / gallons), 'gallon(s) lemon juice')
print('{:.2f}'.format(gallons_water / gallons), 'gallon(s) water')
print('{:.2f}'.format(gallons_agave_nectar / gallons), 'gallon(s) agave nectar')
