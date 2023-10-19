A group of workers gathered to complete a task. Each worker has an efficiency rating. They will be grouped in pairs so an even number of workers are required. The cost of a pair is the absolute difference of the efficiencies assigned to the workers. The cost of the task is the sum of the costs of all pairs formed. There are an odd number of workers to choose from, so one worker will not be paired. Select the worker to exclude so the task's cost is minimized.

Given n workers and efficiency for each worker, find a configuration of the workers such that the cost of the task is the minimum possible. Return the minimum cost as the answer.

Example

efficiency = [4, 2, 8, 1, 9]

Using 1-based indexing, if worker 1 is excluded and the indices of the pairs are (2, 4) and (3, 5), the cost of the task is |2 - 1| + |8 - 9| = 2.

This is the minimum possible cost so return 2.

Returns

int: the minimum possible cost

Input Format

The first line contains an integer n, the size of the array efficiency.

Each of the next n lines contains an integer efficiency[i].

Constraints

3 ≤ n < 10^5
1 ≤ efficiency[i] ≤ 10^9
n is odd
Output Format

int: the minimum possible cost

Sample Input 0

5
4
1
2
16
8
Sample Output 0

5
Explanation 0

Exclude worker 4 and make the pairs (2, 3) and (1, 5). The cost of the task is |1 - 2| + |4 - 8| = 5.

Sample Input 1

7
2
13
12
9
6
3
2
Sample Output 1

4
Explanation 1

Exclude worker 4 and make the pairs (1, 7), (2, 3), and (5, 6). The cost is |2 - 2| + |13 - 12| + |6 - 3| = 4.