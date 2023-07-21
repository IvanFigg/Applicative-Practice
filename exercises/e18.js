/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  let maxCount = 0;
  let mostRep = 0;
  const innerData = data.asteroids
    .filter((element) => element)
    .map((element) => element.discoveryYear);

  for (let i = 0; i < innerData.length; i++) {
    let count = 0;
    for (let j = 0; j < innerData.length; j++) {
      if (innerData[i] === innerData[j]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      mostRep = innerData[i];
    }
  }
  return mostRep;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
