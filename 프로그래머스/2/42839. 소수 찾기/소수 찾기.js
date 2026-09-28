// 순열 경우의 수를 구하는 함수
function permutation(arr, n) {
    let result = [];
    // 종료조건
    if (n === 1) return arr;
    for (let i = 0; i < arr.length; i++) {
        // 0
        const cur = arr[i];
        // [1, 1]
        const newArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const temp = permutation(newArr, n - 1);
        const output = temp.map(el => [cur, ...el])
        result.push(...output);
    }
    return result;
}


// 소수인지 판별하는 함수
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i*i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 배열 중복 제거 함수
function deduplication(arr) {
    return [...new Set(arr)];
}

function solution(numbers) {
    let cnt = 0;
    let permutations = [];
    numbers = numbers.split('');
    for (let i = 1; i <= numbers.length; i++) {
        permutations = permutations.concat(permutation(numbers, i));
    }
    permutations = permutations.map(el => el.length > 1 ? el.join('')*1 : el*1);
    permutations = deduplication(permutations);
    permutations.forEach(el => isPrime(el) ? cnt++ : null);
    return cnt;
}