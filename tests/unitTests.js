it ('our test', function() {
  expect(2).toEqual(2)
})

it ('2 + 2 is 4', function() {
  let result = 2 + 2
  expect(result).toEqual(4)
})

it ('failing test', function() {
  let result = 2 + 2
  expect(result).toEqual(5)
})