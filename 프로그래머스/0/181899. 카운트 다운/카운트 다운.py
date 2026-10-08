def solution(start_num, end_num):
    return list(range(start_num+1))[:end_num-start_num-2:-1]