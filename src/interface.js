addNoteOnClick();

var noteManager = new NoteManager();

viewNotes();

function addNoteOnClick() {
  var element = document.getElementById("submit-button");
  element.addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault();
    var message = document.getElementById('message');
    noteManager.addNote(message.value);
    viewNotes();
    document.getElementById("new-note").reset();
  });
};

function viewNotes() {
  var notesList = document.getElementById("note-list");
  let notes = noteManager.getNotes();
  let html = ""
  notes.forEach(function(note) {
    html += note.message + "<br>" + note.time + "<br>"
  })
  notesList.innerHTML = (html);

}


