function solution(n)
{
    
    return String(n).length === 1 ? n : String(n).split('').reduce((el1,el2) => {return Number(el1) + Number(el2)});
}