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

// let a = 5;
// let b = 5;
// let c = 7;

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

//❓ Ternary Operator & Nested Conditions

// let marks = 60;

// if(marks >= 70){
//     console.log("pass")
// }else{
//     console.log("fail")
// }

// using Ternary Operator

// marks >= 70 ? console.log("pass") : console.log("fail");

// Nested Conditions

// let number = 10;
// let number1 = 50;

// if (number === 10) {
//   console.log("pass b+");
//   if (number1 >= 51) {
//     console.log("pass a++");
//   } else{
//     console.log("fail")
// }
// } else {
//   console.log("fail");
// }

// Nested Conditions using Ternary Operator

// number ===10 ? (console.log("pass b+"), number1===5 ?  console.log("pass a++") :console.log("fail") ) :console.log("fail")

// Switch Case in JavaScript

// agar break nahi lagayenge to sb print ho jayega

// let fruits = 'apple';

// switch (fruits) {
//     case 'apple':
//         console.log('I love apples!');
//         break;
//     case 'banana':
//         console.log('I love bananas!');
//         break;
//     case 'orange':
//         console.log('I love oranges!');
//         break;
//     default:
//         console.log('I don\'t like this fruit.');
//         break;
// }

// let fruits = 'apple';

// switch (fruits) {
//     case 'apple':
//     case 'banana':
//         console.log('I love bananas!');
//         break;
//     case 'orange':
//         console.log('I love oranges!');
//         break;
//     default:
//         console.log('I don\'t like this fruit.');
//         break;
// }       // o/p     I love bananas!

//    While & Do While Loops in JavaScript

// let x = 1;
// while (x <=5){
//    console.log(x)
// }   // ye infinite loop me chla jayega

// let x = 1;
// while (x <= 5) {
//   console.log(x);
//   x++;
// }  //op  12345

// let pass = ""; 
// while (pass !== 'abc') {
//     pass = prompt("Enter the password:"); 
//     console.log(pass); 
// }
// console.log("Access granted!");


// do while

// let x = 1;
// do{
//    console.log(x);
//    x++;
// }while (x <= 5)   // op 12345

// let x = 1;
// do{
//    console.log(x);
// }while (x >= 5)   // 1    atleast ek baar print hoga agar condition false bhi hoti hai to

// let pass = "";
// do {
//   pass = prompt();
// } while (pass != "shu");
// alert("login success");
// console.log("welcome shubham");  // jb tk password ki value match nahi hogi tb tk prompt se user value leta rahega jb match hogi to prompt hat jayega

// For Loop in JavaScript


// for(let x=1; x <= 5; x++){
//    console.log(x);
// }    // op is 12345


// for (let pass = ""; pass !== 'abc'; pass = prompt("Enter the password:")) {
//    console.log("Loop executed");
// }
// console.log("Loop ended");


// loop ke andar loop 



// for(let x=1; x <= 5; x++){
//    console.log(x);
//    for(let y=1; y <= 5; y++){
//       console.log(y);
//       for(let z=1; z <= 5; z++){
//          console.log(z);
//       }
//    }
// }  // pahle x 1 hoga phir y ka pura block chlega 12345 print karega phir x ki value increse hoke 2 hogi to 2 peint hoga the phir y chlega 12345 aise hi chlega 
