const myArray = [1, 2, 8, 6, 8, 10, 44];
// const myArray = [2, 4, 6, 8, 10];

// Q1  What is the length of myArray?

// console.log(myArray.length);

// Q2 How do you access the first element of myArray?
// console.log(myArray[0]);

// Q3 How do you access the last element of myArray?
// console.log(myArray[myArray.length - 1]);

// Q4 How can you add a new element, say 8, to the end of myArray?
// myArray.push(99);
// console.log(myArray);

// Q5 What is the value at index 3 in myArray?
// console.log(myArray[3]);

// Q6 Can you remove an element from myArray? If so, how?
// myArray.pop();
// console.log(myArray);

// Q7 How do you check if myArray contains the number 7?
// console.log(myArray.includes(777)); // false

// Q8 What is the index of the number 4 in myArray?
// console.log(myArray.indexOf(4));

// Q9 How do you check if myArray is empty?
// if (myArray.length === 0) {
//   console.log("myArray is empty");
// } else {
//   console.log("myArray is not empty");
// }

// Q10 How can you clear all elements from myArray?
// const myNewArray = myArray.splice(0, myArray.length);
// console.log(myArray);
// console.log(myNewArray);

// Q 11 How can you create a copy of myArray?
// const copyOfArray = [...myArray];
// console.log(copyOfArray);

// Q12 How do you find the sum of all elements in myArray?
// let sum = 0;
// for (let i = 0; i < myArray.length; i++) {
//   sum += myArray[i];
// }
// console.log(sum);

// Q13 What is the average of the numbers in myArray?
// let sum = 0;
// for (let i = 0; i < myArray.length; i++) {
//   sum += myArray[i];
// }
// let average = sum / myArray.length;
// console.log(average);

// Q14 How can you sort the elements of myArray in ascending order?
// myArray.sort((a, b) => a - b);
// console.log(myArray);

// Q15 How can you sort the elements of myArray in descending order?
// myArray.sort((a, b) => b - a);
// console.log(myArray);

// Q 16 How do you reverse the order of elements in myArray?
// console.log(myArray.reverse);
// console.log(myArray.reverse());
// console.log(myArray.reverse());

// Q17 Can you find the index of the smallest number in myArray?
// const myArray1 = [4, 2, 7, 1, 9, 3, 6, 8, 10, 5];
// let minIndex = 0;
// let minValue = myArray1[0];

// for (let i = 1; i < myArray1.length; i++) {
//   if (myArray1[i] < minValue) {
//     minValue = myArray1[i];
//     minIndex = i;
//   }
// }
// console.log(minIndex);
// console.log(minValue);

// Q18 Can you find the index of the largest number in myArray?
// const myArray1 = [44, 22, 77, 11, 100, 90, 33, 66, 80, 1111, 9955];
// let largestIndex = 0;
// let largestValue = myArray1[0];

// for (let i = 1; i < myArray1.length; i++) {
//   if (myArray1[i] > largestValue) {
//     largestIndex = i;
//     largestValue = myArray1[i];
//   }
// }
// console.log(largestIndex);
// console.log(largestValue);

// Q19 How can you remove the last element from myArray?
// myArray.pop();
// console.log(myArray);

// Q20 How do you add an element at the beginning of myArray?
// myArray.unshift(78787);
// console.log(myArray);

// Q20 How can you check if all elements in myArray are even numbers?
// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] % 2 !== 0) {
//     console.log("Not All Elements Are Not the Even Numbers");
//     break;
//   } else {
//     console.log("Yes All the Elements Are the Even Numbers");
//     break;
//   }
// }

// How can you check if any element in myArray is greater than 10?
// How do you extract a portion of myArray from index 2 to 5?
// How do you concatenate myArray with another array, say [11, 12, 13]?
// How do you find the number of occurrences of 3 in myArray?
// How can you create a new array containing the square of each number in myArray?
// How can you find the product of all elements in myArray?
// How do you check if myArray includes all the numbers from 1 to 10?
// How do you find the second largest number in myArray?
// How can you create a string containing all elements of myArray separated by commas?
// How can you convert each element in myArray to a string?
// How do you find the index of the first occurrence of an odd number in myArray?
// How can you find the index of the last occurrence of 6 in myArray?
// How do you remove duplicate values from myArray?
// How can you find the difference between the largest and smallest numbers in myArray?
// How do you add 8 between 7 and 9 in myArray?
// How can you replace the number 2 with 20 in myArray?
// How do you create a new array that contains only even numbers from myArray?
// How can you find the median value in myArray?
// How do you find the mode (most frequent number) in myArray?
// How can you check if myArray is a palindrome (reads the same forwards and backwards)?
// How do you find the elements that are greater than the average in myArray?
// How can you shuffle (randomly reorder) the elements in myArray?
// How do you find the factors of the number 10 using myArray as a source?
// How can you create a new array with elements in myArray squared if they are even, and cubed if they are odd?
// How do you check if myArray is sorted in ascending order?
// How can you create a new array that contains unique values from myArray in the same order?
// How do you find the index of the first occurrence of a prime number in myArray?
// How can you convert all elements in myArray to hexadecimal strings?
// How do you find the first pair of numbers in myArray that adds up to a specific target, say 13?

// How can you find the second smallest number in myArray?
// Can you find the sum of the odd numbers in myArray?
// How do you find the product of the even numbers in myArray?
// How can you create a new array that contains only prime numbers from myArray?
// How do you find the index of the last occurrence of an even number in myArray?
// Can you reverse the order of elements in myArray without using a loop?
// How can you split myArray into two arrays, one containing odd and the other containing even numbers?
// How do you create a copy of myArray without altering the original array?
// How can you find the maximum difference between adjacent elements in myArray?
// How do you calculate the factorial of the largest number in myArray?
// Can you find the longest consecutive sequence of numbers in myArray?
// How can you find the number of prime numbers in myArray?
// How do you check if myArray is a strictly increasing sequence?
// Can you create a function that rotates the elements of myArray to the right by a given number of positions?
// How can you find the index of the first element greater than 5 in myArray?
// How do you create a new array that contains the cumulative sum of elements in myArray?
// Can you find the difference between the median and the mean of myArray?
// How can you create a new array that contains only unique values from myArray in ascending order?
// How do you find the smallest prime number in myArray?
// Can you create a function that removes all occurrences of a specific value, say 3, from myArray?
// How can you find the sum of the squares of all even numbers in myArray?
// How do you check if myArray is a palindrome when read from both ends?
// Can you find the index of the first occurrence of a number that is a perfect square in myArray?
// How can you create a new array that contains elements in myArray but in random order?
// How do you calculate the Euclidean distance between two numbers in myArray?
// Can you find the index of the smallest number that is greater than 3 in myArray?
// How can you split myArray into multiple subarrays of a fixed size, say subarrays of length 3?
// How do you check if there are any duplicate values in myArray?
// Can you create a function that inserts a new element, say 8, at a specific position, say index 2, in myArray?
// How can you find the longest subarray of consecutive even numbers in myArray?
// How do you check if all numbers in myArray are multiples of 2?
// Can you create a function that calculates the rolling average of myArray for a given window size, say 3?
// How can you find the common elements between myArray and another array, say [5, 6, 7, 8, 9]?
// How do you calculate the harmonic mean of the numbers in myArray?
// Can you create a function that removes the first and last elements from myArray?
// How can you find the smallest even number that is greater than 4 in myArray?
// How do you check if myArray is a strictly decreasing sequence?
// Can you create a function that sorts myArray in a custom order, say odd numbers first and then even numbers?
// How can you find the largest prime number in myArray?
// How do you calculate the geometric mean of the numbers in myArray?
// Can you create a function that inserts a new element, say 8, in sorted order in myArray?
// How can you find the maximum sum of any two distinct numbers in myArray?
// How do you check if there are any consecutive duplicates in myArray?
// Can you create a function that truncates myArray to a given length, say 5?
// How can you find the nearest number to 7 in myArray?
// How do you check if all numbers in myArray are perfect squares?
// Can you create a function that returns the first n elements of myArray, say the first 4 elements?
// How can you find the largest number in myArray that is less than 8?
// How do you calculate the median absolute deviation (MAD) of myArray?
// Can you create a function that returns the last n elements of myArray, say the last 3 elements?

// How can you find the sum of all the numbers in myArray?
// Can you find the product of all the numbers in myArray?
// How do you find the largest number in myArray?
// Can you determine the smallest number in myArray?
// How can you check if a specific number, say 8, exists in myArray?
// How do you find the index of the first occurrence of the number 5 in myArray?
// Can you find the index of the last occurrence of the number 7 in myArray?
// How can you calculate the average of the numbers in myArray?
// How do you check if all the numbers in myArray are even?
// Can you create a new array with only the even numbers from myArray?
// How can you create a new array with only the odd numbers from myArray?
// How do you find the index of the largest even number in myArray?
// Can you determine the number of odd numbers in myArray?
// How can you find the sum of all odd numbers in myArray?
// How do you check if myArray is sorted in ascending order?
// Can you sort myArray in descending order?
// How can you reverse the order of elements in myArray?
// How do you add the numbers in myArray without using a loop?
// Can you remove the first element from myArray?
// How can you add a new element, say 8, at the beginning of myArray?
// How do you remove the last element from myArray?
// Can you insert a new element, say 6.5, between 6 and 7 in myArray?
// How can you find the second largest number in myArray?
// How do you check if myArray contains duplicate numbers?
// Can you remove all duplicate values from myArray?
// How can you create a new array that contains the square of each number in myArray?
// How do you find the largest prime number in myArray?
// Can you calculate the factorial of the smallest number in myArray?
// How can you find the index of the first occurrence of a prime number in myArray?
// How do you check if all numbers in myArray are less than 11?
// Can you create a function to shuffle the elements in myArray randomly?
// How can you concatenate myArray with another array, say [11, 12, 13]?
// How do you find the median of myArray?
// Can you find the mode (most frequent number) in myArray?
// How can you check if myArray is a palindrome (reads the same forwards and backwards)?
// How do you find the common elements between myArray and [7, 8, 9]?
// Can you calculate the Euclidean distance between two numbers in myArray?
// How can you create a new array that contains elements in myArray squared if they are even, and cubed if they are odd?
// How do you find the longest consecutive sequence of numbers in myArray?
// Can you create a new array that contains only unique values from myArray in the same order?
// How can you find the index of the smallest even number in myArray?
// How do you check if all numbers in myArray are multiples of 2?
// Can you create a function to rotate the elements of myArray to the right by a given number of positions, say 2 positions?
// How can you find the number of times 5 appears in myArray?
// How do you calculate the harmonic mean of the numbers in myArray?
// Can you create a new array with elements in myArray sorted in ascending order?
// How can you find the largest number in myArray that is less than 8?
// How do you check if myArray is strictly increasing (each element is greater than the previous one)?
// Can you calculate the variance of the numbers in myArray?
// How can you find the smallest number in myArray that is greater than 2?

// How can you generate all possible subsets of myArray?
// Can you find the largest subarray with a sum less than or equal to 15 in myArray?
// How do you implement a binary search to find if a specific value, say 6, exists in myArray?
// Can you implement a merge sort algorithm to sort myArray in ascending order?
// How can you implement a quicksort algorithm to sort myArray in descending order?
// How do you calculate the 10th Fibonacci number using values from myArray?
// Can you implement a function to generate all permutations of myArray?
// How can you find the shortest subarray in myArray that contains all the numbers from 1 to 10 in any order?
// How do you implement a function to find the longest increasing subsequence in myArray?
// Can you create a function to generate the power set (all possible combinations) of myArray?
// How can you implement a binary search to find the index of the last occurrence of the number 4 in myArray?
// How do you implement the Sieve of Eratosthenes algorithm to find all prime numbers less than or equal to the largest number in myArray?
// Can you create a function to find the number of times myArray can be rotated to become sorted?
// How can you implement a function to find the length of the longest subarray with a sum divisible by 3 in myArray?
// How do you calculate the greatest common divisor (GCD) of all the numbers in myArray?
// Can you implement a function to find the longest subarray with at most two distinct numbers in myArray?
// How can you implement a function to find the maximum sum of a contiguous subarray in myArray?
// How do you implement a function to partition myArray into two subarrays such that the difference between their sums is minimized?
// Can you create a function to find the shortest subarray in myArray that contains all prime numbers from 1 to the largest prime number in myArray?
// How can you implement a function to find the kth largest element in myArray?
// How do you calculate the number of inversions in myArray using a modified merge sort algorithm?
// Can you implement a function to find the longest subarray with an equal number of even and odd elements in myArray?
// How can you create a function to calculate the number of distinct triplets in myArray that sum up to a specific value, say 12?
// How do you implement a function to find the shortest subarray in myArray that contains all numbers from 1 to the largest number in myArray, in any order?
// Can you create a function to calculate the Catalan number using myArray values?
// How can you implement a function to find the length of the longest subarray with consecutive numbers in myArray?
// How do you calculate the determinant of a 3x3 matrix using values from myArray?
// Can you implement a function to find the shortest subarray in myArray such that its product is a perfect square?
// How can you create a function to find the longest subarray with a sum divisible by 7 in myArray?
// How do you implement a function to find the length of the longest subarray with distinct elements in myArray?
// Can you create a function to find the minimum number of jumps required to reach the end of myArray, considering each element as the maximum jump length?
// How can you implement a function to find the number of paths from the first to the last element in myArray by moving right or down, only considering prime numbers as valid moves?
// How do you calculate the sum of all subarrays of myArray efficiently?
// Can you create a function to find the longest subarray in myArray such that the sum of its elements is a prime number?
// How can you implement a function to find the maximum number of elements that can be removed from myArray without changing the order of remaining elements?
// How do you calculate the maximum area under a histogram created using values from myArray?
// Can you implement a function to find the number of valid Sudoku solutions where myArray represents a row or column of the Sudoku grid?
// How can you create a function to find the longest subarray in myArray such that the sum of its elements is a Fibonacci number?
// How do you implement a function to find the length of the longest subarray with an equal number of vowels and consonants using myArray?
// Can you create a function to find the maximum subarray product in myArray without using division?
// How can you implement a function to find the minimum number of multiplications required to parenthesize myArray elements in different ways?
// How do you calculate the number of ways to reach the last element of myArray from the first element by making valid moves based on element values?
// Can you implement a function to find the maximum sum of non-overlapping subarrays of myArray?
// How can you create a function to find the longest subarray in myArray such that the difference between the maximum and minimum elements is less than or equal to 3?
// How do you calculate the minimum number of swaps required to sort myArray?
// Can you implement a function to find the longest subarray in myArray such that it forms an arithmetic progression?
// How can you create a function to find the longest common subsequence between myArray and another array, say [2, 4, 6, 8, 10]?
// How do you calculate the number of unique BSTs (Binary Search Trees) that can be formed using myArray values?
// Can you implement a function to find the maximum subarray sum considering a constraint that no two adjacent elements can be included in the sum?
// How can you create a function to find the length of the longest subarray in myArray such that the sum of any two elements in the subarray is a perfect square?
