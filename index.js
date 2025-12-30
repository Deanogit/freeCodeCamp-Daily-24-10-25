// Hidden Treasure
// Given a 2D array representing a map of the ocean floor that includes a hidden treasure, and an array with the coordinates ([row, column]) for the next dive of your treasure search, return "Empty", "Found", or "Recovered" using the following rules:

// The given 2D array will contain exactly one unrecovered treasure, which will occupy multiple cells.
// Each cell in the 2D array will contain one of the following values:

// "-": No treasure.
// "O": A part of the treasure that has not been found.
// "X": A part of the treasure that has already been found.
// If the dive location has no treasure, return "Empty".
// If the dive location finds treasure, but at least one other part of the treasure remains unfound, return "Found".
// If the dive location finds the last unfound part of the treasure, return "Recovered".
// For example, given:

// [
//   [ "-", "X"],
//   [ "-", "X"],
//   [ "-", "O"]
// ]
// And [2, 1] for the coordinates of the dive location, return "Recovered" because the dive found the last unfound part of the treasure.

// function dive(map, coordinates) {
//    console.log(map, coordinates)
// find the character in matrix
// loop over map
//    for (row = 0; row <= map.length; row++) {
//      for (col = 0; col <= map[i].length; col++) {
//        if (map[row] === coordinates[0] && map[row][col] === coordinates[1]) {
//          console.log("Hello")
//        }
//      }
//    }
//   return map;
//}

// function dive(map, coordinates) {
//    console.log(map, coordinates)
// find the character in matrix
// loop over map
//    for (row = 0; row <= map.length; row++) {
//      for (col = 0; col <= map[i].length; col++) {
//        if (map[row] === coordinates[0] && map[row][col] === coordinates[1]) {
//          console.log("Hello")
//        }
//      }
//    }
//   return map;
//}

// function dive(map, coordinates) {
//    console.log(map, coordinates)
// find the character in matrix
// loop over map
//    for (row = 0; row <= map.length; row++) {
//      for (col = 0; col <= map[i].length; col++) {
//        if (map[row] === coordinates[0] && map[row][col] === coordinates[1]) {
//          console.log("Hello")
//        }
//      }
//    }
//   return map;
//}

// function dive(map, coordinates) {
//    console.log(map, coordinates)
// find the character in matrix
// loop over map
//    for (row = 0; row <= map.length; row++) {
//      for (col = 0; col <= map[i].length; col++) {
//        if (map[row] === coordinates[0] && map[row][col] === coordinates[1]) {
//          console.log("Hello")
//        }
//      }
//    }
//   return map;
//}

function dive(map, coordinates) {
  // we have the coordinates of the map to check
  const [row, col] = coordinates;
  // get the value
  const spot = map[row][col];
  console.log(spot);

  let counter = 0;
  // if not O

  // if the location has no treasure, return "Empty"
  // this is returning if the target is empty, not the location...
  if (spot === '-') {
    return 'Empty';
  }

  // if (spot === "X") {
  //   return "Found"
  // }

  // flatten matrix
  const flat = map.flat();
  console.log(flat);

  // if (!flat.includes("O")) return "Empty"

  // check how many Os
  const oCount = flat.filter((cell) => cell === 'O').length;
  console.log(oCount);

  // if the dive location finds treasure, but at least one other part of the treasure remains unfound, return "Found"

  if (spot === 'O' && oCount === 1) {
    return 'Recovered';
  } else if ((spot === 'O' && oCount > 1) || spot === 'X') {
    return 'Found';
  }
}

// dive([[ "-", "-", "-"], [ "X", "O", "X"], [ "-", "-", "-"]], [1, 2])
dive(
  [
    ['-', '-', '-'],
    ['X', 'O', 'X'],
    ['-', '-', '-'],
  ],
  [1, 2]
);
