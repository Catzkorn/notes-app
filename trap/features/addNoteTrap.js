runFeatureTest("Adds a note", './index.html', function(testWindow) {
  populateForm(testWindow, "message", "Our test message");
  clickButton(testWindow, 'submit-button');
  checkPageContains(testWindow, "Our test message");
  closeWindow(testWindow);
})

runFeatureTest("Shows abbrv note version", './index.html', function(testWindow) {
  populateForm(testWindow, "message", "Our test message is a very long message that is longer than 20 characters");
  clickButton(testWindow, 'submit-button');
  checkPageContains(testWindow, "Our test message is ...");
  closeWindow(testWindow);
})
