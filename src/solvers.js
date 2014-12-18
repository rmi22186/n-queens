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
  //set variable column to zero and row to zero
  //check spot[row, column]
    //if no conflict, place rook
    //if row !== n-1 then
      //reset column, increment row and recurse to line 18
    //else if number of rooks === n, push solution

  var column = 0;
  var row = 0;
  var rooks = 0;
  var solution;
  var newBoard = new Board({n:n});


  var recurseFunction = function(row, column){
    if( !this.hasRowConflictAt( this.get(row)[column] ) || ( !this.hasColConflictAt(this.get(row)[column] ) ) ) {
      this.set(row)[column] = 1;
      rooks++;
      if( row !== n-1){
        column = 0;
        row++;
        recurseFunction(row, column);
      } else {
        if( rooks === n ){
          solution = this;
        }
      }
    } else {
      column++;
      recurseFunction(row, column);
    }

  };

  recurseFunction.call(newBoard, row, column);
  //
  //
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



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
