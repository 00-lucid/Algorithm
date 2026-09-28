function solution(nums) {    
    // nums 에서 최대한 다양한 종류의 포켓몬을 nums.length / 2 개수만큼 가져오는 알고리즘
    // 2 <= answer <= nums.length / 2
    
    const newSet = new Set(nums);
    const newArr = [...newSet];

    
    const totalSpecies = newArr.length;
    const maxSpecies = nums.length / 2;
    
    return totalSpecies > maxSpecies ? maxSpecies : totalSpecies;
}