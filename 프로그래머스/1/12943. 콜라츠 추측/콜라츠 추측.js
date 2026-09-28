function solution(num) {
    let count = 0;
    
    // collatz process
    while (num !== 1) {
        if (count === 500) {
            return -1;
        }
        if (num % 2 === 0) {
            num = num / 2;
            count++;
        }
        else if (num % 2 !== 0) {
            num = num*3 + 1;
            count++;
        }
    }
    
    return count;
}