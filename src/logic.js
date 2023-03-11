//will be separated into different components

//for testing and development purposes
const grid = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

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

function createBridgeUp(num, grid, coordinates) {
  const y = coordinates[0];
  const x = coordinates[1];
  const destinationY = y - num;
  for (let i = y - 1; i >= destinationY; i--) {
    grid[i][x] = 1;
  }
  coordinates = [destinationY, x];
  return { grid, coordinates };
}

function createBridgeDown(num, grid, coordinates) {
  const y = coordinates[0];
  const x = coordinates[1];
  const destinationY = y + num;
  for (let i = y + 1; i <= destinationY; i++) {
    grid[i][x] = 1;
  }
  coordinates = [destinationY, x];
  return { grid, coordinates };
}

function createBridgeLeft(num, grid, coordinates) {
  const y = coordinates[0];
  const x = coordinates[1];
  const destinationX = x - num;
  for (let i = x - 1; i > destinationX; i--) {
    grid[y][i] = 1;
  }
  coordinates = [y, destinationX];
  return { grid, coordinates };
}

function createBridgeRight(num, grid, coordinates) {
  const y = coordinates[0];
  const x = coordinates[1];
  const destinationX = x + num;
  for (let i = x + 1; i > destinationX; i++) {
    grid[y][i] = 1;
  }
  coordinates = [y, destinationX];
  return { grid, coordinates };
}

export {
  createBridgeDown,
  createBridgeLeft,
  createBridgeUp,
  createBridgeRight,
  createGrid,
};
