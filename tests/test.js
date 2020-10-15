class Test {
  constructor(description, steps) {
    this.description = description
    this.testSteps = steps
    this.testWindow = undefined
  }

  expect(actual) {
    return {
      toEqual: function(expected) {
        if (actual === expected) {
          return {status: "pass"}
        } else {
          return {status: "fail", expected: expected, actual: actual}
        }
      },
      toBeTrue: function() {
        if (actual === true) {
          return {status: "pass"}
        } else {
          return {status: "fail", expected: true, actual: actual}
        }
      },
      toBeFalse: function() {
        if (actual === false) {
          return {status: "pass"}
        } else {
          return {status: "fail", expected: false, actual: actual}
        }
      }
    }
  }
}
  