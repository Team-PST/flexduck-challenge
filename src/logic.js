//will be separated into different components

//for testing and development purposes

/**
 * Creates a 2D array with the specified dimensions and initializes
 * all elements to 0.
 *
 * 0 will be used as ocean
 * 1 will be used as bridge
 * @param {number} num1 - The number of rows in the array.
 * @param {number} num2 - The number of columns in the array.
 * @returns {Array<Array<*>>} - The 2D array with the specified dimensions
 *   and all elements initialized to the specified value.
 */
function createGrid(num) {
  let grid = [];
  for (let i = 0; i < num; i++) {
    let innerGrid = [];
    for (let j = 0; j < num; j++) {
      innerGrid.push(0);
    }
    grid.push(innerGrid);
  }
  return grid;
}

//0
function checkOutOfBoundsUp() {}

// grid.length - 1
function checkOutOfBountsDown() {}

//0
function checkOutOfBountsLeft() {}

//grid[y].length
function checkOutOfBountsRight() {}

function previewUp(num, coordinates) {
  const y = coordinates[0];
  const x = coordinates[1];
  const preview = [];
  const destinationY = y - num;
  for (let i = y; i > destinationY; i--) {
    preview.push([i, x]);
  }
  return preview;
}

//prototype for preview
function column(num) {
  const y = 0;
  const x = 0;
  const preview = [];
  const destinationY = y + num;
  for (let i = y; i < destinationY; i++) {
    preview.push([i, x]);
  }
  console.log(preview);
  return preview; //[[1,0][2, 0]....]
}

function previewLeft(num, coordinates) {
  const y = coordinates[0];
  const x = coordinates[1];
  const preview = [];
  const destinationX = x - num;
  for (let i = x; i > destinationX; i--) {
    preview.push([y, i]);
  }
  return preview;
}

//prototype for preview
function previewDown(num, coordinates) {
  const y = coordinates[0];
  const x = coordinates[1];
  const preview = [];
  const destinationY = y + num;
  for (let i = y; i < destinationY; i++) {
    preview.push([i, x]);
  }
  return preview; //[[1,0][2, 0]....]
}
function previewRight(num) {
  const y = 0;
  const x = 0;
  const preview = [];
  const destinationX = x + num;
  for (let i = x; i < destinationX; i++) {
    preview.push([y, i]);
  }

  return preview;
}

//[[0,0],[0,1],[0,2],[0,3],[0,4]]
//[[0,4],[0,3],[0,2],[0,1],[0,0]]

//let arr =[[0,1],[0,2]]
//take it to the end fist
//boardEdge- 1 = 4
//furthestRight = arr[-1][1] = 2
//difference = boardEdge - furthestRight = 2
//for array or arr: array[1] += difference
// res = [[0,3],[0,4]]
//and then reverse the array
//[[0,3],[0,4]]
//res = []
//for i = arr.length - 1; i >= 0; i--
//res.push(arr[i])
// res = [0,4],[0,3]]
function rowReverse(num, boardEdge) {
  let arrs = previewRight(num);
  arrs = pushRightRow(arrs, boardEdge - 1);
  let res = [];
  for (let i = arrs.length - 1; i >= 0; i--) {
    res.push(arrs[i]);
  }
  return res;
}

function columnReverse(num, boardEdge) {
  let arrs = column(num);
  arrs = pushDown(arrs, boardEdge - 1);
  let res = [];
  for (let i = arrs.length - 1; i >= 0; i--) {
    res.push(arrs[i]);
  }
  return res;
}

//need flex-direction
//if reverse, push it to the left or top
function pushRightRow(arrs, boardEdge) {
  let difference = boardEdge - (arrs.length - 1);
  for (let arr of arrs) {
    arr[1] += difference;
  }

  return arrs;
}

function pushRightColumn(arrs, boardEdge) {
  for (let arr of arrs) {
    arr[1] = boardEdge;
  }
  return arrs;
}

function pushLeft(arrs, boardEdge) {
  let difference = boardEdge - (arrs.length - 1);
  for (let arr of arrs) {
    arr[1] -= difference;
  }
  return arrs;
}

function pushUp(arrs, boardEdge) {
  let difference = boardEdge - (arrs.length - 1);
  for (let arr of arrs) {
    arr[0] -= difference;
  }
  return arrs;
}

function pushDown(arrs, boardEdge) {
  let difference = boardEdge - arrs[arrs.length - 1][0];
  for (let arr of arrs) {
    arr[0] += difference;
  }
  return arrs;
}

function centerXAxis(arrs, boardEdge) {
  const center = Math.floor(boardEdge / 2);
  for (let arr of arrs) {
    arr[1] += center;
  }
  return arrs;
}

function centerYAxis(arrs, boardEdge) {
  const center = Math.floor(boardEdge / 2);
  for (let arr of arrs) {
    arr[0] += center;
  }
  return arrs;
}

export {
  column,
  previewLeft,
  previewUp,
  previewRight,
  createGrid,
  previewDown,
  rowReverse,
  columnReverse,
  pushRightRow,
  pushRightColumn,
  pushLeft,
  pushUp,
  pushDown,
  centerXAxis,
  centerYAxis,
};
