addNoteOnClick();

var notemanager = new NoteManager();

function addNoteOnClick() {
  var element = document.getElementById("submit-button");
  element.addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault();
    var message = document.getElementById('message').value;
    notemanager.addNote(message);
    notemanager.getNotes();
  });
};

