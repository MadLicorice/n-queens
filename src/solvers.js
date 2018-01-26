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
  var solution = new Board({n: n});

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      solution.togglePiece(i, j);
      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(i, j);
      }
    }  

  } 

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
  //n = 3; this.hasAnyRooksConflicts()

};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var count = 0;
  var solution = new Board({n: n});

  var findSolution = function (startRow) {
    if (startRow === n) {
      count++;
      return;
    }
    
    for (var i = 0; i < n; i++) {
      solution.togglePiece(startRow, i);
      if (!solution.hasAnyRooksConflicts()) {
        findSolution(startRow + 1);
      }
      solution.togglePiece(startRow, i);
    }
  };

  findSolution(0); // call this and save it
  console.log('Number of solutions for ' + n + ' rooks:', count);
  return count;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var count = [];
  var solution = new Board({n: n});
  if(n === 0 ){
    return solution.rows();
  }

  var findSolution = function (startRow) {
    if (startRow === n) {
      count.push(solution.rows());
    }
    
    for (var i = 0; i < n; i++) {
      solution.togglePiece(startRow, i); 
      if (!solution.hasAnyQueensConflicts()) {
        return findSolution(startRow + 1);
      }
      solution.togglePiece(startRow, i);
    }
  };

  findSolution(0); // call this and save it
  console.log('Number of solutions for ' + n + ' rooks:', count);
  return count;

 /* var solution = new Board({n: n});
  debugger;
  console.log(solution.rows());


  for (var i = 0; i < n; i++) {
    for (var j = 1; j < n; j++) {
      solution.togglePiece(i, j);
      if (solution.hasAnyQueensConflicts()) {
        solution.togglePiece(i, j);
      }
    }  
  } 

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();*/
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var count = 0;
  var solution = new Board({n: n});

  var findSolution = function (startRow) {
    if (startRow === n) {
      count++;
      return;
    }
    
    for (var i = 0; i < n; i++) {
      solution.togglePiece(startRow, i); 
      if (!solution.hasAnyQueensConflicts()) {
        findSolution(startRow + 1);
      }
      solution.togglePiece(startRow, i);
    }
  };

  findSolution(0); // call this and save it
  console.log('Number of solutions for ' + n + ' rooks:', count);
  return count;
};
