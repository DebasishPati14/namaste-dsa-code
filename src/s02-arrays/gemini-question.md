# 📘 Array Practice Set (Blind Mode)

## 1. Contains Duplicate [LeetCode #217] [Easy]

### 📝 Problem

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

### 📥 Input / Output

**Example 1**
Input: nums = [1,2,3,1]  
Output: true

**Example 2**
Input: nums = [1,2,3,4]  
Output: false

---

## 2. Intersection of Two Arrays II [LeetCode #350] [Easy]

### 📝 Problem

Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays, and you may return the result in any order.

### 📥 Input / Output

**Example 1**
Input: nums1 = [1,2,2,1], nums2 = [2,2]  
Output: [2,2]

**Example 2**
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]  
Output: [4,9]

---

## 3. Maximum Subarray [LeetCode #53] [Medium]

### 📝 Problem

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum, and return its sum.

### 📥 Input / Output

**Example 1**
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]  
Output: 6  
_(Explanation: [4,-1,2,1] has the largest sum = 6)_

**Example 2**
Input: nums = [5,4,-1,7,8]  
Output: 23

---

## 4. Sort Colors [LeetCode #75] [Medium]

### 📝 Problem

Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

_Constraint: You must solve this problem without using the library's sort function._

### 📥 Input / Output

**Example 1**
Input: nums = [2,0,2,1,1,0]  
Output: [0,0,1,1,2,2]

**Example 2**
Input: nums = [2,0,1]  
Output: [0,1,2]

---

## 5. Product of Array Except Self [LeetCode #238] [Medium]

### 📝 Problem

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

_Constraint: You must write an algorithm that runs in O(n) time and without using the division operation._

### 📥 Input / Output

**Example 1**
Input: nums = [1,2,3,4]  
Output: [24,12,8,6]

**Example 2**
Input: nums = [-1,1,0,-3,3]  
Output: [0,0,9,0,0]

---

## 6. Find All Numbers Disappeared in an Array [LeetCode #448] [Easy]

### 📝 Problem

Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return an array of all the integers in the range `[1, n]` that do not appear in `nums`.

### 📥 Input / Output

**Example 1**
Input: nums = [4,3,2,7,8,2,3,1]  
Output: [5,6]

**Example 2**
Input: nums = [1,1]  
Output: [2]

---

## 7. Minimum Size Subarray Sum [LeetCode #209] [Medium]

### 📝 Problem

Given an array of positive integers `nums` and a positive integer `target`, return the minimal length of a contiguous subarray whose sum is greater than or equal to `target`. If there is no such subarray, return `0` instead.

### 📥 Input / Output

**Example 1**
Input: target = 7, nums = [2,3,1,2,4,3]  
Output: 2  
_(Explanation: The subarray [4,3] has the minimal length under the problem constraint.)_

**Example 2**
Input: target = 11, nums = [1,1,1,1,1,1,1,1]  
Output: 0

---

## 8. Third Maximum Number [LeetCode #414] [Easy]

### 📝 Problem

Given an integer array `nums`, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

### 📥 Input / Output

**Example 1**
Input: nums = [3,2,1]  
Output: 1

**Example 2**
Input: nums = [1,2]  
Output: 2

**Example 3**
Input: nums = [2,2,3,1]  
Output: 1  
_(Explanation: The distinct maximums are 3, 2, and 1. The third distinct maximum is 1.)_

---

## 9. Container With Most Water [LeetCode #11] [Medium]

### 📝 Problem

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`. Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

### 📥 Input / Output

**Example 1**
Input: height = [1,8,6,2,5,4,8,3,7]  
Output: 49

**Example 2**
Input: height = [1,1]  
Output: 1

---

## 10. Running Sum of 1d Array [LeetCode #1480] [Easy]

### 📝 Problem

Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i])`. Return the running sum of `nums`.

### 📥 Input / Output

**Example 1**
Input: nums = [1,2,3,4]  
Output: [1,3,6,10]

**Example 2**
Input: nums = [1,1,1,1,1]  
Output: [1,2,3,4,5]
