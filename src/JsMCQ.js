// 1.What is the output of
// function f1() {
//     console.log(“this is”, this);
//     console.log(“arguments is”, arguments);
// }
// f1()

// Choices are
// a.Null, null
// b.Undefined, undefined
// c.global, arguments
// d.f1, undefined
// --->ANS->c(global,arguments)

// 2) in the above function f1, I do the 
// following

// let f11 = f1.bind({ a: 1 }, "abc");
// f11("def");

// What is the output now ?

// Choices are
// a.Null, null
// b.Undefined, undefined
// c.{a:1}, arguments = [“abc”, “def”]
// d.{a: 1}, arguments = [“def”]
// ANS->c({a: 1}, arguments = ["abc",“def”])

// 3) Write a simple function that will split an array into chunks with a specified size.
// Example - array = [1,2,3,4,5]
// chunkSize = 1 output = [1] [2] [3] [4] [5]
// chunkSize = 2 [1, 2] [3, 4] [5]
// chunkSize = 3 [1, 2, 3] [4, 5]
// chunkSize = 4 [1, 2, 3, 4] [5]
// chunkSize = 5 [1, 2, 3, 4, 5]
// chunkSize = 6 [1, 2, 3, 4, 5]

// Function signature is
// const splitIntoChunk=function (array, chunkSize) {
//
// for (i=0; i < arr.length; i += chunkSize) {

//   let tempArray;
//   tempArray = arr.slice(i, i + chunkSize);
//   console.log(tempArray);
// }

// }
// const array = [1, 2, 3, 4, 5];
// const chunkSize = 1;
// splitIntoChunk(array, chunkSize);
