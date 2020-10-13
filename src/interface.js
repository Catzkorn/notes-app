addNoteOnClick();

let noteManager = new NoteManager();

viewNotes();

function addNoteOnClick() {
  let submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault();
    let message = document.getElementById('message');
    noteManager.addNote(message.value);
    displayNotes();
    document.getElementById("new-note").reset();
  });
};

function displayNotes() {
  let notesList = document.getElementById("note-list");
  let notes = noteManager.getNotes();
  let html = ""
  for (let i = 0; i < notes.length; i++) {
    let note = notes[i];
    html += formatNote(note);
  }
  notesList.innerHTML = (html);
}

function formatNote(note) {
  return `<div id='note-${i}'>` + note.message + "<br>" + note.time + "</div><br>"
}


