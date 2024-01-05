function lengthOfLongestSubstring(str, num) {
    let arr = str.split('').sort()
    let max = 0,maxChar = '';
    str.split('').forEach(function (char) {
        if (str.split(char).length > max) {
            max = str.split(char).length;
            maxChar = char;
        }
    });
    return maxChar;

}
console.log(lengthOfLongestSubstring('ABAB', 2));