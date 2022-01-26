# Noah Hendricks
# 1900219
# ZyLab 10.11

# defined class for all food items
class FoodItem:
    # defined function for __init__
    def __init__(self, name="None", fat=0.00, carbs=0.00, protein=0.00):
        self.name = name
        self.fat = fat
        self.carbs = carbs
        self.protein = protein

    # defined function for get calories
    def get_calories(self, num_serve):
        # Calorie formula
        calories = ((self.fat * 9) + (self.carbs * 4) + (self.protein * 4)) * num_serve
        return calories

    # defined function for print info
    def print_info(self):
        print('Nutritional information per serving of {}:'.format(self.name))
        print('   Fat: {:.2f} g'.format(self.fat))
        print('   Carbohydrates: {:.2f} g'.format(self.carbs))
        print('   Protein: {:.2f} g'.format(self.protein))


if __name__ == "__main__":
    # start of main function
    food_name1 = FoodItem()

    # input types
    item_type = input()
    amount_fat = float(input())
    amount_carbs = float(input())
    amount_protein = float(input())

    food_name2 = FoodItem(item_type, amount_fat, amount_carbs, amount_protein)

    num_servings = float(input())

    food_name1.print_info()
    print('Number of calories for {:.2f} serving(s): {:.2f}'.format
          (num_servings, food_name1.get_calories(num_servings)))

    print()

    food_name2.print_info()
    print('Number of calories for {:.2f} serving(s): {:.2f}'.format
          (num_servings, food_name2.get_calories(num_servings)))
