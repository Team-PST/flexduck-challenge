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
function createGrid(num1, num2) {
  let grid = [];
  for (let i = 0; i < num1; i++) {
    let innerGrid = [];
    for (let j = 0; j < num2; j++) {
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
function column(num, coordinates) {
  const y = coordinates[0];
  const x = coordinates[1];
  const preview = [];
  const destinationY = y + num;
  for (let i = y; i < destinationY; i++) {
    preview.push([i, x]);
  }
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
  console.log(preview);
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
function rowReverse(arrs, boardEdge) {
  arrs = pushRight(arrs, boardEdge);
  let res = [];
  for (let i = arrs.length - 1; i >= 0; i--) {
    res.push(arrs[i]);
  }
  return res;
}

function columnReverse(arrs, boardEdge) {
  let difference = boardEdge - (arrs.length - 1);
  for (let arr of arrs) {
    arr[0] += difference;
  }
  let res = [];
  for (let i = arrs.length - 1; i >= 0; i--) {
    res.push(arrs[i]);
  }
}

//need flex-direction
//if reverse, push it to the left or top
function pushRight(arrs, boardEdge) {
  let difference = boardEdge - (arrs.length - 1);
  for (let arr of arrs) {
    arr[1] += difference;
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

/********************Kayle Working on this ************/
//this function determines the ducky location and what input returns the future ducky location
function options(duckyLocation, direction, justify, align) {
  if (duckyLocation === [0, 0]) {
    if (direction === "row") {
      return; //new duckyLocation [0,2]
    } else if (direction === "column") {
      return; //new duckyLocation [2,0]
    }

    if (duckyLocation === [2, 0]) {
      if (direction === "row" && justify === "flex-end") {
        return; //new duckyLocation [4,0]
      } else if (direction === "column" && justify === "flex-end") {
        return; //new duckyLocation [0,4]
      }
    }
    if (duckyLocation === [4, 0]) {
      if (direction === "col" && align === "flex-end") {
        return; //new duckyLocation [4,2]
      } else if (direction === "column" && align === "flex-end") {
        return; //new duckyLocation [2,2]
      }
    }

    if (duckyLocation === [0, 2]) {
      if (direction === "row" && align === "center") {
        return; //new duckyLocation [2,2]
      } else if (direction === "column" && justify === "flex-end") {
        return; //new duckyLocation [0,4]
      }
    }

    if (duckyLocation === [2, 2]) {
      if (direction === "row" && justify === "center" && align === "flex-end") {
        return; //new duckyLocation [4,2]
      } else if (
        direction === "column" &&
        justify === "flex-end" &&
        align === "flex-end"
      ) {
        return; //new duckyLocation [2,4]
      }
    }
    if (duckyLocation === [2, 4]) {
      if (
        direction === "row" &&
        justify === "flex-end" &&
        align === "flex-end"
      ) {
        return; //new duckyLocation [4,4]
      }
    }

    if (duckyLocation === [4, 2]) {
      if (
        direction === "column" &&
        justify === "flex-end" &&
        align === "flex-end"
      ) {
        return; //new duckyLocation [4,4]
      }
    }
  }
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
};
