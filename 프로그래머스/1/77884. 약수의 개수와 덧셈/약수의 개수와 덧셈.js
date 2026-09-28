function getDivisorCount(num) {
    // num 약수의 개수를 구하는 함수
    let count = 0;
    for (let i = 1; i <= num; i ++) {
        if (!(num % i)) {
            count++;
        }
    }
    return count;
}

function solution(left, right) {
    let sum = 0;
    while(left <= right) {
        let divisorCount = getDivisorCount(left);
        if (divisorCount % 2) {
            sum -= left
        } else {
            sum += left
        }
        left++;
    }
    return sum;
}