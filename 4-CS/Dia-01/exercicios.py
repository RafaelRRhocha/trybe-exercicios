from math import ceil


def higher(a, b):
  print(max(a,b))

higher(10, 20)

def mean():
  arr = [5, 10, 15, 20]
  print(sum(arr) / len(arr))

mean()

def tower(n):
  for i in range(n):
    print(n * "*")

tower(5)

def higher_string(str):
  print(max(str, key=len))

higher_string(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])

def calc_lata(size):
  lata_qnt = ceil(size / (18 * 3))
  total_value = 80 * lata_qnt
  print((lata_qnt, round(total_value, 2)))

calc_lata(200)

def type_triangulo(a, b, c):
  if a == b == c:
    print('Triângulo Equilátero')
  elif (a == b) or (a == c) or (b == c):
    print('Triângulo Isósceles')
  else:
    print('Triângulo Escaleno')

def is_triangulo(a, b, c):
  if (a + b > c) and (a + c > b) and (c + b > a):
    print('é um triangulo')
    type_triangulo(a, b, c)
  else:
    print('essa porra não é um triangulo')

is_triangulo(3, 3, 3)
