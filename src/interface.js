addNoteOnClick();

var noteManager = new NoteManager();

viewNotes();

function addNoteOnClick() {
  var element = document.getElementById("submit-button");
  element.addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault();
    var message = document.getElementById('message').value;
    noteManager.addNote(message);
    viewNotes();
  });
};

function viewNotes() {
  var notesList = document.getElementById("note-list");
  notesList.innerHTML = (noteManager.getNotes(noteManager)[0].message);
}


