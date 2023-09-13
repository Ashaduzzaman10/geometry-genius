// initial math for all 
function CalculateInputResult(elementId1, elementId2) {
  const base = document.getElementById(elementId1);
  const baseNumber = parseFloat(base.value);
  const height = document.getElementById(elementId2);
  const heightNumber = parseFloat(base.value);
  const sum = parseFloat((baseNumber * heightNumber));
  return sum;
}
// printing result 
function printingResult(elementId,TotalSum) {
  const resultBox = document.getElementById(elementId);
  resultBox.innerText = TotalSum;

}

