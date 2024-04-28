

while True:
    x = int(input("Enter value b/w 1 and 10"))
    if x in range(0,10):
        print(x)
        break
    else:
        print("invalid number")