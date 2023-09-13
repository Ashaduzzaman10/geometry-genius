// triangle calculation
document.getElementById("Calculate-btn").addEventListener("click", function () {
  const baseInput = CalculateInputResult("box-1", "box-2");
  const result = parseFloat(baseInput / 2);
  printingResult("result", result);
});
//Rectangle calculation
document
  .getElementById("rectangle-btn")
  .addEventListener("click", function () {});
