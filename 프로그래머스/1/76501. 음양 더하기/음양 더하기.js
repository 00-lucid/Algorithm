function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, idx) => {
        if (signs[idx]) {
            return acc + cur    
        }
        
        return acc - cur
    }, 0)
}