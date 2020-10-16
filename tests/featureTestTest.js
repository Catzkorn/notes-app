webIt('testing that page has content', './index.html', function(testWindow) {
  expect(testWindow.document.body.innerHTML).toHaveContent('This is a test');
})