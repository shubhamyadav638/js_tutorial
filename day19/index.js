// callback function

// function callback(n){
//     console.log(n)
// }
// callback('hi i am shubham') // jo bhi pass karenge wo parameter se cath kar sakte hai





// parameter me hum fun bhi bhej sakte hai

function callback(n,fun){
        console.log(n)//hi i am shubham
        fun()//krishna
        console.log(n)//hi i am shubham
    }
    // is second  fun ko callback function use karte hai
    function second(){  
        console.log("krishna")
    }

    callback('hi i am shubham',second)