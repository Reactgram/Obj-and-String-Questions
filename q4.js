
// String Case Analyzer
// Problem: Develop a program  that determines if a given string consists entirely of uppercase letters, lowercase letters.
// Example: Input: "HELLO" -> Output: "Uppercase"
// Input: "helloworld" -> Output: "Lowercase"


// let str = "hello123" // Output: "Not entriely Uppercase"


// let s1 = str.toLowerCase()  // "hello123"

// let str2 = str.toUpperCase() // "HELLO"


// if(str == s1){
//     console.log("Entirely  Lowercase")
// }
// else if(str == str2){
//     console.log("Entirely Uppercase")
// }

let str = "hello1" // 6
let l = str.length

let capitalCount = 0
let smallCount = 0
for(let t of str){
   if(t>"A" && t<"Z"){
         capitalCount = capitalCount + 1
   }
   else if(t>"a" && t<"z"){
        smallCount = smallCount + 1
   }
}

if(l == capitalCount){
    console.log("Entirely Uppercase")
}
else if(l == smallCount){
    console.log("Entirely Lowercase")
}
else{
    console.log("Not entirely Uppercase or Lowercase")
}



// conditional operators on strings 

// let s1 = "A" // 65
// let s2 = "5" // 53

// console.log(s1>s2)

// let s1 = "A" // 65
// let s2 = "a" // 97

// console.log(s1>s2) // false


// let s1 = "RaZzzzz"  // 90
// let s2 = "Rajaaa"  // 97-122

// console.log(s1>s2)