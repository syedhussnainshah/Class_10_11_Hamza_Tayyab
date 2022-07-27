let btn = document.getElementById("TodoBtn");
let input = document.getElementById("TodoInput");
let h1 = document.getElementById("HeadResult");
btn.addEventListener("click", function () {
  h1.innerHTML = eval(input.value);
});
