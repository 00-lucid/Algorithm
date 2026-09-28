function solution(strings, n) {
    return strings.sort(
        function(x, y){
            if (x[n] === y[n]) {
                return(x > y) - (x < y); // === sort() 첫번째 문자열 기준
            }
            else {
                return (x[n]>y[n]) - (x[n]<y[n]); // === sort() n번째 문자열 기준
            }
        }
    );
}

// string.sort() 는 곧 return (x > y) - (x < y) 와 같다. 기억하자 대소비교!