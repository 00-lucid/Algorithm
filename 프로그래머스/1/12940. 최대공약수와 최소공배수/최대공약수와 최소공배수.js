function solution(n, m) { // n = 2, m = 5
    let result = [];
    // 최대공약수
    for (let i = m; 0 < i; i--) {
        if (n % i === 0 && m % i === 0) {
            result.push(i);
            break; // 최대공약수 찾았을 때 for문 종료
        }
    }
    // 최소공배수
    result.push(n * m / result[0]); // 최소공배수는 min * max / 최대공약수 !
    return result
    
}