function solution(n) {
    return String(n).split('').map(el => Number(el)).sort((x, y) => y - x).join('')*1;
}