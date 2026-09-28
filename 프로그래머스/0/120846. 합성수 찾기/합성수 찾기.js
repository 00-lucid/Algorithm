function solution(n) {
    let target = n;
    let cnt = 0;
    
    if (n < 4) {
        return 0;
    }
    
    while (target > 0) {
        const result = n % target;
        
        if (result === 0) {
            cnt++;
        }
        
        if (cnt >= 3) {
            cnt = 1;
            break;
        }
        
        target--;
    }
    
    if (cnt === 1) {
        return cnt + solution(n-1);   
    } else {
        return solution(n-1);   
    }
}