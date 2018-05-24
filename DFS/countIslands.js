function countNumberOfIsland(grid) {
  let row = grid.length;
  let col = grid[0].length;
  let visited = [];
  let count = {val: 0};

  // Generate visited matrix
  for(let i = 0; i < row; i++) {
    visited[i] = new Array(col).fill(0);
  }

  for(let i = 0; i < row; i++) {
    for(let j = 0; j < col; j++) {
      if(grid[i][j] && !visited[i][j]) {
        visited[i][j] = 1;
        count.val++;
        dfs(grid, visited, i, j);
      }
    }
  }

  return count.val;
}

function dfs(grid, visited, row, col) {
  let rowK = [0,-1,0,1];
  let colK = [-1,0,1,0];

  for(let i = 0; i < 4; i++) {
    let ROW = row + rowK[i];
    let COL = col + colK[i];
    if(isValid(grid, visited, ROW, COL)) {
      visited[ROW][COL] = 1;
      dfs(grid, visited, ROW, COL)
    }
  }
}

/*
Validate that we are on the limit, that our current grid has a "1"
and it´s not marked as seen.
*/
function isValid(grid, visited, row, col) {
  let ROW = grid.length;
  let COL = grid[0].length;
  return (row >= 0 && row < ROW) && (col >= 0 && col < COL) && grid[row][col] && !visited[row][col];
}

matrix = [
  [1,1,1,0,0],
  [0,0,0,1,1],
  [1,1,0,0,1]
];
console.log(countNumberOfIsland(matrix));