// variable hoisting

var num2
console.log(num2)
num1 = 22
num2 = 33
console.log(num1 + num2)
var num1
console.log(num1)

// // function hoisting - directiy declaring a function

// mul(8,12)
// mul(21,4)
// function mul(num3,num4){
//     console.log(num3 * num4)
// }
// mul(10,2)
// mul(4,7)

// function hoisting - declaring function to variable

 mul(3,4)
 mul(5,9)

var mul = function(num3,num4){
    console.log(num3 * num4)
}

mul(5,9)
mul(13,7)

