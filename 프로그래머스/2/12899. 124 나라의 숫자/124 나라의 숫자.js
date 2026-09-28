function solution(n) {
    var answer = '';
    const arr = ['4', '1', '2'];
    while(n > 0) {
        let remainer = n % 3;
        answer = arr[remainer] + answer;
        if (remainer === 0) {
            n = Math.floor((n - 1) / 3);
        } else {
            n = Math.floor(n / 3);
        }
    }
    
    return answer;
}