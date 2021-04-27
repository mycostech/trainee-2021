

def DividTwoInput(numberA, numberB):

  try:
    _result = numberA/numberB
    print("result : {:.2f}".format(_result))
  
  except ZeroDivisionError :
    print('can not divid, divid by zero err !!!')

  finally:
    print('end calulate')


if __name__ == "__main__":

  while(True):
    try:
      print('-------')
      print('calculate a/b')
      a = int(input('enter a : '))
      b = int(input('enter b: '))

      DividTwoInput(a,b)
    except ValueError:
      print('a or b is only integer')

  

    

  
