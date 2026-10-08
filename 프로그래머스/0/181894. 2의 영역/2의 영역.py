def solution(arr):
    if 2 not in arr:
        return [-1]
    start_idx = arr.index(2)
    end_idx = 0
    for i, n in enumerate(arr):
        if n == 2:
            end_idx = i
    return arr[start_idx:end_idx+1]