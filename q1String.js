// String Reversal
// Problem: Write a program  that reverses a given string.
// Example: Input: "hello" -> Output: "olleh"


// let str = "Hello" // Output: "olleH"

// let revString = ""

// for(i = str.length-1; i>=0; i-- ){
//     // console.log(str[i])
//     revString = revString + str[i] // "olleH"
// }

// console.log(revString)


// for(i=0; i<=str.length-1; i++){
//   console.log(str[i])
// }

// let newStr = ""
// for(let t of str){ // t = "H", "e", "l", "l", "o"
//     // console.log(t)
//     newStr = t + newStr
//     // newStr = "H" + "" = "H"
//     // newStr = "e" + "H" = "eH"
//     // newStr = "l" + "eH" = "leH"
//     // newStr = "l" + "leH" = "lleH"
// }
// console.log(newStr)


// 3+4  = 4 + 3

// "a" + "b" != "b" + "a"

// "ram"

//    mar


// 3rd Approach: (inbuilt functions)
// let str = "Hello"
//  console.log(str.reverse())


// split() -> converts string to array => ["H", "e", "l", "l", "o"] ["Ram", "is", "dancing", "on", "the", "floor] , ["121", "002", "400"]


// let arr = []
// for(let t of str){
//     arr.push(t)
// }
// console.log(arr) // ["H", "e", "l", "l", "o"]

// let arr = str.split("")  // ["H", "e", "l", "l", "o"] => "Hello"
// console.log(arr)


// join() -> converts array to string => "Hello"
// let arr1 = ["H", "e", "l", "l", "o"]
// let arr1 = [10, 20, 30, 40, 50]

// console.log(arr1.join("")) 


// reverse() -> reverses the array => ["o", "l", "l", "e", "H"]

// console.log(arr1.reverse())





let str = "Hello" // Output: "olleH"

// let arr = str.split("") // ["H", "e", "l", "l", "o"]
// let revArr = arr.reverse() // ["o", "l", "l", "e", "H"]
// console.log(revArr.join(""))

console.log(str.split("").reverse().join(""))