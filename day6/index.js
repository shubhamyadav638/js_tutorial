//datatypes
let a=100 // number 
let b="hello world" // string
let c=true // boolean
let d; // undefined
let e=null // null
let f=66131164416164414449164449494944n; // bigint



// const is simple means constant value agar a ke andar 200 rakh diya matlab a ke andar 200 hai kisi bhi tarah se chanage kar sakte hai
// const a =200

// if (true)
    // {
    // const a =100  // 100 ko hum block se bahar acsses nahi kar sakte 
    // }


// diffrance is var and let
// scope --- means variable kaha create ho raha kaha Destroy ho raha

//let ---- it is a block scope variable 

// if (true)
// {
// let a =100  // 100 ko hum block se bahar acsses nahi kar sakte 
// }



//var ---- it is a function scope variable hota hai 

// if (true)
// {
// var a =100  // 100 ko hum kahi pr acsses  kar sakte 
// }



// but var ko hum function se bahar acsses nahi kar sakte
 
function myFunction() {
    // yha pr acsses kar sakte
    if (true)
        {
        var a =100  // 100 ko hum block ke bahar acsses  kar sakte  but function ke bahar acsses nahi kr sakte
        }
        
 }
