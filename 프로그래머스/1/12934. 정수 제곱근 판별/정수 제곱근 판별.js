function solution(n) {
    return Math.floor(Math.pow(n, 0.5)) === Math.pow(n, 0.5) ? Math.pow(Math.pow(n, 0.5) + 1, 2) : -1;
}