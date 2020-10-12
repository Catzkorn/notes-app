describe('Note', function() {

  let note;
  let time = new Date(2020, 9, 31, 11, 00, 00, 00);

  beforeEach(function() {
    note = new Note('This is a really cool note', time);
  });


  it('returns text from the note', function() {
    expect(note.getMessage()).toEqual('This is a really cool note');
  });

  it('returns the time the note was created', function() {
    expect(note.getTime()).toEqual(time);
  });
});