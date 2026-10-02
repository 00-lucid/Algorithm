def solution(l, r):
    answer = []
    s1 = {
        '0',
        '5'
    }
    for n in range(l, r + 1):
        s2 = set(str(n))
        if s1 >= s2:
            answer.append(n)
    return [-1] if len(answer) == 0 else answer