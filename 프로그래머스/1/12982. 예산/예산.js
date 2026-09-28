function solution(d, budget) {
    let count = 0;
    // 최대한 많이 지원해줘야 하기 때문에 적은 돈을 요청한 부서 순으로 지원..
    d = d.sort((x,y) => x-y);
    for (let i = 0; i < d.length; i++) {
        // budget을 초과했다면,
        if (budget < d[i]) {
            // for문을 중단시키고 count를 return.
            break;
        }
        // budget을 초과안했다면,
        if (budget >= d[i]) {
            // for문을 진행시키고 count를 +1.
            budget -= d[i];
            count += 1;
        }
    }
    return count;
}