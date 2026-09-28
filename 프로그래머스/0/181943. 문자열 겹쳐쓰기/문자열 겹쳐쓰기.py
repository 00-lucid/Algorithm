def solution(my_string, overwrite_string, s):
    arr = [my_string[:s],my_string[s:]]
    return arr[0] + overwrite_string + arr[1][len(overwrite_string):]