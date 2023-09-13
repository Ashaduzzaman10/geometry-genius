// initial math for all
function CalculateInputResult(elementId1, elementId2) {
  const base = document.getElementById(elementId1);
  const baseString = base.value;
  const baseNumber = parseFloat(baseString);
  const height = document.getElementById(elementId2);
  const heightString = height.value;
  const heightNumber = parseFloat(baseString);
  const sum = 0.5 * baseNumber * heightNumber;
  return sum;
}

// initial math for all
function CalculateInputResult1(elementId1, elementId2) {
  const base = document.getElementById(elementId1);
  const baseString = base.value;
  const baseNumber = parseFloat(baseString);
  const height = document.getElementById(elementId2);
  const heightString = height.value;
  const heightNumber = parseFloat(baseString);
  const sum = baseNumber * heightNumber;
  return sum;
}
// printing result
function printingResult(elementId, TotalSum) {
  const resultBox = document.getElementById(elementId);
  resultBox.innerText = TotalSum;
}
