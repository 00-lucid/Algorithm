function solution(x) {
    // harshad process
    let plus = String(x).split('').reduce((x,y) => x*1 + y*1);
    return x % plus === 0 ? true : false;
}