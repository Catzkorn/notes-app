// TO RUN TESTS must use format:


let testManager = new TestManager

testManager.addTest('our test', function() {
  return this.expect(2).toEqual(2)
})

testManager.runTests()