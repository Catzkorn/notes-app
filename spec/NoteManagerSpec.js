describe('NoteManager', function() {
  let noteManager;

  beforeEach(function() {
    noteManager = new NoteManager();
  })
  describe('#addNote', function() {
    it('adds a note to the notes list', function() {
      noteManager.addNote('This is the note message');

      expect(noteManager.getNotes().length).toEqual(1);
    })
  })
})