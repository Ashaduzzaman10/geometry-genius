// triangle calculation
document.getElementById("Calculate-btn").addEventListener("click", function () {
  const baseInput = CalculateInputResult("box-1", "box-2");
  printingResult("result", baseInput);
});
//Rectangle calculation
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const areaOfRectangle = CalculateInputResult1("width", "length");
  printingResult("result", areaOfRectangle);
});

// Parallelogram calculation
document.getElementById("Parallelogram").addEventListener("click", function () {
  const areaParallelogram = CalculateInputResult1("base1", "height1");
  printingResult("result", areaParallelogram);
});

document.getElementById("Rhombus").addEventListener("click", function () {
  const resultRhombus = CalculateInputResult("baseInput1", "baseInput2");
  const result = parseInt(resultRhombus * 0.5);
  printingResult("result", result);
});

// Pentagon calculation
document.getElementById("Pentagon").addEventListener("click", function () {
  const PentagonArea = CalculateInputResult("PentagonP", PentagonArea);
  printingResult("result", PentagonArea);
});

// Ellipse calculation
document.getElementById("Ellipse").addEventListener("click", function () {
  const ellipseInput = CalculateInputResult1("EllipseBase", "EllipseHeight");
  const areaOfEllipse = Math.PI * ellipseInput;
  printingResult("result", areaOfEllipse);
});
