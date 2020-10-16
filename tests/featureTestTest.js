webIt('adding a reminder and testing it shows on the page', './index.html', function(testWindow) {
  populateForm(testWindow, 'message', 'remember cats')
  clickButton(testWindow, 'submit-button')
  expect(testWindow.document.body.innerHTML).toHaveContent("remember cats");
})

webIt('adding a reminder and testing a different reminder doesnt show on the page', './index.html', function(testWindow) {
  populateForm(testWindow, 'message', 'remember dogs')
  clickButton(testWindow, 'submit-button')
  expect(testWindow.document.getElementById('note-list').innerHTML).toHaveContent("remember cats");
})

