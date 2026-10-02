def solution(arr, queries):
    answer = []
    for s, e, k in queries:
        tmp = -1
        for i in range(s, e + 1):
            if (k < arr[i]):
                if (tmp == -1):
                    tmp = arr[i]
                else:
                    if (tmp > arr[i]):
                        tmp = arr[i]
        answer.append(tmp)
    return answer
        