import string

def solution(my_string):
    result = [0]*52
    temp = string.ascii_uppercase + string.ascii_lowercase
    
    for i, c in enumerate(my_string):
        t = temp.find(c)
        result[t] += 1
    
    return result