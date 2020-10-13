

var testDisplay = document.getElementById("tests").value;
console.log("adds a note to the notes list");
let noteManager = new NoteManager();
noteManager.addNote('This is the note message');
testDisplay.innerHTML = (checkEqual(noteManager.getNotes().length, 1));


