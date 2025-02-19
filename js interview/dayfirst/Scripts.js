//hoisting
// console.log(a) // undefined bcz hoisting not supported initialisation
// var a= 10;
// console.log(a) // 10


// console.log(b) // Cannot access 'b' before initialization because hoisting  is not supported
// let b=200
// console.log(b) // 200



// console.log(b) // Cannot access 'b' before initialization because hoisting  is not supported
// const b=200
// console.log(b)//200



// console.log(typeof typeof typeof typeof typeof 100);
// op--- string

// function abc(){
//     console.log(abc.xyz);
// }

// abc() // undefined bcz hoisting
// abc.xyz = 100
// abc.xyz=500
// abc.xyz=600
// abc()  // 600


// abc() //  hoisted and op is hello
// function abc(){
//         console.log('hello');
//     }
//     abc()// op is hello

    
    // abcd()// not hoisted
    // const abcd = function(){
    //     console.log("bubq")
    // }
    // abcd()// op is bubq

//event propagation-- there three phases
// 1. Capturing Phase (Event Capturing)
// element.addEventListener('click', handler, { capture: true });

// 2. Target Phase


// 3. Bubbling Phase (Event Bubbling)
// element.addEventListener('click', handler);

// ex--
{/* <div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
  const parent = document.getElementById('parent');
  const child = document.getElementById('child');

  // Event Listener for Parent (Bubbling Phase)
  parent.addEventListener('click', () => {
    console.log('Parent clicked (Bubbling)');
  });

  // Event Listener for Child (Target Phase)
  child.addEventListener('click', () => {
    console.log('Child clicked');
  });

  // Event Listener for Parent (Capturing Phase)
  parent.addEventListener(
    'click',
    () => {
      console.log('Parent clicked (Capturing)');
    },
    { capture: true }
  );
</script> */}



// const number = [1, 2, 3, 4, 5]
// number[100]=500
// console.log(number) // op [ 1, 2, 3, 4, 5, <95 empty items>, 500 ]   it is vailid but not an right manner


// const arr = [...'shubham']
// console.log(arr) // [  's', 'h', 'u','b', 'h', 'a','m']

// const numbers = [...[1, 2, 3, 4, 5, 5]];
// console.log(numbers); // [1, 2, 3, 4, 5, 5]

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 5];
// const combined = [...array1, ...array2];
// console.log(combined); // [1, 2, 3, 4, 5, 5]



//The parseInt function in JavaScript parses a string and converts it to an integer. It works by reading the string from left to right and stops parsing when it encounters a non-numeric character that cannot be part of the number.

// console.log(parseInt('10+2'))//10     parseInt starts parsing from the beginning of the string.It reads '10' as a valid number and stops at '+' because it is not a numeric character
// console.log(parseInt('7FM'))//7     parseInt starts parsing and reads '7' as a valid number.It stops at 'F' because it is not a valid numeric character in the default base (base 10).
// console.log(parseInt('M7F'))//NaN    parseInt starts parsing and encounters 'M', which is not a valid numeric character.Since the first character is invalid, parseInt returns NaN (Not-a-Number).



// console.log(isNaN('shubham'))// true


// console.log([1,2].map(num=>{   //The map method creates a new array by applying the provided callback function to each element of the array.If the callback does not explicitly return a value, the result for that element in the new array will be undefined.
//     if(num>0) return;            //if (num > 0) evaluates to true, so the function hits the return statement without returning a value.This results in undefined for each element.
//     return num *2
// })) // op is  [ undefined, undefined ]


// function abc(){
//     return;
// }
// console.log(abc()) // undefined

// 'use strict';//In strict mode, functions declared inside a block ({}) are block-scoped.
// {
// function abc(){
//     console.log('shubham')
// }
// // abc();// op is shubham
// } //----- is block-scoped.
// abc();// op/ shubham




// function abc(a,b){
// 'use strict';
// a=100;
// b= 200;
// return arguments[0]+ arguments[1];
// console.log(a+b);
// }

// console.log(abc(300,400))



// Key Operations That Mutate Arrays
// Adding Elements:

// push(): Adds elements to the end.
// unshift(): Adds elements to the beginning.
// Removing Elements:

// pop(): Removes the last element.
// shift(): Removes the first element.
// Modifying Elements:

// Direct assignment: arr[index] = value.
// splice(): Adds, removes, or replaces elements.
// Sorting or Reversing:

// sort(): Sorts the array in place.
// reverse(): Reverses the array in place.



// Immutable Alternative
// If you want to work with arrays immutably (creating new arrays instead of modifying the original), you can use methods like map(), filter(), or concat().

// javascript
// Copy code
// let arr = [1, 2, 3];

// // Immutable addition
// let newArr = [...arr, 4];
// console.log(newArr); // Output: [1, 2, 3, 4]
// console.log(arr);    // Output: [1, 2, 3] (unchanged)

// // Immutable removal
// let filteredArr = arr.filter(num => num !== 2);
// console.log(filteredArr); // Output: [1, 3]
// console.log(arr);         // Output: [1, 2, 3] (unchanged)




// const arr = [1,2,3,4,5,6,7,8]
// const newArr = arr.find(num=> num >4)
// console.log(newArr)//op is 5


// const arr = [1,2,3,4,5,6,7,8]
// const newArr = arr.filter(num=> num >4)
// console.log(newArr)//[ 5, 6, 7, 8 ]


// const arr = [1,2,3,4,5,6,7,8]
// const newArr = arr.find(num=> num ===4)
// console.log(newArr)//op is 4



// const arr = [1,2,3,4,5,6,7,8]
// const newArr = arr.filter(num=> num ===4)
// console.log(newArr)//op is [ 4 ]



// const arr = [1,2,3,4,5,6,7,8]
// const newArr = arr.map(num=> num >4)
// console.log(newArr)//[false, false,false, false,true,true,true,true]


// diffrance between react and angular 
// React: A JavaScript library focused on building user interfaces (UIs).
//Angular: A full-fledged framework for building complex web applications.

//React: Primarily uses JavaScript (with JSX for component structure).
//Angular: Primarily uses TypeScript, a superset of JavaScript that adds static typing and other features.

//React: One-way data binding, where data flows from parent to child components.
//Angular: Two-way data binding, where changes in the UI automatically update the underlying data model, and vice versa


// diffrance b/w frameworks and libraries

// Frameworks: it contains libraries

// Libraries: it contains the modules 


// diffrance b/w usememo and usecallback



// lifecycle methods 


// can you write useEffects syntax
// useEffect(()=>{},[])
          //or 
// useEffect(()=>{
// return()=>{}
//     },[])


// const [data , setdata]=useState('')
// useEffect(()=>{},[data])


// diffrance b/w useState and useReducer


// diffrence b/w Contextapi and  redux


// do you know prop driling

// whats the role of app.jsx file

// what is jsx 

// whats role of babel 

//tell me the difference between realdom and virtualdom 

// form validation how do you do 


// what is hireorder components in react

// do you know synthatic events

// what is action

// do you know about jest

// do you know about webpack

// have you work wiht prograsive web apps 


// html 

//Do you know about void element

// there is no closing tag (is called empty tag)
{/* <br/> , <img> ,<hr> */}


// there is datalist tag and there is select tag have you odd of it

//what is used of required attributes

// there is novalidate attribute

// there is html and there is xhtml


// css

//css combinators

//sudo classes in css

// do you know and how to add 3d transformation

// different between grid and flexbox

// flexbox and grid are 2d or 3d


// 1. backend me data secure kaise karte hai 
// 2. event loop in node js
// 3. dotenv hi kyu 
// 4. spred and rest
// 5. map filtter and reducer
// 6. express
// 7. event propagation
// 8. axios , fetch
// 9. map ko reverce kaise use karenge 
// 10. module.export and export difrent
// 11. redux 
// 12. jwt
// 13. recursion
// 14. callbacks
// 15. promiss why used try catch
// 16. why are using react 
// 17. sync and async
// 18. setenterval 10 min baad cleare kaise karenge
// 19. sql port


// ishika 
// 1. functional and class components
// 2. props routes and routing
// 3. hooks use state ,useeffects,usecontext,usereducer
// 4. sufferance b/w react and html css difference
// 5. key in sql
// 6. dql
// 7. oops
// 8. where and having
// 9. for foreach
// 10. join type
// 11. class and object
// 12. constructor
// 13. sdlc
// 14. array
// 15. link list
// 16. diff between c and cpp
// 17. what is procedural language
// 18. garvage collector
// 19. exception handling
// 20. primary key and foreign key
// 21. temporal deadzone
// 22. hoisting and how to prevent hoisting
// 23. flex properties
// 24. flex wrap
// 25. centering div
// 26. promises
// 27. empty string
// 28. reverse string





// let arr=['🥚','🐓']

// let b=arr.sort();
// console.log(b)



