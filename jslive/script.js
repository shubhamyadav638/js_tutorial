// inspact karke source me jake script.js me jake 1ko select karke debug karenge uske baad page refres karenge to ek global window object banega global ke andar kafi event listner and alert onchange rahenge

// let -- block scope --- ye script ka part hai
// var -- function-scope -- ye window ka part hai 
// const --  block scope --- ye script ka part hai or isko dubara same variable me decleare nahi kar sakte


// var a ="shubham";  // jb hum isko debug karenge to ye window object me variable store ho jayega isiliye var me varible declere nahi karte
// console.log(a);  // insko ab globaly kahi per accsess kar sakte hai like console me window.a se

// const b = 'ayubjb'; // jb hum isko debug karenge to ye window object me nahi ek script ke andar aayega or isko hum window me accsess nahi kar sakte
// console.log(b)  // insko window.b se undefined aayega kyuki ye global nahi hai

// let c = 'ishhsuh';  // jb hum isko debug karenge to ye window object me nahi ek script ke andar aayega or isko hum window me accsess nahi kar sakte
// console.log(c)      // insko window.c se undefined aayega kyuki ye global nahi hai

//huhwjdhuh    // isko as varible dhoondhega and browser sumjh nahi payega or error through kar dega  (huhwjdhuh is not defined)

// let a;
// console.log(a) // undefined

// var b ;
// console.log(b) // undefined

// const c;
// console.log(c)  // SyntaxError: Missing initializer in const declaration  isko initialize karte hai pahle

// let a ='jgjg';
// a='bjg';          // let me same name ka varible bana sakte hai or print last wala hi hoga
// console.log(a)

// var b = 'bjbajb' ;
// b='bjbbkbkb'          // var me same name ka varible bana sakte hai or print last wala hi hoga
// console.log(b)

// const c='nkhhn';
// c='bkabk'   ;       // TypeError: Assignment to constant variable. ek baar assign kar diya to dubara nahi kar sakte
// console.log(c)

// function test() {
//   var a = "shu";

//   if (false) {
//     var a = "ayu";
//     console.log(a);    // false hai to ye block chlega hi nahi
//   }

//   console.log(a);  // shu
// }
// test();

// function test() {
//     var a = "shu";

//     if (true) {
//       var a = "ayu";
//       console.log(a); // ayu       // ye true ho gaya to last me a ke andar ayu hi hai to dono me ayu print karega
//     }

//     console.log(a);  // ayu
//   }
//   test();

// function test() {
//   var a = "shu";
//   var b = "gudwwg";

//   function test2() {
//     var a = "ayu";
//     console.log(a); // ayu    // bcz ye var ab ek fun ke andar hai to usko hum fun ke andar use kar sakte hai
//     console.log(b); //gudwwg
//   }
//   test2();
//   console.log(a); // shu   // bcz ye var ab ek fun ke andar hai to usko hum fun ke andar use kar sakte hai
// }
// test();



// function test() {
//   let a = "shu";

//   if (true) {
//     let a = "jbisbx"; //isko  var nahi bana  sakte bcz upar hum let me initilize kar diye hai or var humara fun scope hai
//   }
//   console.log(a); // shu
// }
// test();


