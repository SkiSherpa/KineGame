// generate target coordinants
// target coordinates will always be on the target axis
// 2x2: (2, 0) (2, 1) (2, 2)
const board = {
  0: [0,1,2],
  1: [0,1,2],
  2: [0,1,2],
}
// always accessing the largest "key" in the board obj
// want target to be a class, a new target is geterate each time
// board will be an obj
// keys are the x coor
let xtarget = (board) => {
  return Object.keys(board).length - 1;
}
let ytarget = (board) => {
  return Math.floor(Math.random()*(Object.keys(board).length));
}

class generateTarget {
  constructor (xtarget, ytarget, board) {
    // want to instantiate a new set a of target coordinate each time
    this.xtarget = new xtarget(board);
    this.ytarget = new ytarget(board);
  }
}

`(${xtarget(board)}, ${ytarget(board)})`;

