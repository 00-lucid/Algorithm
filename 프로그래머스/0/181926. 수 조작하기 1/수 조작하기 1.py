def func(control):
    if control == 'w':
        return 1
    elif control == 's':
        return -1
    elif control == 'd':
        return 10
    elif control == 'a':
        return -10

def solution(n, control):
    for c in control:
        n += func(c)
    return n