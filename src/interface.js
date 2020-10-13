addNoteOnClick();
off();
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
  let notesCount = notes.length
  for (let i = 0; i < notesCount; i++) {
    let note = notes[i];
    html += formatNote(note, i);
  }
  notesList.innerHTML = (html);
  viewFullNoteOnClick(notesCount);
}

function formatNote(note, index) {
  return `<div id='note-${index}'>` + abbreviateMessage(note.message) + " " + generateViewButton(index) + "<br>" + note.time + "</div><br>" 
}

function abbreviateMessage(message) {
  if (message.length > 20) {
    return message.slice(0, 20) + "..."
  } else {
    return message
  }
}

function generateViewButton(index) {
  return `<button type='button' id='button-${index}'>View</button>`
}

function viewFullNoteOnClick(notesCount) {
  for (let i = 0; i < notesCount; i++ ) {
    let viewButton = document.getElementById(`button-${i}`);
    viewButton.addEventListener("click", function(clickEvent) {
      on()
    });  
  };
};

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}