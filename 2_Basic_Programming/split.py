
def SplitString(word):

    _splitWord = word.split(',')

    for _w in _splitWord:
        print(_w)


if __name__ == "__main__":

    word = 'hello,world@rcom'
    SplitString(word)