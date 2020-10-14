var cheeseString = ""
function displayTestDesc(bait) {
  cheeseString += bait;
}

function displayTests(cheese) {
  cheeseString += formatTest(cheese)
  document.getElementById("tests").innerHTML = (cheeseString);
}

function formatTest(cheese) {
  let testResult = ""
  if(cheese.includes('Success')) {
    testResult = 'pass';
  } else {
    testResult = 'fail';
  }
  return (`<div class='${testResult}'>` + cheese + "</div><br>")
}
