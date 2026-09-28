function solution(brown, yellow) {
    var answer = [];
    const ans =  [0, 0]
    
    // 완전탐색
    const area = brown + yellow
    let width = area - 2
    
    while (width > 0) {
        const height = area / width
        const y = (width - 2) * (height - 2); // 노란 카펫의 면적
        const b = area - y; // 갈색 카펫의 면적
        
        if (y == yellow && b == brown) {
            ans[0] = width;
            ans[1] = height;
            break;
        }
        
        width--;
    }
    
    return ans;
}