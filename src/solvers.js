/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var newBoard = new Board({n:n});
  var size = n;
  var solution;

  var helperfunction = function(row) {
    for (var col = 0; col < size; col ++) {                        //get the row which is an array of column indices
      newBoard.togglePiece(row,col);                               // toggle piece
      if (newBoard.hasAnyRooksConflicts()) {                       // check if any Rook conflicts
        newBoard.togglePiece(row,col)                              // if conflict, retoggle piece, step through for loop
      } else {
        if (row === n-1) {                                         // if we are at the last row
          // board = newBoard;                                     // set board
          // console.log(board.rows());
          return newBoard;                                         // return board to upper "recursion level"
        } else {
          return helperfunction(row++);                            // if no conflict, and row !== n-1, recurse with next row return board to
        }
      }
    }
  }

  solution = helperfunction(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  console.log(solution.rows());
  return solution.rows();
}


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
  //while column < n && row < n
    //If no conflict place queen. If Q === n, push solution into solution array , else reset column to 0 and increment row by 1
    //If conflict, increment column by one and recurse to line above.

    //if row & column === n, get last queen from solution and move it to next column without conflict.

    //BASE CASES
    //if after a queen is placed, queen === n, push solution


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));

  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  //iterate n times calling findNQueensSolution, push each into an array, determine length of array



  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
