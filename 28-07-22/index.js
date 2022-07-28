let h1 = document.getElementById("head");
function add() {
  let input1 = document.getElementById("input1");
  let input2 = document.getElementById("input2");
  let z = parseInt(input1.value) + parseInt(input2.value);
  h1.innerHTML = z;
}
function sub() {
  let input1 = document.getElementById("input1");
  let input2 = document.getElementById("input2");
  let z = parseInt(input1.value) - parseInt(input2.value);
  h1.innerHTML = z;
}
function div() {
  let input1 = document.getElementById("input1");
  let input2 = document.getElementById("input2");
  let z = parseInt(input1.value) / parseInt(input2.value);
  h1.innerHTML = z;
}
function mlt() {
  let input1 = document.getElementById("input1");
  let input2 = document.getElementById("input2");
  let z = parseInt(input1.value) * parseInt(input2.value);
  h1.innerHTML = z;
}
