function bait(cheese) {
  displayTests(cheese)
}

function checkEqual(actual, expected) {
  if (actual === expected) {
    displayTests("Success");
  } else {
    displayTests(`Fail - you expected ${expected} but instead got ${actual}`);
  }
}

function checkIfTrue(actual) {
  if (actual === true) {
    displayTests("Success");
  } else {
    displayTests(`Fail - you expected true but instead got ${actual}`);
  }
}

function checkIfFalse(actual) {
  if (actual === false) {
    displayTests("Success");
  } else {
    displayTests(`Fail - you expected false but instead got ${actual}`);
  }
}