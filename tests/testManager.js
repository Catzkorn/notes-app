class TestManager {
  constructor() {
    this.tests = []
  }

  addTest(description, steps) {
    var test = new Test(description, steps)
    this.tests.push(test)
  }

  runTests() {
    this.tests.forEach(function(test) {
      var result1 = test.testSteps()
      console.log(test.result)
      // displayResult(test, result)
    })
  }
}

testManager = new TestManager

testManager.addTest("double 2 to equal 4", function() {
  this.expect(2).toEqual(2)
})

testManager.runTests()