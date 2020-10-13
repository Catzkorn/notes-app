
function checkEqual(actual, expected) {
  var testDisplay = document.getElementById("tests");
  console.log(testDisplay);

  if (actual === expected) {
    return "pass";
  } else {
    return `fail, expected ${expected}, got ${actual}`;
  }
}


function viewNotes() {
  var notesList = document.getElementById("note-list");
  notesList.innerHTML = (noteManager.getNotes(noteManager)[0].message);
}



function checkBeTrue(actual) {
  if (actual === true) {
    return "pass";
  } else {
    return `fail, expected true, got ${actual}`;
  }
}

function checkBeFalse(actual) {
  if (actual === false) {
    return "pass";
  } else {
    return `fail, expected false, got ${actual}`;
  }
}

function describe(description) {
  return description;
}



