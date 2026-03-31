# 📘 Array Practice Set (Next Level)

These problems build on:
- Two pointers
- Array traversal
- Basic greedy
- Intro to prefix sum

---

## 1. Two Sum II (Sorted Array)

**Concept:** Two Pointers

### 📝 Problem
Given a **sorted array** of integers and a target, return the **1-based indices** of the two numbers such that they add up to the target.

Assume exactly one solution exists.

### 📥 Input / Output

**Example 1**
Input: numbers = [2,7,11,15], target = 9  
Output: [1,2]

**Example 2**
Input: numbers = [1,2,3,4,6], target = 6  
Output: [2,4]

---

## 2. Squares of a Sorted Array

**Concept:** Two Pointers

### 📝 Problem
Given a sorted array, return a new array of the squares of each number, also sorted.

### 📥 Input / Output

**Example 1**  
Input: nums = [-4,-1,0,3,10]  
Output: [0,1,9,16,100]

**Example 2**  
Input: nums = [-7,-3,2,3,11]  
Output: [4,9,9,49,121]

---

## 3. Find Pivot Index

**Concept:** Prefix Sum

### 📝 Problem
Find the index where the sum of elements on the left equals the sum on the right.  
Return -1 if no such index exists.

### 📥 Input / Output

**Example 1**  
Input: nums = [1,7,3,6,5,6]  
Output: 3

**Example 2**  
Input: nums = [1,2,3]  
Output: -1

---

## 4. Majority Element

**Concept:** Counting / Boyer-Moore

### 📝 Problem
Find the element that appears more than ⌊n/2⌋ times.

### 📥 Input / Output

**Example 1**  
Input: nums = [3,2,3]  
Output: 3

**Example 2**  
Input: nums = [2,2,1,1,1,2,2]  
Output: 2

---

## 5. Rotate Array

**Concept:** Array Manipulation / Reversal

### 📝 Problem
Rotate the array to the right by `k` steps.

### 📥 Input / Output

**Example 1**  
Input: nums = [1,2,3,4,5,6,7], k = 3  
Output: [5,6,7,1,2,3,4]

**Example 2**  
Input: nums = [-1,-100,3,99], k = 2  
Output: [3,99,-1,-100]

---

## ⭐ Bonus: Subarray Sum Equals K

**Concept:** Prefix Sum + HashMap

### 📝 Problem
Find the total number of subarrays whose sum equals `k`.

### 📥 Input / Output

**Example 1**  
Input: nums = [1,1,1], k = 2  
Output: 2

**Example 2**  
Input: nums = [1,2,3], k = 3  
Output: 2

---

# 🚀 Tips
- Try solving without looking at solutions
- Focus on pattern recognition
- Write optimal solutions (O(n) where possible)

Happy Coding 💻🔥
