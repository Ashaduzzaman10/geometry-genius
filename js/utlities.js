function CalculateResult(elementId1, elementId2) {
  const base = document.getElementById(elementId1);
  const baseNumber = parseFloat(base.value);
  const height = document.getElementById(elementId2);
  const heightNumber = parseFloat(base.value);
  const sum = parseFloat((baseNumber * heightNumber) / 2);
  const resultBox = document.getElementById("result");
  resultBox.innerText = sum;
  return sum;
}
function printingResultTextValue(elementId, value) {
  const resultBox = document.getElementById(elementId);
  elementId.innerText = value;
  return resultBox;
}
