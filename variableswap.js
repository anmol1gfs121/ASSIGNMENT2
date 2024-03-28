/*Problem 3: Variable Swap
 Write a JavaScript program to swap the values of two variables without using a 
temporary variable.*/

var A,B;
A=parseInt(prompt("Enter first value : "));
B=parseInt(prompt("Enter first value : "));
A=A+B;
B=A-B;
A=A-B;
console.log("After swapping the value of 'A' and 'B' are : ",A," AND ",B)