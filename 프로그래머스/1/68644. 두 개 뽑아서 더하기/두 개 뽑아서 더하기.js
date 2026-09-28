function solution(numbers) {
    let result = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let o = 0; o < numbers.length; o++) {
            if (result.indexOf(numbers[i] + numbers[o]) === -1) {
                if (i !== o ) {
                    result.push(numbers[i] + numbers[o]);
                }
            }
        }
    }
    
    return result.sort((x, y) => x-y);
}