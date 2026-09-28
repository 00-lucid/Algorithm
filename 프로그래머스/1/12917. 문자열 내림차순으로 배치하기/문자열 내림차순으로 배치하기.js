function solution(s) {
    return s = s.split('').sort(function (el1,el2) {
        return (el1 < el2) - (el1 > el2);
    }).join('');
}