// array-1
// let n = 5;
// let counter = 1;
// let result = [];
// for (let counter = 1; result.length < n; counter++) {
//   if (counter % 2 == 1) {
//     result.push(counter);
//   }
// }
// console.log(result);

// Array-2
// const arr = [4, 5, 7, 8, 6, 9];
// const son = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     son.push(arr[i]);
//   }
// }
// console.log(son.reverse());

//Array-3
// const arr = [4, 5, 7, 8, 6, 9];
// const son = [];
// for (let i = 0; i < arr.length; i++) {
//   son.push(arr[i], arr[arr.length - (i + 1)]);
// }
// console.log(son);

//Array-4
// buni bajara olmadim

//Array-5
// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!result.includes(arr[i])) {
//     result.push(arr[i]);
//   }
// }
// console.log(result);

//Array-6
// let arr = [7, 4, 9, 2, 3, 1, 5];
// let max = 0;
// let min = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }

//   if (min == 0) {
//     min = arr[i];
//   } else if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// const minIndex = arr.indexOf(min);
// const maxIndex = arr.indexOf(max);

// arr[minIndex] = max;
// arr[maxIndex] = min;
// console.log(arr);

//Array-7

////////////////////////////////////////
//uy ishidan ////

//Array-1
// const n = 5;
// let sum = [];
// for (let i = 1; i <= n; i++) {
//   sum.push(2 ** i);
// }

// console.log(sum);

//Array-2
// buni bajara olmadim
//

//Array-3
// const arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);

//Array-4
// let numbers = [4, 5, 7, 8, 6, 9];

// function sonlar(arr) {
//   let oddNumbers = arr.filter(function (num) {
//     return num % 2 !== 0;
//   });

//   oddNumbers.sort(function (a, b) {
//     return a - b;
//   });

//   return oddNumbers;
// }
// console.log(sonlar(numbers));

//Array-5
// let arr = [4, 5, 7, 8, 6, 9];

// let resultIndex = [];
// for (let i = 0; i < arr.length; i += 2) {
//   resultIndex.push(arr[i]);
// }
// console.log(resultIndex.join(" "));
// let sonIndex = [];
// for (let i = arr.length - 1; i >= 0; i -= 2) {
//   sonIndex.push(arr[i]);
// }
// console.log(sonIndex.join(" "));

//Array-6
// let arr = [4, 5, 7, 8, 6, 9];
// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
//}

//Array-7
// let arr = [4, 5, 7, 8, 6, 9];
// for (let i = arr.length - 1; i >= 1; i -= 2) {
//   console.log(arr[i]);
// }

//Array-8
// let arr = [4, 5, 7, 8, 6, 9];
// let n = arr.length;
// let result = [];
// for (let i = n - 1; i >= 0; i -= 2) {
//   result.push(arr[i]);
// }
// console.log(result.join(" "));

//Array-9
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let juftlar = [];
// let toqlar = [];

// for (let i = 0; i < arr.length; i++) {
//   juftlar.push(arr[i] * (arr[i] % 2 === 0));
//   toqlar.push(arr[i] * (arr[i] % 2 === 1));
// }
// console.log("Juft sonlar:", juftlar.filter((num) => num !== 0).join(" "));
// console.log("Toq sonlar:", toqlar.filter((num) => num !== 0).join(" "));

//Array-10
//Array-11
//Array-12
// bularni ishlay olmadim
