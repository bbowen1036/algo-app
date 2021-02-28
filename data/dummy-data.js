import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
  new Category('c1', 'Arrays', '#14213d'),
  new Category('c2', 'Strings', '#14213d'),
  new Category('c3', 'Binary Search Trees', '#14213d'),
  new Category('c4', 'Binary Trees', '#14213d'),
  new Category('c5', 'Dynammic Programming', '#14213d'),
  new Category('c6', 'Graphs', '#14213d'),
  new Category('c7', 'Link Lists', '#14213d'),
  new Category('c8', 'Recursion', '#14213d'),
  new Category('c9', 'Searching', '#14213d'),
  new Category('c10', 'Sorting', '#14213d'),
  new Category('c11', 'Famous Algorithms', '#14213d'),
  new Category('c12', 'Project Euler', '#14213d'),

];
// 🟢🟠🔴⚫️
export const MEALS = [
  new Meal(
    "m1",
    ["c1"],
    "Two Number Sum",
    "🟢",
    "O(n)",
    "https://oceanstar-seed.s3-us-west-1.amazonaws.com/Screen+Shot+2021-02-26+at+1.58.58+PM.png",
    "O(n)",
    [
      "Use hash table to store remainder of Target - num",
      "iterate thru numbers array",
      "fill hash where k:v = remainder:idx",
      "if has remainder as key then pair is found",
      "return curridx and remainder idx",
    ],
    [
      "const twoSum = function(nums, target) { \n  let hash = {};\n  for(let i = 0; i < nums.length; i++){\n     let curr = nums[i]\n     let remainder = target - curr\n\n     if(hash[curr] >= 0){\n        return [ hash[curr], i]\n     }  \n     hash[remainder] = i\n  }\n \n  return [];\n};\n        ",
    ],
    true,
    false,
    false,
    false,
    [
      "Given an array of integers nums and an integer \ntarget, return indices of the two numbers such \nthat they add up to target. You may assume that \neach input would have exactly one solution, \nand you may not use the same element twice. \nYou can return the answer in any order.",
    ],
    [
      "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nOutput: Because nums[0] + nums[1] == 9, we return [0,1]",
    ]
  ),

  new Meal(
    "m2",
    ["c1"],
    "Validate Subsequence",
    "🟢",
    "O(1)",
    "https://oceanstar-seed.s3-us-west-1.amazonaws.com/Screen+Shot+2021-02-26+at+1.58.58+PM.png",
    "O(n)",
    [""],
    ["function isValidSubsequence(arr, seq) { \n  let arrIdx = 0;\n  let seqIdx = 0;\n\n  while (arrIdx < arr.length){\n    if (arr[arrIdx] === seq[seqIdx]) {\n      arrIdx++\n      seqIdx++\n    } else {\n      arrIdx++\n    }\n  }\n  return seqIdx === seq.length\n};"],
    true,
    false,
    false,
    false,
    [
      "Given two non-empty arrays of integers, write a \nfunction that determines whether the second array \nis a subsequence of the first one.",
    ],
    [
      "arr = [5, 1, 22, 25, 6, -1, 8, 10]\nsequence = [1, 6, -1, 10] \nexpected_output = true",
    ]
  ),

  new Meal(
    "m3",
    ["c1"],
    "Three Number Sum",
    "🟠",
    "O(n)",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    "O(n^2)",
    [
      "...",
     
    ],
    [
      "function threeNumSum(arr, target) {\n  const sorted = arr.sort((a, b) => a - b);\n  const res = [];\n\n  for (let i = 0; i < sorted.length - 2; i++) {\n    let j = i + 1;\n    let k = sorted.length - 1;\n    while (k > j) {\n      const currentSum = sorted[i] + sorted[j] + sorted[k];\n      if (currentSum < target) {\n        j++;\n      } else if (currentSum > targetSum) {\n        k--;\n      } else {\n        res.push([sorted[i], sorted[j], sorted[k]]);\n        k--;\n        j++;\n      }\n    }\n  }\n  return res;\n}",
     
    ],
    false,
    true,
    false,
    false,
    ["Write a function that takes in a non-empty array \nof distinct integers and an integer representing a \ntarget sum. the function should find all triplets \nin the array that sum up to the target sum and \nreturn a two-dimensional array of the triplets. \nThe numbers should be ordered in ascending order"],
    ["array = [12, 3, 1, 2, -6, 5, -8, 6] \ntargetSum = 0\noutput = [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]"]
  ),

  new Meal(
    "m4",
    ["c1"],
    "Smallest Difference",
    "🟠",
    "O(1)",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    "O(nlog(n) + mlog(m))",
    [
      "...",
      
    ],
    [
      'const smallestdiff = (arr1, arr2) => {\n  arr1.sort((a,b) => a-b);\n  arr2.sort((a,b) => a-b);\n\n  let idx1 = 0;\n  let idx2 = 0;\n  let smallest = Infinity;\n  let current = Infinity;\n  let smallestPair = [];\n\n  while (idx1 < arr1.length && idx2 < arr2.length) {\n    let num1 = arr1[idx1];\n    let num2 = arr2[idx2];\n\n    if (num1 < num2 ) {          \n      current = num2 - num1       \n      idx1++\n    } else if (num1 > num2) {\n      idx2++\n      current = num1 - num2\n    } else {\n      return [ arr1[idx1], arr2[idx2] ]\n    }\n\n    if (current < smallest) {\n      smallest = current;      \n      smallestPair = [ num1, num2 ]\n    }\n  }\n\n  return smallestPair\n};\n'
    ],
    false,
    true,
    false,
    false,
    ["Write a function that takes in two non-empty \narrays of integers, finds the pair of numbers \n(one from each array) whose absolute difference \nis closest to zero, and returns an array containing \nthese two numbers, with the number from the first \narray in the first position."],
    ['arr1 = [-1, 5, 10, 20, 28, 3]\narr2 = [26, 134, 135, 15, 17]\noutput = [28, 26]']
  ),

  new Meal(
    "m5",
    ["c1"],
    "Move Element To End",
    "🟠",
    "O(1)",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    "O(n)",
    [
      'left and right pointer\n if left === target stop and begin searching on right\n   if right pointer === target advance\n   if right pointer !== target\n     swap elements at that position\n' 
    ],
    [
      'const moveToEnd = (array, toMove) => {\n  let l = 0;\n  let r = array.length - 1;\n\n  while (l < r) {\n    if (array[l] === toMove) {\n      if (array[r] === toMove) {\n        r--;\n      } else {\n        [array[l], array[r]] = [array[r], array[l]];\n      }\n    } else {\n      l++;\n    }\n  }\n\n  return array;\n};\n' 
    ],
    false,
    true,
    false,
    false,
    ["You're given an array of integers and an integer. \nWrite a function that moves all the instances of \nthat integer in the array to the end of the array \nand returns the array"],
    ['arr = [2, 1, 2, 2, 2, 3, 4, 2]\ntoMove = 2\noutput = [1, 3, 4, 2, 2, 2, 2, 2]']
  ),

  new Meal(
    "m6",
    ["c1"],
    "Monotonic Array",
    "🟠",
    "O(1)",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    "O(n)",
    [
      "..",
     
    ],
    [
      'const isMonotonic = (array) => {\n  let up = true;\n  let down = true;\n\n  for (let i = 0; i < array.length - 1; i++) {\n    if (array[i] < array[i + 1]) up = false;\n    if (array[i] > array[i + 1]) down = false;\n  }\n  return down || up;\n};'
    ],
    false,
    true,
    false,
    false,
    ["Write a function that takes in an array of \nintegers and returns a boolean representing \nwhether the array is monotonic.\n\nAn array is monotonic if its elements, from L to R, \nare entirely non-increasing or entirely non-\ndecreasing.\n\nNote that both empty and arrays of 1 element are monotonic."],
    ["arr = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]\noutput = true"]
  ),

  new Meal(
    "m7",
    ["c1"],
    "Spiral Traverse",
    "🟠",
    "O(n)",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    "O(n)",
    [
      "...",
    ],
    [
      'function spiralTraverse(arr) {\n  let startRow = 0;\n  let endRow = arr.length - 1;\n  let startCol = 0;\n  let endCol = arr[0].length - 1;\n\n  const result = [];\n  while (startRow <= endRow && startCol <= endCol) {\n    // equal is important because we might end up w just needing to traverse a line (column or row)\n    for (col = startCol; col <= endCol; col++) {\n      result.push(arr[startRow][col]);\n    }\n    for (row = startRow + 1; row <= endRow; row++) {\n      result.push(arr[row][endCol]);\n    }\n    for (col = endCol - 1; col >= startCol; col--) {\n      result.push(arr[endRow][col]);\n    }\n    for (row = endRow - 1; row > startRow; row--) {\n      result.push(arr[row][startCol]);\n    }\n\n    startRow++;\n    startCol++;\n    endRow--;\n    endCol--;\n  }\n\n  return result;\n}' 
    ],
    false,
    true,
    false,
    false,
    ["Write a function that takes in an n x m \n2-dimensional array (that is square shapped n == m) \nand returns a one-dimensional arrat of all the \narrays elements in spiral order (clockwise). "],
    ['array = [\n  [1,  2,  3,  4],\n  [12, 13, 14, 5],\n  [11, 16, 15, 6],\n  [10, 9,  8,  7]\n]\noutput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]']
  ),

  new Meal(
    "m8",
    ["c1"],
    "Longest Peak",
    "🟠",
    "O(1)",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    "O(n)",
    [
      "...",
    ],
    [
      'function longestPeak(arr) {\n  let peaks = []; // find all peaks\n  let longestPeakLength = 0;\n  let i = 1;\n\n  while (i < arr.length - 1) {\n    const isPeak = arr[i] > arr[i - 1] && arr[i] > arr[i + 1];\n    debugger;\n    if (!isPeak) {\n      i++;\n      continue;\n    }\n\n    let leftIdx = i - 2;\n    while (leftIdx >= 0 && arr[leftIdx] < arr[leftIdx + 1]) {\n      leftIdx--;\n    }\n    let rightIdx = i + 2;\n    while (rightIdx < arr.length && arr[rightIdx] < arr[rightIdx - 1]) {\n      rightIdx++;\n    }\n\n    let currPeakLength = rightIdx - leftIdx - 1;\n    longestPeakLength = Math.max(currPeakLength, longestPeakLength);\n    i = rightIdx;\n  }\n  return longestPeakLength;\n}' 
    ],
    false,
    true,
    false,
    false,
    ["Write a function that takes in an array on integers \nand returns the length of the longest peak in the \narray.\n\nA peak is defined as adjacent integers in the array \nthat are strictly increasing until they reach a tip \n(highest val in 'peak'), at which point they become \nstrictly decreasing. At least 3 integers are \nrequired to form a peak."],
    ["arr = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]\noutput = 6 // 0, 10, 6, 5, -1, -3"]
  ),

  new Meal(
    "m9",
    ["c2"],
    "Longest Palindromic Substring",
    "🟠",
    "O(n)",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    "O(n^2)",
    [
      'odd palin = getlongestpalin passing string and pointer\n    reference to prev and next letters : i+1, i-1\neven palin = getlongestpalin, string, i-1, i \n' ,
    ],
    [
      'function longestPalinSub(str) {\n  let currlongest = "";\n\n  for(let i = 0; i < str.length; i++) {\n    let odd = getLongestPalin(str, i-1, i+1);\n    let even = getLongestPalin(str, i-1, i);\n\n    let longest = odd.length > even.length ? odd : even;\n    currlongest = currlongest.length >= longest.length ? currlongest : longest;\n  }\n\n  return currlongest;\n}\n\nfunction getLongestPalin(str, leftIdx, rightIdx) {\n  // takes in string and L/R pointers\n  // moves pointers outwards\n  // returns slice of string that is the longest palin. \n  while (leftIdx >= 0 && rightIdx < str.length) {\n    if(str[leftIdx] !== str[rightIdx]) {\n      break\n    }\n    leftIdx--;\n    rightIdx++;\n  }\n\n  return str.slice(leftIdx +1 , rightIdx)\n};' 
    ],
    false,
    true,
    false,
    false,
    ["Write a function that, given a string, returns its \nlongest palindromic substring"],
    ["string = 'abaxyzzyxf'\n output = 'xyzzyx'"]
  ),
  new Meal(
    "m10",
    ["c2"],
    "Valid IP Addresses",
    "🟠",
    "O(1)",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    "O(1)",
    [
      "....",
    ],
    [
      'function validIPAddresses(string) {\n  const ipAddressesFound = [];\n\n  if (string.length < 4) return [];\n\n  for (let i = 1; i < 4; i++) {\n    let currentIpAddressParts = ["", "", "", ""];\n\n    currentIpAddressParts[0] = string.slice(0, i);\n    if (!isValidPart(currentIpAddressParts[0])) continue;\n\n    for (let j = i + 1; j < i + 4; j++) {\n      currentIpAddressParts[1] = string.slice(i, j);\n      if (!isValidPart(currentIpAddressParts[1])) continue;\n\n      for (let k = j + 1; k < j + 4; k++) {\n        currentIpAddressParts[2] = string.slice(j, k);\n        currentIpAddressParts[3] = string.slice(k);\n\n        if (\n          isValidPart(currentIpAddressParts[2]) &&\n          isValidPart(currentIpAddressParts[3])\n        )\n          ipAddressesFound.push(currentIpAddressParts.join("."));\n      }\n    }\n  }\n  return ipAddressesFound;\n}\n\nfunction isValidPart(part) {\n  // takes in section as a string and converts to number\n  // checks validity in range AND for leading 0\'s\n  // checks by converting string to number then checking lengths. When converted number, preceding 0 will be dropped!\n  const partAsInt = Number(part);\n  if (partAsInt > 255) return false;\n\n  return part.length === String(partAsInt).length;\n}\n' 
    ],
    false,
    true,
    false,
    false,
    ["You're given a string of digits of length 12 or \nsmaller. Write a function that returns all of the \npossible IP addressess that can be created by \ninserting 3 '.'s in the string.\n\nAn IP is a seq of four positive integers that are \nseparated by '.'s where each indivdual integer is \nwithin the range 0 - 255, inclusive.\n\nAn IP is not valid if any of the individual integers \ncontains a leading 0. \n'192.168.0.1' is valid; '192.168.00.1' is not."],
    ['string = "1921680" \noutput =  [\n  "1.9.216.80",\n  "1.92.16.80",\n  "1.92.168.0",\n  "19.2.16.80",\n  "19.2.168.0",\n  "19.21.6.80",\n  "19.21.68.0",\n  "19.216.8.0",\n  "192.1.6.80",\n  "192.1.68.0",\n  "192.16.8.0",\n];' ]
  ),
  new Meal(
    "m11",
    ["c5"],
    "Can Sum",
    "🟢",
    "O(n)",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    "O(n)",
    [
      "....",
    ],
    [
      'function canSum(targetNum, array, memo = {}) {\n  if (targetNum in memo) return memo[targetNum];\n  if (targetNum === 0) return true;\n  if (targetNum < 0) return false;\n\n  for (let num of array) {\n    let remainder = targetNum - num;\n    if (canSum(remainder, array, memo) === true) {\n      memo[targetNum] = true;\n      return true;\n    }\n  }\n  memo[targetNum] = false;\n  return memo[targetNum];\n}' 
    ],
    true,
    false,
    false,
    false,
    [""],
    ['' ]
  ),
  new Meal(
    "m12",
    ["c7"],
    "Doubly Linked List",
    "🟠",
    "*see notes",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    "*see notes",
    [
      "....",
    ],
    [
      ""
    ],
    false,
    true,
    false,
    false,
    [""],
    ['' ]
  ),
  new Meal(
    "m13",
    ["c9"],
    "Binary Search",
    "🟢",
    "O(1)",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    "O(log(n))",
    [
      '- Data must be sorted \n- finds idx by comparing middle element to target\n- if target < midElement -> search Left half\n- if target > midElement -> search Right half\n- use pointers to maintain true idx reference to array when making recursive calls\n- base case = when left overtakes right pointer' 
    ],
    [
      'function bSearch(arr, target) {\n  return bSearchHelper(arr, target, 0, arr.length - 1);\n}\n\nfunction bSearchHelper(arr, target, left, right) {\n  if (left > right) return -1;\n  const midIdx = Math.floor((left + right) / 2);\n  const potentialMatch = arr[midIdx];\n\n  if (target === potentialMatch) {\n    return midIdx;\n  } else if (target < potentialMatch) {\n    return bSearchHelper(arr, target, left, midIdx - 1);\n  } else {\n    return bSearchHelper(arr, target, midIdx + 1, right);\n  }\n}'
    ],
    true,
    false,
    false,
    false,
    ["Write a function that takes in a sorted array of \nintegers as well as a target integer. The function \nshould use the Binary Search Algorithm to determine \nif the target integer is contained in the array \nand should return its index if it is, otherwise -1."],
    ["array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]\ntarget = 33 \noutput = 3" ]
  ),
  new Meal(
    "m14",
    ["c5"],
    "Max Sum Subset No Adjacent",
    "🟠",
    "O(1)",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    "O(n)",
    [
      '- tabulated approach where maxSums = the maximum potential sum at every index (given the constraints)\n- second = arr[0] .... first = max(arr[0], arr[1])\n- currMax = max between: 1) first or 2) second + arr[i]\n- return the last value of maxSums as it is guaranteed to be the max possible value\n' 
    ],
    [
      'function maxSubsetSumNonAdjacent(arr) {\n  if (arr.length === 0) return 0;\n  if (arr.length === 1) return arr[0];\n\n  let second = arr[0];\n  let first = Math.max(arr[1], arr[0]);\n\n  for (let i = 2; i < arr.length; i++) {\n    const currMax = Math.max(first, second + arr[i]);\n    second = first;\n    first = currMax;\n  }\n\n  return first\n};' 
    ],
    false,
    true,
    false,
    false,
    ["Write a function that takes in an array of positive \nintegers and returns the maximum sum of non-adjacent \nelements in the array."],
    ["array = [75, 105, 120, 75, 90, 135]\noutput = 330 // 75 + 120 + 135" ]
  ),
]