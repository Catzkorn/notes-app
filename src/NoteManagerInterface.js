addNoteOnClick();
off();
var noteManager = new NoteManager();

function addClickListener(elementId, clickFunction) {
  let button = document.getElementById(elementId);
  button.addEventListener("click", function(clickEvent) {
    clickFunction(clickEvent);
  });
}

function addNoteOnClick() {
  addClickListener("submit-button", function(clickEvent) {
    clickEvent.preventDefault();
    let message = document.getElementById('message');
    noteManager.addNote(message.value);
    displayNotes();
    document.getElementById("new-note").reset();
  });
};

function displayNotes() {
  let notesList = document.getElementById("note-list");
  let notes = noteManager.getNotes();
  let html = "";
  for (let i = (notes.length - 1); i >= 0; i--) {
    let note = notes[i];
    html += formatNote(note, i);
  }
  notesList.innerHTML = (html);
  viewFullNoteOnClick(notes);
}

function formatNote(note, index) {
  return `<div id="notebox-${index}"><div id='note-${index}'>` + note.time + '<br>' + abbreviateMessage(note.message) + "</div>" + generateViewButton(index) + "</div>";
}

function abbreviateMessage(message) {
  if (message.length > 20) {
    return message.slice(0, 20) + "...";
  } else {
    return message;
  }
}

function generateViewButton(index) {
  return `<button type='button' class="view-button" id='button-${index}'>View 🧶</button>`;
}

function viewFullNoteOnClick(notes) {
  for (let i = 0; i < notes.length; i++) {
    addClickListener(`button-${i}`, function() {
      let fullNote = document.getElementById('fullNote');
      let note = notes[i];
      fullNote.innerHTML = generateFullNote(note);
      hideOverlayOnCloseClick();
      on();
    });
  };
};

function generateFullNote(note) {
  return `<div id='full-note-time'>${note.time}</div>` + '<br>' + note.message;
}

function hideOverlayOnCloseClick() {
  addClickListener("close", function() {
    off();
  });
  addClickListener("overlay", function() {
    off();
  });
}

function on() {
  document.getElementById("overlay").style.display = "block";
}


function off() {
  document.getElementById("overlay").style.display = "none";
}

