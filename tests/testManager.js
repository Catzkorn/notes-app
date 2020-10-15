class TestManager {
  constructor() {
    this.tests = []
    this.resultHTML = ""
  }

  addTest(description, steps) {
    var test = new Test(description, steps)
    this.tests.push(test)
  }

  runTests() {
    this.resultHTML = ""
    for (let i = 0; i < this.tests.length; i++) {
      let test = this.tests[i]
      let result = test.testSteps()
      this.outputTestResult(test, result)
    }
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
