from collections import Counter
def solution(a, b, c, d):
    counts = Counter([a, b, c, d]).most_common()
    
    if counts[0][1] == 4:
        p = counts[0][0]
        return 1111 * p
    elif counts[0][1] == 3:
        p = counts[0][0]
        q = counts[1][0]
        return (10 * p + q)**2
    elif counts[0][1] == 2 and counts[1][1] == 2:
        p = counts[0][0]
        q = counts[1][0]
        return (p + q) * abs(p - q)
    elif counts[0][1] == 2:
        q = counts[1][0]
        r = counts[2][0]
        return q * r
    else:
        return min(a, b, c, d)