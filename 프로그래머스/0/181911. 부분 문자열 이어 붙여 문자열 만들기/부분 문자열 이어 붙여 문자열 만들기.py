def solution(my_strings, parts):
    answer = ''
    
    for i, ms in enumerate(my_strings):
        s, e = parts[i]
        answer += (ms[s:e+1])
    
    return answer