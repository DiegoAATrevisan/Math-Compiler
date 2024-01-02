// Define the function to divide two numbers.
export function divide(num1, num2) {
    // Check if the divisor (num2) is zero.
    if (num2 == 0) {
        // Return an error message if the divisor is zero.
        return "Error: Division by zero is not allowed.";
    } else {
        // Return the quotient if the divisor is not zero.
        return num1 / num2;
    }
}

// The 'export' keyword is used to export functions, variables, and objects from a module.
// The 'function' keyword is used to declare a function.
// The parameters 'num1' and 'num2' are used as inputs to the function.
// The 'if' statement is used to check a condition.
// The 'return' statement is used to return a value from the function.
// The '/' operator is used to perform division.