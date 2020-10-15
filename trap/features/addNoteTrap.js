runFeatureTest("Adds a note", './index.html', function(testWindow) {
  populateForm(testWindow, "message", "Our test message");
  clickButton(testWindow, 'submit-button');
  var testResult = checkPageContains(testWindow, "Our test message"); /* testRestult will be an object that has actual, expected and test result. Will need to alter both checkPageContains function and displayTests function to cater for this */
  closeWindow(testWindow);
  // displayTests( testResult, testDesc)
})

runFeatureTest("Shows abbrv note version", './index.html', function(testWindow) {
  populateForm(testWindow, "message", "Our test message is a very long message that is longer than 20 characters");
  clickButton(testWindow, 'submit-button');
  checkPageContains(testWindow, "Our test message is ..."); 
  closeWindow(testWindow);
})
