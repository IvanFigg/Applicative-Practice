import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function getPlanetsNamesWithMoons(data, moonName) {
  let rocks = data.planets
    .filter(function (rock) {
      if (rock.hasOwnProperty("moons")) {
        return rock.moons;
      }
    })
    .map(function (lilRocks) {
      if (lilRocks.moons === moonName) {
        return lilRocks;
      }
    });
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
