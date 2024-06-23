// 2. Sum of Digits
// Problem: Create a program  that takes a number as a string and returns the sum of its digits.
// Example: Input: "123" -> Output: 6 (1 + 2 + 3)


let str = "123" // Output: 6

// let sum =0
let mul = 1
for(let t of str){
    // console.log(t, typeof t)
    // sum = sum + +t
    // mul = mul * +t
    mul = mul * t

}
console.log(mul)

// strings to Number:

// let num = "123.5"
// let ans = parseInt(num) // "123"
// let ans = parseFloat(num) // "123.5"
// let ans = Number(num) // "123.5"
// let ans = +num
// let ans = num - 0
// let ans = num*1 
// let ans = num/1

// console.log(ans, typeof ans)



// str1, str2 => '+' works with strings

// - * / %, ** => works with  strings

// let str1 = "100" // 100
// let str2 = 20 // 20

// let ans = str1 * str2 

// console.log(ans, typeof ans) // 80, number