# away = {
#     "hello" : "world"
# }
# print(away["hello"])
# print(away.get("hello"))

constants = {
    "pi": 3.14,
    "e": 2.718,
    "h": 6.626
}

# for key in constants:
#     print(key,constants[key])

# for key,value in constants.items():
#     print(key,value)

# constants.pop('pi')
# print(constants)

# constants.popitem()
# print(constants)

# constants.clear()
# print(constants)

squared_num = {
    x**2 for x in range(10)
}
print(squared_num)

keys = ["cars","bike","cycle","truck"]

dictions = dict.fromkeys(keys,keys)
print(dictions)