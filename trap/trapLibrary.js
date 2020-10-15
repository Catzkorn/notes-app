// let testWindow;

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

function checkPageContains(testWindow, expected) {
  let actual = testWindow.document.body.textContent
  // TODO: remove white space from actual before printing
  if (actual.includes(expected)) {
    displayTests("Success");
  } else {
    displayTests(`Fail - you expected ${expected} but instead got ${actual}`);
  }
}
//
// function navigateTo(path) {
//   testWindow = window.open(path, 'test-window')
//   testWindow.onload = function() {
//     executeTest();
//   }
// }

function populateForm(testWindow, elementId, value) {
  let field = testWindow.document.getElementById(elementId);
  field.value = value;
}

function closeWindow(testWindow) {
  testWindow.close();
}

function clickButton(testWindow, elementId) {
  let button = testWindow.document.getElementById(elementId)
  button.click();
}

function runFeatureTest(testDesc, path, testSteps) {
  bait(testDesc)
  let testWindow = window.open(path)
  testWindow.onload = function() {
    testSteps(testWindow)
  }
}