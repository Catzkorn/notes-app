
function checkEqual(actual, expected) {
  if (actual === expected) {
    console.log("pass")
  } else {
    console.log(`fail, expected ${expected}, got ${actual}`)
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



