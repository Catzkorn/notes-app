
function test() {
  console.log("adds a note to the notes list")
  let noteManager = new NoteManager();
  noteManager.addNote('This is the note message')
  checkEqual(noteManager.getNotes().length, 1)
}

