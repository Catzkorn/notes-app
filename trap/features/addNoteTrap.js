
runFeatureTest("Adds a note", './index.html', function() {
  populateForm("message", "Our test message");
  clickButton('submit-button');
  checkPageContains("Our test message");
  closeWindow();
})

runFeatureTest("Shows abbrv note version", './index.html', function() {
  populateForm("message", "Our test message is a very long message that is longer than 20 characters");
  clickButton('submit-button');
  checkPageContains("Our test message is ...");
  closeWindow();
})

