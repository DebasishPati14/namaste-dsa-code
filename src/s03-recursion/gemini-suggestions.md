## 1. Reverse String [LeetCode #344] [Easy]
## 1. Reverse String [LeetCode #344] [Easy]

### 📝 Problem
Write a function that reverses a string. The input string is given as an array of characters `s`.

*Constraint: You must do this by modifying the input array in-place with O(1) extra memory. For this specific practice, try to implement the reversal using recursion!*

### 📥 Input / Output

**Example 1**
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

**Example 2**
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

---

## 2. Binary Search [LeetCode #704] [Easy]

### 📝 Problem
Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

*Constraint: You must write an algorithm with O(log n) runtime complexity. For this specific practice, try implementing the search recursively!*

### 📥 Input / Output

**Example 1**
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
*(Explanation: 9 exists in nums and its index is 4)*

**Example 2**
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
*(Explanation: 2 does not exist in nums so return -1)*

## 3. Climbing Stairs [LeetCode #70] [Easy]

### 📝 Problem
You are climbing a staircase. It takes `n` steps to reach the top.
Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

### 📥 Input / Output

**Example 1**
Input: n = 2
Output: 2
*(Explanation: There are two ways to climb to the top.*
*1. 1 step + 1 step*
*2. 2 steps)*

**Example 2**
Input: n = 3
Output: 3
*(Explanation: There are three ways to climb to the top.*
*1. 1 step + 1 step + 1 step*
*2. 1 step + 2 steps*
*3. 2 steps + 1 step)*

---

## 4. Pow(x, n) [LeetCode #50] [Medium]

### 📝 Problem
Implement `pow(x, n)`, which calculates `x` raised to the power `n` (i.e., `x^n`).

### 📥 Input / Output

**Example 1**
Input: x = 2.00000, n = 10
Output: 1024.00000

**Example 2**
Input: x = 2.10000, n = 3
Output: 9.26100

**Example 3**
Input: x = 2.00000, n = -2
Output: 0.25000
*(Explanation: 2^-2 = 1/2^2 = 1/4 = 0.25)*

---

## 5. K-th Symbol in Grammar [LeetCode #779] [Medium]

### 📝 Problem
We build a table of `n` rows (1-indexed). We start by writing `0` in the `1st` row. Now in every subsequent row, we look at the previous row and replace each occurrence of `0` with `01`, and each occurrence of `1` with `10`.

For example, for `n = 3`, the 1st row is `0`, the 2nd row is `01`, and the 3rd row is `0110`.
Given two integer `n` and `k`, return the `kth` (1-indexed) symbol in the `nth` row of a table of `n` rows.

### 📥 Input / Output

**Example 1**
Input: n = 1, k = 1
Output: 0
*(Explanation: row 1: 0)*

**Example 2**
Input: n = 2, k = 1
Output: 0
*(Explanation:* *row 1: 0*
*row 2: 01)*

**Example 3**
Input: n = 2, k = 2
Output: 1
*(Explanation:* *row 1: 0*
*row 2: 01)*
