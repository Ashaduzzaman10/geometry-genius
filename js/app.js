function CalculateResult(elementId1, elementId2) {
  const base = document.getElementById(elementId1);
  const baseNumber = parseFloat(base.value);
  const height = document.getElementById(elementId2);
  const heightNumber = parseFloat(base.value);
  const sum = parseFloat((baseNumber * heightNumber) / 2);
  const resultBox = document.getElementById("result");
  resultBox.innerText = sum;
  console.log(sum);
  return sum;
}
function printingResultTextValue(elementId, value) {
  const resultBox = document.getElementById(elementId);
  elementId.innerText = value;
  return resultBox;
}
document.getElementById("Calculate-btn").addEventListener("click", function () {
  const areaOfTriangle = CalculateResult("box-1", "box-2");
  printingResultTextValue("result", areaOfTriangle);
});
