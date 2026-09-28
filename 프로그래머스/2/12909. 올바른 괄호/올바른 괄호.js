function solution(s){
    // 배열을 이용해서 push, pop 할 경우 효율성이 떨어짐
    let stack = 0
    
    for (let i = 0; i < s.length; i++) {
        const sUnit = s[i]
        
        if (sUnit === "(") {
            // 열림
            if (s[i + 1]) {
                stack++
            } else {
                return false
            }
        } else {
            // 닫힘
            if (stack > 0) {
                stack--
            } else {
                return false
            }
        }
    }
    
    return stack !== 0 ? false : true
}