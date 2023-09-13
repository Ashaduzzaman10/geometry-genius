// triangle calculation
document.getElementById("Calculate-btn").addEventListener("click", function () {
  const baseInput = CalculateInputResult("box-1", "box-2");
  const result = parseFloat(baseInput / 2);
  printingResult("result", result);
});
//Rectangle calculation
document
  .getElementById("rectangle-btn")
  .addEventListener("click", function () {
    const areaOfRectangle = CalculateInputResult("width", "length");
    printingResult("result", areaOfRectangle);
  });

// Parallelogram calculation 
document.getElementById("Parallelogram").addEventListener("click", function () {
  const areaParallelogram = CalculateInputResult("base1", "height1");
  printingResult("result", areaParallelogram)
  });