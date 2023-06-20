const todoInput = document.getElementById("todo");
let element;
element = todoInput;
element = todoInput.classList; // Sadece 1 adet class'ımız var. Biz bu form-control class'ının yanına 2 tane yeni class eklemek istiyoruz. 

todoInput.className = "form-control newClass3";  // 1. YOL ile yeni bir class ekledik.

todoInput.classList.add("newClass"); // 2.YOL ile yeni bir class ekledik.
todoInput.classList.add("newClass2");
todoInput.classList.remove("form-control");
element = todoInput;

element = todoInput.Placeholder; // 1.YOL ile placeholder
element = todoInput.getAttribute("placeholder"); // 2.YOL ile placeholder
todoInput.setAttribute("placeholder", "Yeni PlaceHolder");
todoInput.setAttribute("title", "Input"); // Yeni bir attribure eklemek istersek.
todoInput.removeAttribute("name"); // name attriburemizin silmesi için removeAttribute kullandık
element = todoInput;

/*
element=todoInput.hasAttribute("required"); // required attriburemizin olup olmadığını kontrol eder. Olmadığı için false döner
element=todoInput.hasAttribute("name");     // name attriburemizin olup olmadığını kontrol eder. Olduğu için true döner
*/



console.log(element);