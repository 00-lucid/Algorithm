def solution(intStrs, k, s, l):
    result = []
    for intStr in intStrs:
        temp = int(intStr[s:s+l])
        if k < temp:
            result.append(temp)
    return result