class Test {
  constructor(description, steps) {
    this.testDescription = description
    this.testSteps = steps
    this.testWindow = undefined
  }

  expect(actual) {
    return {
      toEqual: function(expected) {
        if (actual === expected) {
          return {result: "pass"}
        } else {
          return {result: "fail", expected: expected, actual: actual}
        }
      }
    }  
  }
}
  