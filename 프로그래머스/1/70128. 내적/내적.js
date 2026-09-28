function solution(a, b) {
    return a.map((el,idx) => el*b[idx]).reduce((x,y) => x+y);
}