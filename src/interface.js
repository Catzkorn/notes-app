addNoteOnClick();

var noteManager = new NoteManager();

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
    html += formatNote(note, i);
  }
  notesList.innerHTML = (html);
}

function formatNote(note, index) {
  return `<div id='note-${index}'>` + abbreviateMessage(note.message) + " " + viewButton(index) + "<br>" + note.time + "</div><br>" 
}

function abbreviateMessage(message) {
  if (message.length > 20) {
    return message.slice(0, 20) + "..."
  } else {
    return message
  }
}

function viewButton(index) {
  return `<button type='button' id='button-${index}'>View</button>`
}


