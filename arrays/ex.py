a = [1,1,2,2,4,4,5,5,5]
for i in range(len(a)):
    new_arr = []
    for j in range(len(a)):
        diff = a[i] - a[j]
        new_arr.append(diff)
    print(a[i],new_arr)