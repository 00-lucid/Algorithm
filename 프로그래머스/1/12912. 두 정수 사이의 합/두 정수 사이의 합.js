function solution(a, b) {
    var answer = 0;
    if (a > b) {
        let c = a
        a = b
        b = c
    }
    
    while(a <= b) {
        answer += a
        a++;
    }
    
    return answer;
}