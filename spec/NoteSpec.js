
  let note;
  let time = new Date(2020, 9, 31, 11, 00, 00, 00);

  // beforeEach(function() {
  //   note = new Note('This is a really cool note', time);
  // });

  console.log("returns text from the note")
  note = new Note('This is a really cool note', time);
  checkEqual(note.getMessage(), 'This is a really cool note');

  console.log("returns the time the note was created")
  checkEqual(note.getTime(), time);


//   it('returns the time the note was created', function() {
//     expect(note.getTime()).toEqual(time);
//   });
// });

// console.log("adds a note to the notes list")
// let noteManager = new NoteManager();
// noteManager.addNote('This is the note message')
// checkEqual(noteManager.getNotes().length, 1)