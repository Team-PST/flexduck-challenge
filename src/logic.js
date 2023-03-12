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

function previewRight(num, coordinates) {
  const y = coordinates[0];
  const x = coordinates[1];
  const preview = [];
  const destinationX = x + num;
  for (let i = x; i < destinationX; i++) {
    preview.push([y, i]);
  }
  console.log(preview);
  return preview;
}

function reverseLeftRight() {}

function reverseUpDow() {}

export { previewDown, previewLeft, previewUp, previewRight, createGrid };
