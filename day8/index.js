// ek tarika to ye hai ki hum a.onclick matlab event name se kar sakte hai
// a=document.getElementById('first')
// function changecolor(){
//     a.style.backgroundColor = 'green';
// }
// a.onclick= changecolor// action 


// second 

{/* <div id="first" onclick="document.write('hey radha')"></div> */}


// third is 

a=document.getElementById('first')
function changecolor(){
    a.style.backgroundColor = 'red';
}

a.addEventListener('click', changecolor)// first is event name and second is function name 

