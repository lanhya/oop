"use strict";
function getLargestNumber(numA, numB) {
    if (numA >= numB) {
        return numA;
    }
    else {
        return numB;
    }
}
var a = 40;
var b = 50;
console.log("The largest number is " + getLargestNumber(a, b));
var c = 10;
var d = 5;
console.log("The largest number is " + getLargestNumber(c, d));
var e = 10;
var f = 5;
console.log("The largest number is " + getLargestNumber(e, f));
//c2
function getWordRevers(words) {
    var result = [];
    for (var i = words.length - 1; i >= 0; i--) {
        result.push(words[i]);
    }
    return result;
}
