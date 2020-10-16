

it("#getMessage / returns text from the note", function () {
  let time = new Date(2020, 9, 31, 11, 00, 00, 00);
  let note = new Note('This is a really cool note', time);
  expect(note.getMessage()).toEqual('This is a really cool note');
})

it("#getTime / returns the time the note was created", function () {
  let time = new Date(2020, 9, 31, 11, 00, 00, 00);
  let note = new Note('This is a really cool note', time);
  expect(note.getTime()).toEqual(time);
})



