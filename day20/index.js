
let arr =["shubham", "yadav","male",24,38,44,33,46]

// agar hume array me aise value ko store kar sakte hai but iski exact meanig kya hai ye hume nahi pata hota to hum isko suppose kar sakte hai bs but iska actual solution hai ki hum isko key & value me store kar sakte hai means object me store kar sakte hai

let obj = {
    "name": arr[0],
    "lastName": arr[1],
    "gender": arr[2],
    "age": arr[3],
    "marks1": arr[4],
    "marks2": arr[5],
    "marks3": arr[6],
    "marks4": arr[7]
}

console.log(obj.gender)

// but agar hum mark1 ko variable me store kar de to kaise use karenge

let a = arr[4]  
console.log(a)// agar mai isko obj.a se acsses karunga to ye obj ke andar a ko dhoondhega 




let person = {
    "name": "krishna",
    "lastName": "yadav",
    "gender": "male",
    "age": 22,
    "marks1": 55,
    "marks2": 46,
    "marks3": 38,
    "marks4":22
}

let b = "name"

console.log(person[b]) // agar mai isko person.b se acsses karunga to ye person ke andar name ko dhoondhega

let d=person.lastName // aise bhi acsses kar sakte hai

console.log(c)