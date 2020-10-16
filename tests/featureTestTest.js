webIt('adding a reminder and testing it shows on the page', './index.html', function(testWindow) {
  populateForm(testWindow, 'message', 'remember cats');
  clickButton(testWindow, 'submit-button');
  expect(testWindow.document.body.textContent).toHaveContent("remember cats");
});

webIt('adding a reminder and testing a different reminder doesnt show on the page', './index.html', function(testWindow) {
  populateForm(testWindow, 'message', 'remember dogs');
  clickButton(testWindow, 'submit-button');
  expect(testWindow.document.getElementById('note-list').textContent).notToHaveContent("remember cats");
});

webIt('notes are abbreviated to 20 characters if longer than', '/index.html', function(testWindow) {
  populateForm(testWindow, 'message', 'Ollie really should get himself a cat because cats are cool meow.');
  clickButton(testWindow, 'submit-button');
  expect(testWindow.document.getElementById('note-list').textContent).toHaveContent("Ollie really should ...");
});

webIt('full note is shown when clicking on expand note', '/index.html', function(testWindow) {
  populateForm(testWindow, 'message', 'Ollie really should get himself a cat because cats are cool meow.');
  clickButton(testWindow, 'submit-button');
  clickButton(testWindow, 'button-0');
  expect(testWindow.document.getElementById('fullNote').textContent).toHaveContent("Ollie really should get himself a cat because cats are cool meow.");
});

webIt('can add 2 notes', './index.html', function(testWindow) {
  populateForm(testWindow, 'message', 'remember cats');
  clickButton(testWindow, 'submit-button');
  populateForm(testWindow, 'message', 'Ollie really should get himself a cat because cats are cool meow.');
  clickButton(testWindow, 'submit-button');
  expect(testWindow.document.getElementById('note-list').textContent).toHaveContent("Ollie really should ...");
});

