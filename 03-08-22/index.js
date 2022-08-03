let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let input = document.getElementById("todoinput");
  let ul = document.getElementById("unorder");
  let li = document.createElement("li");
  let inputTodo = document.createElement("input");
  inputTodo.setAttribute("type", "text");
  inputTodo.setAttribute("value", input.value);
  inputTodo.setAttribute("readonly", "readonly");
  let edit = document.createElement("button");
  edit.innerHTML = "Edit";
  edit.setAttribute("class", "btn btn-primary");
  let del = document.createElement("button");
  del.innerHTML = "Delete";
  del.setAttribute("class", "btn btn-danger");

  edit.addEventListener("click", function () {
    if (edit.innerHTML == "Edit") {
      edit.innerHTML = "Save";
      inputTodo.removeAttribute("readonly", "readonly");
    } else {
      inputTodo.setAttribute("readonly", "readonly");
      edit.innerHTML = "Edit";
    }
  });
  if (input.value == "") {
    alert("Your Message Is Empty");
  } else {
    li.appendChild(inputTodo);
    li.appendChild(edit);
    li.appendChild(del);
    ul.appendChild(li);
  }
});
