function solution(w, h) {
    // 제거할 블럭 개수 구하는 코드
    // w + h - (w and h 최대 공약수)
    let min = Math.min(w, h);
    let max = Math.max(w, h);
    let i = min;
    while(i <= min) {
        // i가 min의 약수이고, max의 약수이면 while 종료.
        if (min % i === 0 && max % i === 0) {
            break;
        }
        i -= 1;
    }
    return w * h - (w + h - i);
}