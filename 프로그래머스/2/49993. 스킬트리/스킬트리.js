function solution(skill, skill_trees) {
    // skill_trees는 skill 순서를 따라야함.
    let result = 0;
    
    for (let skill_tree of skill_trees) {
        // 올바른 스킬트리인지 체크
        const isOkArr = skill_tree.split("").filter(el => skill.includes(el));
        isOkArr.join('') === skill.slice(0, isOkArr.length) ? result++ : null;
    }
    
    return result;
}