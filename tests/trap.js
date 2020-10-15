// let Test = require("./test").Test

let currentTest = {}
let resultHTML = ""

function it(description, steps) {
  let test = new Test(description, steps)
  runTest(test)
}

function expect(actual) {
  return {
    toEqual: function (expected) {
      if (actual === expected) {
        currentTest.result = {status: "pass"}
      } else {
        currentTest.result = {status: "fail", expected: expected, actual: actual}
      }
    }
  }
}

function runTest(test) {
  let steps = test.testSteps
  steps()
  let result = currentTest.result
  outputTestResultHtml(test, result)
  outputTestResultConsole(test, result)
}

function outputTestResultConsole(test, result) {
  console.log(result)
}

function outputTestResultHtml(test, result) {
  formatTestResult(test, result)
  let testsElement = document.getElementById('tests')
  let html = "<div id='test-results'>" + resultHTML + "</div>"
  testsElement.innerHTML = html;
}

function formatTestResult(test, result) {
  if (result.status === "pass") {
    resultHTML += `<div class='${result.status}'>${test.description}<br>Pass</div><br>`
  } else {
    resultHTML += `<div class='${result.status}'>${test.description}<br>Fail<br>Expected ${result.expected} but instead got ${result.actual}</div><br>`
  }
}
