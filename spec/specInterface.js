// testRunner()

// function testRunner() {
//   testResult = []
//   testResult.push(test())
// }
displayTests();

function displayTests(testReturn) {
  console.log(testReturn);
  document.getElementById("tests").innerHTML = (testReturn);
}