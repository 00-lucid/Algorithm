def solution(n):
    return sum(filter(lambda y: y <= n and y % 2 != 0, range(1, n+1))) if n % 2 != 0 else sum([r**2 for r in filter(lambda x: x <= n and x % 2 == 0, range(1, n+1))])