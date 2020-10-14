
let time = new Date(2020, 9, 31, 11, 00, 00, 00);
let note = new Note('This is a really cool note', time);
bait("#getMessage")
bait("returns text from the note");
checkEqual(note.getMessage(), 'This is a really cool note');

bait("#getTime")
bait("returns the time the note was created");
checkEqual(note.getTime(), time);

