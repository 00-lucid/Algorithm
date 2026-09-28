function solution(lottos, win_nums) {
    // 최고 순위 = x가 모두 참일 때
    // 최저 순위 = x가 모두 거짓일 때
    let sameMax = 0;
    let sameMin = 0;

    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0) {
            sameMax++;
        } else {
            if (win_nums.includes(lottos[i])) {
                sameMax++;
                sameMin++;
            }
        }
    }
    
    return [sameMax > 1 ? 7 - sameMax : 6, sameMin > 1 ? 7 - sameMin : 6];
}