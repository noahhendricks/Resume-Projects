# Noah Hendricks
# 1900219
# ZyLab 14.11

# defined function for the selection sort descend trace
def selection_sort_descend_trace(num_list):
    for n in range(len(num_list) - 1):
        max_ind = n

        # decreasing order
        for x in range(n + 1, len(num_list)):
            if num_list[x] > num_list[max_ind]:
                max_ind = x
        num_list[n], num_list[max_ind] = num_list[max_ind], num_list[n]
        num_items = len(num_list)
        count = 0

        # print list of numbers
        while count < num_items-1:
            print(num_list[count], '', end='')
            count = count + 1
            if count == num_items-1:
                print(int(num_list[count]), '')
    return num_list


if __name__ == '__main__':
    # start of main program
    numbers = [int(c) for c in input().split()]
    selection_sort_descend_trace(numbers)
