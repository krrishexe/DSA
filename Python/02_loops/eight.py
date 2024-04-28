num = 2

def prime_checker(num):
    isPrime = True
    if num == 0:
        print("%d is a composite number " % num)
    elif num == 1:
        print("%d is not a composite number neither prime " % num)
    elif num > 1:
        for i in range(2,num -1 ):
            if num % i == 0:
                isPrime = False
                break
            
        if isPrime:
            print("%d is a prime number " % num)
        else:
            print("%d is not a prime number " % num)
            
prime_checker(num)