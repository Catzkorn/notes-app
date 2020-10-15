class TestManager {

  constructor() {
    this.tests = []
    this.resultHTML = ""
  }

  addTest(test) {
    this.tests.push(test)
  }

  runTests() {
    this.resultHTML = ""
    for (let i = 0; i < this.tests.length; i++) {
      let test = this.tests[i]
      let steps = test.testSteps
      console.log(steps())
      let result = eval(steps())
      console.dir(result)
      this.outputTestResult(test, result)
    }
  }

  runTest(test) {
    let steps = test.testSteps
    console.dir(steps)
    let result = eval(steps())
    console.dir(result)
    this.outputTestResult(test, result)
  }

  outputTestResult(test, result) {
    if (result.status === "pass") {
      this.resultHTML += `<div class='${result.status}'>${test.description}<br>Pass</div><br>`
    } else {
      this.resultHTML += `<div class='${result.status}'>${test.description}<br>Fail<br>Expected ${result.expected} but instead got ${result.actual}</div><br>`
    }
    let testsElement = document.getElementById('tests')
    let html = "<div id='test-results'>" + this.resultHTML + "</div>"
    testsElement.innerHTML = html;
  }
}
