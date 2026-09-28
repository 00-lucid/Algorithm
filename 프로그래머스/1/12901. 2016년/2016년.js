function solution(a, b) {
    let result = '';
    let strDay = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    let intervalDay = 0;
    let End30 = [4, 6, 9, 11];
    let End29 = [2];
    let End31 = [1, 3, 5, 7, 8, 10, 12];
    
    let x = End29.filter(el => el < a).length;
    let y = End30.filter(el => el < a).length;
    let z = End31.filter(el => el < a).length;
    if (a === 1){
        intervalDay = 29*x + 30*y + 31*z + b - 1
    }
    else {
        intervalDay = 29*x + 30*y + 31*z + b - 1
    }
    
    result = strDay[intervalDay % 7];
    return result;
}