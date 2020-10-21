/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
*/

function addBinary(a,b) {
binary = '';
for(c=a+b; c>0; (c/2)){
binary= (c%2) + binary;
c=Math.floor(c/2);
}
return binary;
}
