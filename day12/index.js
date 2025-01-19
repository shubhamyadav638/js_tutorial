// difrance b/w ++a and a++  ye increment operator hote hai
//++a ----> a+1 kar dega 
// let a= 10
// let b= 20
// let c= ++a +b
// console.log(c)//31


//a++ ----> a+1 but ye next time me add karega 

let a= 10
let b= 20
let f =5
let c= a++ +f
console.log(c)//15 but ye next time me add karega
console.log(a)//11
let d=a++ +b +a +a // 11 + 20 + 12 +12
console.log(d)//55
console.log(a)//12 bcz increase value 12
console.log(b)//20

let z=a++ +b +a // 12 +20+13
console.log(z)//45

let u= a+ a++ +b  // 13+13+20
console.log(u)//46

let v= a+ a++ +b +a // 14 +14+20+15
console.log(v)//63