function solution(s) {
    if (s.length % 2 !== 0){ // 홀수
        return s[Math.floor(s.length/2)];
    }
    else { // 짝수
        return s[s.length/2 - 1] + s[s.length/2];
    }
}