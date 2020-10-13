
function checkEqual(actual, expected) {
  if (actual === expected) {
    return "pass"
  } else {
    return `fail, expected ${expected}, got ${actual}`
  }
}

function checkBeTrue(actual) {
  if(actual === true) {
    return "pass"
  } else {
    return `fail, expected true, got ${actual}`
  }
}

function checkBeFalse(actual) {
  if(actual === false) {
    return "pass"
  } else {
    return `fail, expected false, got ${actual}`
  }
}

function describe(description) {
  return description
}



