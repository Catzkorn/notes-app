describe('Note', function() {

  let note;
  var time = new Date(2020, 09, 31, 11, 00, 00, 00);

  beforeEach(function() {
    note = new Note('This is a really cool note', time);
  });


  it('returns text from the note', function() {
    console.log(note);
    console.log(note.noteText());
    expect(note.noteText()).toEqual('This is a really cool note');
  });

  it('returns the time the note was created', function() {
    console.log(note);
    console.log(note.noteTime());
    expect(note.noteTime()).toEqual(time);
  });





});