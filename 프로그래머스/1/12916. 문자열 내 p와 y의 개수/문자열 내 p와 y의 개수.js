function solution(s){
    s = s.toUpperCase() // 전부 대문자로
    let countP = 0;
    let countY = 0;
    s.split('').map(function(el){
        if (el === 'P') {
            countP += 1;
        }
        else if (el === 'Y') {
            countY += 1;
        }
    })
    return countP === countY;
}