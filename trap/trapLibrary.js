let testWindow;

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

function navigateTo(path) {
  testWindow = window.open(path, 'test-window')
}

function navigateAndPopulate(path, elementId, value) {
  testWindow = window.open(path, 'test-window')
  testWindow.onload = function() {
    populateForm(elementId, value)
  }
}

function populateForm(elementId, value) {
  let field = testWindow.document.getElementById(elementId);
  console.log(field)
  field.value = field.value + value;
}

function closeWindow() {
  testWindow.close();
}