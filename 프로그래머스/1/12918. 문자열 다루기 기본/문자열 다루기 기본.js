function solution(s) {
    let d = s.split('').filter(el => isNaN(el)).join('');
    if (s.length === 4 && d.length === 0 || s.length === 6 && d.length === 0) {
        return true;
    }
    return false;
}