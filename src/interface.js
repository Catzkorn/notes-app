addNoteOnClick();

var notemanager = new NoteManager();

function addNoteOnClick() {
  document
    .getElementById("new-note")
    .addEventListener("click", function(clickEvent) {
      clickEvent.preventDefault();
      var message = document.getElementById('message').value;
      notemanager.addNote(message);
      notemanager.getNotes();
    });
};

