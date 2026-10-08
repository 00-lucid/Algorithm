def solution(my_string, is_suffix):
    return int(my_string[len(my_string) - len(is_suffix):] == is_suffix)