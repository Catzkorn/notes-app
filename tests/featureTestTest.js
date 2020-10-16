webIt('testing that page has content', './index.html', function() {
  expect(document.body.innerHTML).toHaveContent('This is a test');
})