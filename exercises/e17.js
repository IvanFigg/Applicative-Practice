/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods.
 * In order to do this it is ok to use any type of FOR loops.
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {
  let minVal;
  if (Array.isArray(array) && array.length > 0) {
    let firstVal = cb(array[0]);
    for (let person of array) {
      let dataVal = cb(person);
      if (dataVal < firstVal) {
        firstVal = dataVal;
        minVal = person;
      }
    }
  } else {
    return undefined;
  }
  return minVal;
}

export function maxBy(array, cb) {
  let firstVal = array[0];
  for (let i of array) {
    if (cb(i) > cb(firstVal)) {
      firstVal = i;
    }
  }
  return firstVal;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
