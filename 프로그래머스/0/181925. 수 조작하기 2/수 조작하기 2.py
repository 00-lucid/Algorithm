def solution(numLog):
    result = ''
    d = {
        -1 : 's',
        1 : 'w',
        10 : 'd',
        -10 : 'a'
    }
    for i, n in enumerate(numLog):
        if (len(numLog) != i + 1):
            result += d[numLog[i + 1] - numLog[i]]
    return result