addNoteOnClick();

function addNoteOnClick() {
  document
    .getElementById("new-note")
    .addEventListener("click", function(clickEvent) {
      clickEvent.preventDefault();
      console.log("hi!");
    });



};