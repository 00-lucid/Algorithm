function solution(n) {
    let value = n.toString(3); // n을 3진수로 변환
    return parseInt(value.split('').reverse().join(''), 3);
}