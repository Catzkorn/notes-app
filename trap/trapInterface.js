var cheeseString = ""
var dots = ""
function displayTestDesc(bait) {
  cheeseString += bait + "<br>";
}

function displayTests(cheese) {
  cheeseString += formatTest(cheese)
  document.getElementById("tests").innerHTML = (cheeseString);
  document.getElementById("test-summary").innerHTML = (dots)
}

function formatTest(cheese) {
  let testResult = ""
  if(cheese.includes('Success')) {
    testResult = 'pass';
    dots += `<span class='${testResult}'>`+"🐱</span>"
  } else {
    testResult = 'fail';
    dots += `<span class='${testResult}'>`+"🐭</span>"
  }
  return (`<div class='${testResult}'>` + cheese + "</div><br>")
}
