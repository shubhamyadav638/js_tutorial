function cal(val1, val2) {
  return val1 * val2;
}
console.log(cal(8, 5));



// window, self, this, globalThis these are same in js 

// window == self  // op is true
// this == globalThis // op is true
// this == window // op is true
// this == self // op is true



var aG ="shubham"     // ye window ka part ban gaya hai

function greet(){              // ye bhi window ka part ban jayega
    console.log("Hello",aG);
}


function test(){
    var b ='ayushi'
}


// VARIABLE

// js sync chlta hai means line by line jaha eroor milega wahi ruk jayegi

// console.log(x);
// console.log(y);
var x= 'x';
// console.log(y);
var y= 'y';
console.log(x);
console.log(y)
console.log(z);   
let z= 'z';
console.log(z);
console.log(k);
const k= 'k';
console.log(k);

