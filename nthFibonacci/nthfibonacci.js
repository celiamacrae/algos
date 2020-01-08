// The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n-1)th and (n-2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number.

function nthFib(n){
  let lastTwo = [0, 1]
  let counter = 2

  while(counter < n){
    let next = lastTwo[0] + lastTwo[1]
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = next
    counter ++
  }

  if(n>1){
    return lastTwo[1]
  }
  return 0
}

module.exports = nthFib;
