let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let add1 = document.getElementById("add");
let sub = document.getElementById("minus");
let div = document.getElementById("divide");
let mull = document.getElementById("mull");
let ans = document.getElementById("answ");

// here logic
//add
function fun_add() {
  let res = parseInt(num1.value) + parseInt(num2.value);
  ans.innerText = res;
}
add1.onclick = fun_add;

// sub
function fun_sub() {
  let res = (num1.value) - (num2.value);
  ans.innerText = res;
}

sub.onclick = fun_sub;

// mull
function fun_mull() {
  let res = (num1.value) * (num2.value);
  ans.innerText = res;
}

mull.onclick = fun_mull;

// divide

function fun_div() {
  let res = (num1.value) / (num2.value);
  ans.innerText = res;
}

div.onclick = fun_div;
