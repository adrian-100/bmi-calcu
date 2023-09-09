// Get references to HTML elements
const btn = document.getElementById("calculate");
const resultDiv = document.querySelector("#result");
const pointerIcon = document.getElementById("pointerIcon");
const categoryDiv = document.getElementById("category");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const heightUnitSelect = document.getElementById("heightUnit");
const weightUnitSelect = document.getElementById("weightUnit");

// Add a click event listener to the Calculate button
btn.addEventListener("click", function () {
  // Retrieve height and weight values from input fields
  const heightValue = parseFloat(heightInput.value);
  const weightValue = parseFloat(weightInput.value);

  // Check if the input values are valid
  if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
    alert("Please enter valid height and weight values!");
    return;
  }

  // Convert height to centimeters if the unit is meters
  let height = heightValue;
  if (heightUnitSelect.value === "m") {
    height *= 100; // Convert meters to centimeters
  }

  // Convert weight to kilograms if the unit is pounds
  let weight = weightValue;
  if (weightUnitSelect.value === "lb") {
    weight *= 0.453592; // Convert pounds to kilograms
  }

  // Calculate BMI and round it to two decimal places
  const BMI = (weight / ((height / 100) * (height / 100))).toFixed(2);

  // Determine BMI category, pointer position, and circle color
  let status = "";
  let pointerPosition = 0;
  let circleColor = "";

  if (BMI < 18.5) {
    status = "Underweight";
    pointerPosition = (BMI / 18.5) * 25;
    circleColor = "green";
  } else if (BMI < 25) {
    status = "Healthy";
    pointerPosition = 25 + ((BMI - 18.5) / 6.5) * 25;
    circleColor = "green";
  } else if (BMI < 30) {
    status = "Overweight";
    pointerPosition = 50 + ((BMI - 25) / 5) * 25;
    circleColor = "orange";
  } else {
    status = "Obese";
    // Limit the pointer position to 40 if BMI is greater than 40
    pointerPosition = Math.min(100, 75 + ((BMI - 30) / 10) * 25);
    circleColor = "red";
  }

  // Hide the result and animate its display
  resultDiv.classList.add("hidden");
  setTimeout(() => {
    resultDiv.innerHTML = BMI;
    resultDiv.classList.remove("hidden");
  }, 500);

  // Update the text, color, and circle color dynamically
  const categoryText = categoryDiv.querySelector(".category-text");
  const categoryCircle = categoryDiv.querySelector(".category-circle");

  categoryText.textContent = status;
  categoryCircle.style.backgroundColor = circleColor;

  // Update the pointer icon's left position to point to the corresponding section
  pointerIcon.style.left = `${pointerPosition}%`;

  // Update the comment text
  document.querySelector(".comment").innerHTML = `Comment: Your BMI is ${BMI}, which falls within the ${status} range.`;

});
