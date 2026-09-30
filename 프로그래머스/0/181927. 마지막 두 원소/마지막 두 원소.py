def solution(num_list):
    idx = len(num_list) - 1
    last = num_list[idx]
    before = num_list[idx - 1]
    num_list.append(last - before) if last > before else num_list.append(last*2)
    return num_list