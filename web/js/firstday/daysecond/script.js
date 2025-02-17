// 'use strict'; //error se bachne ke liye use karte hai ye error through kar deta hai

// function test(){
//     var a = "kuch bhi"

//     function test2(){
//         var b = "jyada ho gaya "
//         a = "change variable a"
//         console.log(a, b)
//     }
//     test2();
// }
// test();

// block level let and const

// data types

//1. primitive data types (string, number, boolean,undefined, null,bigint,symbol)   ye humare imutable hote hai

//2.non primitive or reference data types (array, object,function)  ye humare mutable hote hai

// var a =449469661646464944n // bigint
// var b= "hewvc c"  // string
// var c; // undefined
// var d = true // boolean
// var e = 66 //number
// var f= null; // null
// var g = symbol('bjbeb') // symbol
// var a =34
// console.log(typeof a)

// var a =['a', 'b', 'c', 64,594,9499,84]  // object
// console.log(typeof a)

// var obj ={
//     name: "shubham",
//     age: 22,
//     address: {
//         city: "delhi",
//         state: "uttar pradesh"
//     }
// }
// console.log(obj)

// console.log(typeof obj) // object

// var a =()=>{}

// console.log(typeof a)    // fun

// var b = function abc(){}
// console.log(typeof b)  // fuc

// airtmatic operator
// let x =5
// let y =6

// console.log(x+y)  //11
// console.log(x-y)  // -1
// console.log(x*y) // 30
// console.log(x/y) //0.8333333333334
// console.log(x%y) // 5 reminders
// console.log(x**y) //15625   power

// console.log(x++)  // increment karega but turant nahi  next step me iski value 6 ho jayegi
// console.log(++x)  // increment karega pahle value 6 thi ab 7 ho jayegi

// console.log(x--)  // decrement karega but turant nahi hoga isme x ki value  7  hogi pahle then 6 hogi next step me
// console.log(--x)  // decrement karega pahle value 6 thi ab 5 ho jayegi

// Assignment Operators

// let x = 5;

// x= 5+7
// or

// x += 7;
// x -= 2;
// x *= 3;
// x /= 2;

// console.log(x) // 12

//Understanding Comparison Operators in JavaScript

// let x=5;
// let b="5";

// console.log(x >= b) // true or false
// console.log(x <= b) // true or false
// console.log(x == b)  // true or false
// console.log(x ===b)  // true or false
// console.log(x !== b) // true or false

//Logical Operators in JavaScript: && (AND) & || (OR)

let a = 5;
let b = 5;
let c = 7;

// console.log(a==b && "hello") // hello

// console.log(a ==b && c==a && "hello")  // agar pahli condition false mil gaya to phir aage nahi check karega

// console.log(a==b || c==a ,"hello" ) // agar pahli condition true mil gaya to phir aage nahi check karega

// console.log(a==c || c==7 && c==7)  // && ki priority high hoti hai to pahle && wala check hoga agar or pahle check karna hai to or ko () me dal denge console.log((a==c || c==7 )&& c==7) but o/p same aayega

// Nullish Coalescing Operator (??)

// let x = null;

// if(x !==null && x !==undefined){
//     console.log('hii')
// }else{
//     console.log('bye')
// }   // bye

// let x = undefined;

// if(x !==null && x !==undefined){
//     console.log('hii')
// }else{
//     console.log('bye')
// } // bye

// let x = "null";

// if(x !==null && x !==undefined){
//     console.log('hii')
// }else{
//     console.log('bye')
// } // hii

// is if else ko short karte haoi  ?? ye if else ke jaisa kaam karta hai

// agar x ke andar koi value hai to x ki value print karo nahi to hello
// let x;
// console.log(x ?? "hello") // hello

// let x='';
// console.log(x ?? "hello") // yaha pr op blank aayega kyuki string ko value samjhega

// let x=null;
// console.log(x ?? "hello") // hello

// let x= undefined;
// console.log(x ?? "hello") // hello

// If-Else Statements

// let score = 90;

// if(score>=92){
//     console.log('pass')
// }else{
//     console.log("fail")
// }   // condition ke hiosab se chlega true hua to if block false hua to else block chlega



// isme agar pahli condition true hua to wahi block chlega next pr nahi jayega next pr tb jayega jb pahla condition false hoga 

// let score = 90;
// if (score >= 90) {
//   console.log("grade a");
// } else if (score >= 80) {
//   console.log("grade b");
// } else {
//   console.log("fail");
// }   // grade a 


