/*Problem 4: Convert Celsius to Fahrenheit
Write a JavaScript program that converts a given temperature in Celsius to 
Fahrenheit.
Formula:
°F = (°C × 9/5) + 32 */

var F, C = parseInt(prompt("Enter the celcius in degree : "))
F = (C * 9/5) + 32
console.log("Calculated fahrenheit : ",F + " F")