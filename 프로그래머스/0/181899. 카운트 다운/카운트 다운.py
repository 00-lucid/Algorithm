def solution(start_num, end_num):
    return [start_num-i for i, n in enumerate(range(start_num-end_num+1))]