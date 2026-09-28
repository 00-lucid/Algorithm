function isPrime(num) {
    if (num < 2) return false;
    
    for(let i = 2; i * i <= num; i++){
        if(num % i == 0) return false;            
    }
    
    return true;
}

function solution(nums) {
    var cnt = 0;
    // 3개의 수를 더했을 때 나올 수 있는 모든 경우의 수 배열에서 소수만을 필터링해 리턴
    // 경우의 수 산출
    for (let i = 0; i < nums.length; i++) {
        // 1 -> 2 -> 3 
        if (!nums[i]) break;
        for (let k = (i + 1); k < nums.length; k++) {
            // 1, 2 -> 2, 3 -> 3, 4
            if (!nums[k]) break;
            for (let n = (k + 1); n < nums.length; n++) {
                // 1, 2, 3 -> 1, 2, 4
                if (!nums[n]) break;
                const result = nums[i] + nums[k] + nums[n];
                
                if (isPrime(result)) cnt++;
            }
        }
    }
    
    // 소수 필터링
    // return answer.filter(num => isPrime(num)).length;
    return cnt;
}