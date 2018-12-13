// p243
// 字符串中第一个只出现一次的字符

function FirstNotRepeatingChar(str)
{
    if (!str) return -1;
    const map = {};
    for(let i = 0; i < str.length; i++) {
        if (!map[str[i]]) { map[str[i]] = 1; }
        else { map[str[i]]++; }
    }
    let count = -1;
    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] == 1) {
            count = i;
            break;
        }
    }
    return count;
}

module.exports = {
    FirstNotRepeatingChar : FirstNotRepeatingChar
};