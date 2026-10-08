def solution(arr, query):
    start, end = 0, len(arr)-1
    for i in range(len(query)):
        if i % 2 == 0:
            end = start + query[i]
        else:
            start = start + query[i]
    return arr[start:end + 1]