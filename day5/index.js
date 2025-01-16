// agar hum dono variable ko same name se acss.. karna chahte hai to ye last wala variable ko acssess karega 
// a= document.getElementById('first')
// a= document.getElementById('second')
// a.innerText= "hi  i am shubham"


// solution is variable ko hum  const bana de to variable ko hum change nahi kar sakte agar karenge to error throw karega 
// const a= document.getElementById('first')
// a= document.getElementById('second')//  eroor is  Assignment to constant variable.
// a.innerText= "hi  i am shubham"


// solution

const a= document.getElementById('first')
a.innerText= "hi  i am shubham"