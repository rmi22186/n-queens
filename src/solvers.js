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
    for (var col = 0; col < size; col++) {                        //get the row which is an array of column indices
      newBoard.togglePiece(row,col);                               // toggle piece
      if (newBoard.hasAnyRooksConflicts()) {                       // check if any Rook conflicts
        newBoard.togglePiece(row,col)                              // if conflict, retoggle piece, step through for loop
      } else {
        if (row === n-1) {                                         // if we are at the last row
          // board = newBoard;                                     // set board
          // console.log(board.rows());
          return newBoard;                                         // return board to upper "recursion level"
        } else {
          // console.log(row);
          return helperfunction(row+1);                            // if no conflict, and row !== n-1, recurse with next row return board to
        }
      }
    }
  }

  solution = helperfunction(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
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
  var solution;
  var newBoard = new Board({n:n});
  var size = n;

  var helperfunction = function(row, col) {
    newBoard.togglePiece(row,col);                               // toggle piece

    var remaining = n-(col + 1);
    if(remaining > 0){
      for(var j=(col+1); j<n; j++){
        helperfunction(row, j);
      }
    }

    if (newBoard.hasAnyRooksConflicts()) {                       // check if any Rook conflicts
      newBoard.togglePiece(row,col)                              // if conflict, retoggle piece, step through for loop
    } else {
      if (row === n-1) {                                         // if we are at the last row
        // board = newBoard;                                     // set board
        // console.log(board.rows());
        return newBoard;                                         // return board to upper "recursion level"
      } else {
        // console.log(row);
        return helperfunction(row+1);                            // if no conflict, and row !== n-1, recurse with next row return board to
      }
    }
  }
  /*var helperfunction = function(row) {
    var lastRow = n-1;
    for (var col = 0; col < size; col++) {                          //get the row which is an array of column indices
      newBoard.togglePiece(row,col);                                // toggle piece
      if (!newBoard.hasAnyQueensConflicts()) {                       // check if any Rook conflicts
        if (row === lastRow) {                                      // if we are at the last row
          return newBoard;                                         // return board to upper "recursion level"
        } else if {

        }
        else {
          return helperfunction(row+1);                            // if no conflict, and row !== n-1, recurse with next row return board to
        }
      }
      newBoard.togglePiece(row,col)                               // if conflict, retoggle piece, step through for loop
    }
  }
*/
  if ( n === 0) {
    solution = new Board({n:n});
  } else if ( n === 2) {
    solution = new Board({n:n});
  } else if ( n === 3) {
    solution = new Board({n:n});
  } else {
    solution = helperfunction(0,0);
  }
  console.log(n);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  //iterate n times calling findNQueensSolution, push each into an array, determine length of array



  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
