function solution(new_id) {
    const regex2 = /[^\w\-\._]/gi;
    const regex3 = /\.{2,}/gi;
    const regex4 = /^\.|\.$/gi;
    const regex6_2 = /\.$/gi
    new_id = new_id.toLowerCase()
        .replace(regex2, "")
        .replace(regex3, ".")
        .replace(regex4, "")
        .replace(/^$/, "a")
        .slice(0, 15).replace(regex6_2, "");
    new_id += new_id.length < 3 ? new_id[new_id.length - 1].repeat(3 - new_id.length) : "";
    
    return new_id;

}