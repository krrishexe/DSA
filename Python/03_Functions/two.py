import math

def areaCir(rad=3):
    area = math.pi * rad * rad
    cir = 2 * math.pi * rad
    return area,cir

area,circimference  = areaCir(  5)

print(area.__round__(2))