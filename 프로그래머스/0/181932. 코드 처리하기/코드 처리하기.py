def solution(code):
    mode = False
    ret = ''
    for idx in range(len(code)):
        if (not mode):
            if (code[idx] != '1' and idx % 2 == 0):
                ret += code[idx]
            elif code[idx] == '1':
                mode = not mode
        else:
            if (code[idx] != '1' and idx % 2 != 0):
                ret += code[idx]
            elif code[idx] == '1':
                mode = not mode
    return ret or 'EMPTY'
            