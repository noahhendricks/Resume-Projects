# Noah Hendricks
# 1900219
# ZyLab 14.13

# Global variable
num_calls = 0


# TODO: Write the partitioning algorithm - pick the middle element as the
#       pivot, compare the values using two index variables l and h (low and high),
#       initialized to the left and right sides of the current elements being sorted,
#       and determine if a swap is necessary

def partition(use_ids, i, k):
    midpoint = i + (k - i) // 2
    pivot = user_ids[midpoint]  # midpoint pivot

    done = False
    x = i
    h = k
    while not done:  # parsing through each name
        while use_ids[x] < pivot:
            x = x + 1
        while pivot < use_ids[h]:
            h = h - 1

        if x >= h:
            done = True
        else:
            temp = use_ids[x]
            use_ids[x] = use_ids[h]  # name swap
            use_ids[h] = temp
            x = x + 1
            h = h - 1
    return h


# TODO: Write the quicksort algorithm that recursively sorts the low and
#       high partitions. Add 1 to num_calls each time quicksort() is called

def quicksort(use_ids, i, k):
    global num_calls
    num_calls = num_calls + 1  # increase number of quicksort calls

    if i >= k:
        return

    j = partition(use_ids, i, k)

# calls both halves from list to sort
    quicksort(use_ids, i, j)
    quicksort(use_ids, j + 1, k)
    return


if __name__ == "__main__":
    user_ids = []
    user_id = input()
    while user_id != "-1":
        user_ids.append(user_id)
        user_id = input()

    # Initial call to quicksort
    quicksort(user_ids, 0, len(user_ids) - 1)

    # Print number of calls to quicksort
    print(num_calls)

    # Print sorted user ids
    for user_id in user_ids:
        print(user_id)
