// Local Storage
/*
// Set Item
localStorage.setItem("Meyve","Elam");
localStorage.setItem("Tekrar",50); // önce string'e dönüşür öyle kayıt edilir.
// Get Item
const value= localStorage.getItem("Tekrar");
console.log(value);
console.log(typeof value);
*/
/*
// Clear Local Storage
localStorage.clear();
*/
/*
// Local storage den veri çekme: Eğer çekilecek veri mevcut değilse Null değer verir.
console.log(localStorage.getItem("sport"));  // olmadığı için Null değer döner.
*/
/*
if(localStorage.getItem("sport")===null){
    console.log("Sorguladığınız veri bulunmuyor.");
}
else{
    console.log("Sorguladığınız veri bulunuzyor.");
}
*/
// Local storage'e Array Yazdırmak. ÇOK ÖNEMLİ: çünkü localStorage sadece string değer kabul ediyor.
/*
const todos=["Todo 1","Todo 2","Todo 3"];
localStorage.setItem("todos",todos); // Fakat burada Array şeklinde ekleyemedik.
console.log(localStorage.getItem("todos")); // String şeklinde geldi. Array şeklinde değil.
*/
/*
const todos=["Todo 1","Todo 2","Todo 3"];
localStorage.setItem("todos",JSON.stringify(todos));   // Array şeklinde eklemeyi başardık. JSON.stringify kodu Array ifadeyi String gibi gösterdi.
const value=JSON.parse(localStorage.getItem("todos")); // JSON.parse kodu String gibi gösterdiğimiz ifadeyi yeniden Array'e dönüştürdü.
console.log(value);
*/

// ÖRNEK
const form = document.getElementById("todo-form");
const todoInput=document.getElementById("todo");
form.addEventListener("submit",addTodo);
function addTodo(e){
    const value=todoInput.value;
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos));
    e.priventDefault();
}