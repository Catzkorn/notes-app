

it("#addNote / adds a note to the notes list", function() {
  let noteManager = new NoteManager();
  noteManager.addNote('This is the note message');
  expect(noteManager.getNotes().length).toEqual(1);
})
  


