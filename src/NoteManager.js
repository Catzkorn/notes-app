class NoteManager {
  constructor() {
    this.notes = [];
  }

  addNote(message) {
    let note = new Note(message);
    this.notes.push(note);
  }

  getNotes() {
    console.log(this.notes);
  }
}