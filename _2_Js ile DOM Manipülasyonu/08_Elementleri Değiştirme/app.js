// REPLACE
// <h5 class="card-title" id = "tasks-title">Todolar</h5>
const cardbody = document.querySelectorAll(".card-body")[1]; // 2 adet card-body class'ı var bize 2. si lazım.
const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "Yeni Todolar"; // Burada güvensiz olan textcontent kullandık. Ancak sorun yok çünkü tek bir yazımız olacak.
// Eski Element
const oldElement = document.querySelector("#tasks-title");
cardbody.replaceChild(newElement, oldElement);
console.log(newElement);