function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    // sizes에 들어온 명함들을 수납할 지갑의 최소 크기를 구하시오
    for (const card of sizes) {
        let curW = card[0];
        let curH = card[1];
        if (curW < curH) {
            let box = curW;
            curW = curH;
            curH = box;
        }
        if (curW > maxW) maxW = curW;
        if (curH > maxH) maxH = curH;   
    }
    return maxW * maxH;
}