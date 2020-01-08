// Given an array of numbers sorted in ascending order (least to greatest), and a separate number (a "sum"), determine if any 2 numbers in the array add up to the sum. Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum.

// Return true or false based on whether any 2 different numbers in the array add up to sum.//


function pairSum(arr, target){
  if(arr.length < 2){
    return false
  }

  let left = 0
  let right = arr.length -1

  while(left < right){
    let currSum = arr[left] + arr[right]

    if(currSum === target){
      return true
    }
    if(currSum < target){
      left ++
    }
    if(currSum > target){
      right --
    }
  }
  return false
}

module.exports = pairSum;
