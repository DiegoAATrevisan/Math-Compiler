// Function to validate if a string contains a number
export function validarSeContemNumero(str) {
    // Create a regular expression object that matches any number
    const regex = /[0-9]/;

    // Use the test() method to test the regular expression against the input string
    if (regex.test(str)) {
        // If the test() method returns true, it means the input string contains a number
        return true;
    } else {
        // If the test() method returns false, it means the input string does not contain a number
        return false;
    }
}
