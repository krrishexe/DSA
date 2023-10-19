An anagram is a word whose characters can be rearranged to create another word. Given two strings, determine the minimum number of characters in either string that must be modified to make the two strings anagrams . If it is not possible to make the two strings anagrams, return -1.

Example:

a = ['tea', 'tea', 'act']

b = ['ate', 'toe', 'acts']

a[0] = tea and b[0] = ate are anagrams, so 0 characters need to be modified.
a[1] = tea and b[1] = toe are not anagrams. Modify 1 character in either string (o → a or a → o) to make them anagrams.
a[2] = act and b[2] = acts are not anagrams and cannot be converted to anagrams because they contain different numbers of characters.
The return array is [0, 1, -1]
Return

int[n]:  the minimum number of characters in either string that needs to be modified to make the two strings anagrams pr -1 if it is not possible
Input Format

Input is read from stdin and passed to the function.

The first line contains an integer n, the number of strings in the array a.

The n subsequent lines each contain a string describing a[i ]where 0 ≤ i < n.

The next line contains an integer n, the number of strings in the array b.

The n subsequent lines each contain a string describing b[i] where 0 ≤ i < n.

Constraints

Each string consists of lowercase characters [a-z].
1 ≤ n ≤ 100
0 ≤ |a[i]|, |b[i]| ≤ 10^4
1 ≤ |a[i]| + |b[i]| ≤ 10^4
Output Format

int[n]: the minimum number of characters in either string that needs to be modified to make the two strings anagrams pr -1 if it is not possible

Sample Input 0

5
a
jk
abb
mn
abc
5
bb
kj
bbc
op
def
Sample Output 0

-1
0
1
2
3
Explanation 0

Perform the following n = 5 calculations:

Index 0: a and bb cannot be anagrams because they contain different numbers of characters.
Index 1: jk and kj are already anagrams because they both contain the same characters at the same frequencies.
Index 2: abb and bbc differ by one character.
Index 3: mn and op differ by two characters.
Index 4: abc and def differ by three characters.
After checking each pair of strings, return the array [-1, 0, 1, 2, 3] as the answer.

Sample Input 1

1
ab
1
bc
Sample Output 1

1
Sample Input 2

2
abc
aaa
2
bba
bbb
Sample Output 2

1
3