// Get the button element by its ID
let button = document.getElementById('btn');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Get the weight and height input values as floating-point numbers
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var result = document.getElementById('result');

    // Initialize status variables for height and weight validation
    let height_status = false;
    let weight_status = false;

    // Check if the height input is not a number or is less than or equal to 0
    if (isNaN(height) || height <= 0) {
        // Display an error message for invalid height
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    } else {
        // Clear the error message if height is valid and set the height status to true
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }

    // Check if the weight input is not a number or is less than or equal to 0
    if (isNaN(weight) || weight <= 0) {
        // Display an error message for invalid weight
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    } else {
        // Clear the error message if weight is valid and set the weight status to true
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }


    // If both height and weight are valid, calculate the BMI
    if (height_status && weight_status) {
        // Calculate the BMI using the formula (weight / ((height / 100) * (height / 100))) with two decimal places
        var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

        // Determine BMI category and display the result
        if (bmi < 18.6) {
            result.innerHTML = 'Underweight: ' + bmi;
            result.className = 'underweight'; // Apply the 'underweight' class
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = 'Normal: ' + bmi;
            result.className = 'normal'; // Apply the 'normal' class
        } else {
            result.innerHTML = 'Overweight: ' + bmi;
            result.className = 'overweight'; // Apply the 'overweight' class
        }
    } else {
        // Clear the result if either height or weight is invalid
        result.innerHTML = '';
        result.className = ''; // Clear any existing class
    }
});


// Check the currently focused input field
let activeInput = null;

// Add a focus event listener to the height input field
document.getElementById('height').addEventListener('focus', function () {
    // When the height input field gains focus, set activeInput to 'height'
    activeInput = 'height';
});

// Add a focus event listener to the weight input field
document.getElementById('weight').addEventListener('focus', function () {
    // When the weight input field gains focus, set activeInput to 'weight'
    activeInput = 'weight';
});

// Function to add the selected number to the input field
function addToInput(number) {
    // Check the value of activeInput to determine which input field is active
    if (activeInput === 'height') {
        // If the height input field is active, add the number to it
        document.getElementById('height').value += number;
    } else if (activeInput === 'weight') {
        // If the weight input field is active, add the number to it
        document.getElementById('weight').value += number;
    }
}


// Function to clear all the input fields
function clearInput() {
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
}

function eraseLastDigit() {
    // to check the value of activeInput to determine which input field is active
    if (activeInput === 'height') {
        // If the height input field is active and not empty
        let heightInput = document.getElementById('height'); // Get the height input element
        let heightValue = heightInput.value; // Get the current value of the height input
        if (heightValue.length > 0) { // Check if the input field is not empty
            heightInput.value = heightValue.slice(0, -1); // Remove the last character from the height input value
        }
    } else if (activeInput === 'weight') {
        // If the weight input field is active and not empty
        let weightInput = document.getElementById('weight'); // Get the weight input element
        let weightValue = weightInput.value; // Get the current value of the weight input
        if (weightValue.length > 0) { // Check if the input field is not empty
            weightInput.value = weightValue.slice(0, -1); // Remove the last character from the weight input value
        }
    }
}

