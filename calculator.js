// Function to start the calculator
function startCalculator() {
    let results = []; // Array to store the results of each calculation
    while (true) {
        let x = prompt("Enter the first number:");
        if (x === null) break; // Exit loop if Cancel is clicked
        let y = prompt("Enter the second number:");
        if (y === null) break;
        let operator = prompt("Enter an operator (+, -, *, /, %): \nPress Cancel to stop the calculator"); // Prompt for the operator
        if (operator === null) break;

        // Convert user input to numbers
        x = parseFloat(x);
        y = parseFloat(y);
        let result;

        // Check if inputs are valid numbers
        if (isNaN(x) || isNaN(y)) {
            result = "Error: Invalid number"; // Display error if inputs are not numbers
        } 
        
        else {
            // Perform the calculation based on the operator chosen
            switch (operator) {
                case "+":
                    result = x + y;
                    break;
                case "-":
                    result = x - y;
                    break;
                case "*":
                    result = x * y;
                    break;
                case "/":
                    result = y !== 0 ? x / y : "Error: Division by zero"; // Check for division by zero
                    break;
                case "%":
                    result = x % y;
                    break;
                default:
                    result = "Error: Invalid operator"; // Display error for invalid operator
            }
        }

        results.push(result); // Add the result to the array
        // Display the calculation in a table
        document.write("<table border='2'>");
        document.write("<tr><th>x</th><th>Operator</th><th>y</th><th>Result</th></tr>");
        document.write("<tr><td>" + x + "</td><td class='center'>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
        document.write("</table>");
    }

    // If there are results, display the summary table
    if (results.length > 0) {
        // Filter out invalid results
        let validResults = results.filter(res => typeof res === "number");
        if (validResults.length > 0) {
            let min = Math.min(...validResults);
            let max = Math.max(...validResults);
            let total = validResults.reduce((acc, curr) => acc + curr, 0);
            let avg = total / validResults.length;

            // Display summary in a table
            document.write("<table border='2'>");
            document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
            document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
            document.write("</table>");
        }
    }
}

// Wait for document to fully load before running the script
window.onload = startCalculator;
