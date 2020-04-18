//sorting is a process of rearranging the item of collections so that items are in some order
//1) bubble sort
//largest values bubble up to the top
//complexity worst case O(n2), best case O(n)

//pseudocode
/*
    start looping i.e. i from end to beginning
        start looping i.e. j from from beginning until i-i
            if arr[j] is greater than arr[j+1], swap em
    return the sorted array

*/
//code
bubbleSort = (arr) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};
bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

//2) selection sort
//smallest values are placed to the sorted position
//complexity is O(n2)

//pseudocode
/*
    loop through the array
        store the first element as the smallest value you have seen so far.
        compare it with next element in the array until you find a smallest number
            if smaller number is found, designate the smallest number to be the new "minimum" and continue until end of array
        if the "minimum" is not the value(index) you initially begin with swap the two values
    return the sorted array
    
*/
//code
selectionSort = (arr) => {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
};

selectionSort([0, 2, 34, 22, 10, 19, 17]);

//3) insertion sort
//Builds up the sort by gradually creating a larger left half which is always sorted
//complexity is O(n2)

//pseudocode
/*
    Start by picking the second element in the array
    Now compare the second element with the one before it and swap if necessary.
    Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
    Repeat until the array is sorted.
*/
//code
insertionSort = (arr) => {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

insertionSort([2, 1, 9, 76, 4]);

//about above sorting algorithms
/*
    Bubble sort, selection sort, and insertion sort are all roughly equivalent
    All have average time complexities that are quadratic
    We can do better...but we need more complex algorithms!
*/

//above sorting algorithms are well for small data, upto 10000 maybe
/*
    There is a family of sorting algorithms that can improve time complexity from O(n  ) to O(n log n)
    There's a tradeoff between efficiency and simplicity
    The more efficient algorithms are much less simple, and generally take longer to understand
*/

//4) merge sort
/*
    It's a combination of two things - merging and sorting!
    Exploits the fact that arrays of 0 or 1 element are always sorted
    Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
*/

//4.a) merging arrays

/*
    In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
    Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
    This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it
 */

//merging arrays psuedocode

/*
    Create an empty array, take a look at the smallest values in each input array
    While there are still values we haven't looked at...
        If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
        If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
        Once we exhaust one array, push in all remaining values from the other array
 */
//code
// Merges two already sorted arrays
merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
};
merge([100, 200], [1, 2, 3, 5, 6]);

//merge sort psuedocode
/*
    Break up the array into halves until you have arrays that are empty or have one element
    Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
    Once the array has been merged back together, return the merged (and sorted!) array
*/
//code
// Recrusive Merge Sort
mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

mergeSort([10, 24, 76, 73]);
//time complexity of merge sort O(nlog(n)) in all cases

// 5) quick sort
/*
    Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
    Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
    Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot
*/

// 5.a) pivot helper
/*
    In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
    Given an array, this helper function should designate an element as the pivot
    It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
    The order of elements on either side of the pivot doesn't matter!
    The helper should do this in place, that is, it should not create a new array
    When complete, the helper should return the index of the pivot
 */
// 5.b) picking a pivot
/*
    The runtime of quick sort depends in part on how one selects the pivot
    Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
    For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences of this later)
 */

// pseudocode pivot
/*
    It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
    Grab the pivot from the start of the array 
    Store the current pivot index in a variable (this will keep track of where the pivot should end up)
    Loop through the array from the start until the end
        If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
    Swap the starting element (i.e. the pivot) with the pivot index
    Return the pivot index
*/

//code
pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
};
pivot([4, 8, 2, 1, 5, 7, 6, 3]);

//psuedocode quick sort
/*
    Call the pivot helper on the array
    When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
    Your base case occurs when you consider a subarray with less than 2 elements
*/

//code
quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};
quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);

//below is just a visualization of quick sort
/*
    // [4,6,9,1,2,5,3]
    // [3,2,1,4,6,9,5]
    //        4
    //  3,2,1    6,9,5
    //      3      6
    //  2,1      5  9
    //    2
    //  1
*/

//time complexity, best and average O(nlog(n)) and worst case is O(n2)

//finally we have a better option, radix sort, yeah!
//6) radix sort
/*
    Radix sort is a special sorting algorithm that works on lists of numbers
    It never makes comparisons between elements!
    It exploits the fact that information about the size of a number is encoded in the number of digits(number)
*/

//6.a) radix sort helper

/*
    In order to implement radix sort, it's helpful to build a few helper functions first:
        getDigit(num, place) - returns the digit in num at the given place value
        digitCount(num) - returns the number of digits in num
        mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list
*/
//code
getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};
//psuedocode radix sort
/*
    Define a function that accepts list of numbers
    Figure out how many digits the largest number has
    Loop from k = 0 up to this largest number of digits
    For each iteration of the loop:
        Create buckets for each digit (0 to 9)
        place each number in the corresponding bucket based on its kth digit
    Replace our existing array with values in our buckets, starting with 0 and going up to 9
    return list at the end!
*/
//code

radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

radixSort([23, 345, 5467, 12, 2345, 9852]);

//time complexity O(nk) in all cases, n is length of array and k is number of digits(average)

//some more information about merge, quick and radix sort
/*
    Merge sort and quick sort are standard efficient sorting algorithms
    Quick sort can be slow in the worst case, but is comparable to merge sort on average
    Merge sort takes up more memory because it creates a new array (in-place merge sorts exist, but they are really complex!)
*/

//usefull link
//https://www.bigocheatsheet.com/
