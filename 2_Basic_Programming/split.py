
def SplitString(word):

    try: 
        _splitWord = word.split(',')
        for _w in _splitWord:
            print(_w)
    
    except ValueError:
        print('split failed !!')


if __name__ == "__main__":

    word = input('enter word : ')
    SplitString(word)