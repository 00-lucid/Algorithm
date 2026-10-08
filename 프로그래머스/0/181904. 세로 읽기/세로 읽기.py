def solution(my_string, m, c):
    return ''.join(map(lambda x: x[c-1], [my_string[i*m:m*(i+1)] for i in range(len(my_string) // m)]))