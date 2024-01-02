// The function multiplica takes in two numbers, num1 and num2, as arguments.
// It calculates the product of num1 and num2 and returns it.

export function multiplica(num1, num2){
    // Check if num1 and num2 are not undefined and not null.
    if(num1 === undefined || num1 === null || num2 === undefined || num2 === null){
        throw new Error("Both num1 and num2 should be valid numbers.");
    }

    // Check if num1 and num2 are valid numbers.
    if(isNaN(num1) || isNaN(num2)){
        throw new Error("Both num1 and num2 should be valid numbers.");
    }

    // Return the product of num1 and num2.
    return num1 * num2;
}