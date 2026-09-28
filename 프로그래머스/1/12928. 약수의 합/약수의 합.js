function solution(n) {
    if (n === 0) return 0;
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result.push(i);
        }
    }
    return result.reduce((x,y) => x+y);
}