def solution(my_string, indices):
    indices_set = set(indices)
    return ''.join([c for i, c in enumerate(my_string) if i not in indices_set])