// TO RUN TESTS must use format:


let testManager = new TestManager

testManager.addTest('our test', function() {
  return this.expect(2).toEqual(2)
})

testManager.addTest('2 + 2 is 4', function() {
  let result = 2 + 2
  return this.expect(result).toEqual(4)
})

testManager.addTest('failing test', function() {
  let result = 2 + 2
  return this.expect(result).toEqual(5)
})

testManager.runTests()