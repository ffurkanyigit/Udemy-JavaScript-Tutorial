// Dinamik Element Silme
const todoList = document.querySelector("ul.list-group");
const todos=document.querySelectorAll("li.list-group-item");
// Remove Metodu

todos[2].remove();
console.log(todos); // 1. Yol

// Remove Child
todoList.removeChild(todoList.lastElementChild); // 2. Yol
todoList.removeChild(todos[1]); // 3. Yol
console.log(todoList);