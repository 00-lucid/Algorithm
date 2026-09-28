function solution(arr, divisor) {
    let result = arr.filter(el => el % divisor === 0).sort((x,y) => x-y);
    return result.length === 0 ? [-1] : result
}