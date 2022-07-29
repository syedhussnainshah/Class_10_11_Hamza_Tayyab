let input = document.getElementById("TodoInput");
let btn = document.getElementById("addbtn");
btn.addEventListener("click", function () {
  let ul = document.getElementById("unorder");
  let li = document.createElement("li");
  let inputCreate = document.createElement("input");
  inputCreate.setAttribute("type", "text");
  inputCreate.setAttribute("value", input.value);
  li.appendChild(inputCreate);
  ul.appendChild(li);
  console.log(ul);

});
