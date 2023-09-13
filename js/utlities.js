// initial math for all 
function CalculateInputResult(elementId1, elementId2) {
  const base = document.getElementById(elementId1);
  const baseNumber = parseInt(base.value);
  const height = document.getElementById(elementId2);
  const heightNumber = parseInt(base.value);
  const sum = parseInt(( 0.5 * baseNumber * heightNumber));
  return sum;
}

// initial math for all 
function CalculateInputResult1(elementId1, elementId2) {
  const base = document.getElementById(elementId1);
  const baseNumber = parseInt(base.value);
  const height = document.getElementById(elementId2);
  const heightNumber = parseInt(base.value);
  const sum = parseInt(( baseNumber * heightNumber));
  return sum;
}
// printing result 
function printingResult(elementId,TotalSum) {
  const resultBox = document.getElementById(elementId);
  resultBox.innerText = TotalSum;
}

