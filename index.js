const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = parseFloat(document.querySelector("#height").value);
  let weight = parseFloat(document.querySelector("#weight").value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight values!");
    return;
  }

  const heightUnit = document.getElementById("heightUnit").value;
  const weightUnit = document.getElementById("weightUnit").value;

  // Convert height and weight to cm and kg if necessary
  if (heightUnit === "m") {
    height *= 100; // Convert meters to cm
  } else if (heightUnit === "ft") {
    height *= 30.48; // Convert feet to cm
  }

  if (weightUnit === "lb") {
    weight *= 0.453592; // Convert pounds to kg
  }

  // BMI = weight in KG / (height in m * height in m)
  height = height / 100; // Convert cm to meters

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";

  if (BMI < 18.5) {
    status = "Underweight";
  }
  if (BMI >= 18.5 && BMI < 25) {
    status = "Healthy";
  }
  if (BMI >= 25 && BMI < 30) {
    status = "Overweight";
  }
  if (BMI >= 30) {
    status = "Obese";
  }
  document.querySelector(
    ".comment"
  ).innerHTML = `Comment: you are <span id="comment">${status}</span>`;
});
