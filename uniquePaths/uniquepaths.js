// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

function uniquePaths(m,n){
  let board = Array(m).fill([]).map(() => {
    return Array(n).fill(1)
  })

  for(let row=1; row<m; row ++){
    for(let col=1; col<n; col ++){
      board[row][col] = board[row-1][col] + board[row][col-1]
    }
  }
  return board[m-1][n-1]
}

module.exports = uniquePaths;
