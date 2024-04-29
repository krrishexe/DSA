def sum_all(*args):
    sum = 0
    for arg in args:
        sum = sum + arg
    return sum

print(sum_all(1,2,3,4,5))