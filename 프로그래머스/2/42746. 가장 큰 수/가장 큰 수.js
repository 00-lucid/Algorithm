function solution(numbers) {
    let answer = '';
    numbers.sort((pre, cur) => {
        const numA = `${pre}${cur}`*1;
        const numB = `${cur}${pre}`*1;
        
        return numB - numA
    })
    answer = numbers.join('')
    return answer[0] === "0" ? "0" : answer;
}