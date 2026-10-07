def solution(my_string, queries):
    for f, t in queries:
        my_string = my_string[:f] + my_string[f:t+1][::-1] + my_string[t+1:]
    return my_string