// You are given an array of integers and a target integer. Write a function that moves all instances of the target integer in the array to the end of the array. The order of the non-target integers in the array should be maintained.

function moveElementToEnd(array, target){
  let last = 0

  for(let i=0; i<array.length; i++){
    if(array[i] !== target){
      array[last] = array[i]
      last ++
    }
  }
  for(let j=last; j<array.length; j++){
    array[j] = target
  }
  return array

}

module.exports = moveElementToEnd;
