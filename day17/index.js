// ye to run ho jayega but mai chahta hu ki ye kuch time baad run ho 
// function add(){
//     console.log("i am shubham")
// }
// add()



// kuch time baad run karne ke liye hum setinterval ya settimeout lagega ye dono time ko manupulate karte hai
function add(){
    console.log("i am shubham")
}

// setTimeout do chizze leta hai first kon sa fun chlana hai and second kitne time baad chlana hai wo millisecond me hota hai

setTimeout(add, 3000) // 3 second me add chlana hai


// har 5 second baad ye i am shubham print hona chahiye to uski jagah setinterval use hota hai

setInterval(add, 5000) // 5 second me add chlana hai 5000 millisecond me hota hai



