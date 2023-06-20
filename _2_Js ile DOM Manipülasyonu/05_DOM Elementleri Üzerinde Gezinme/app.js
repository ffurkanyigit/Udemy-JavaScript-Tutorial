let value;
const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");
value = todoList;
value = todo;
value = cardrow;

// Child Nodes; Text Dahil alır
value = todoList.childNodes; // NodeList(9) diyor bunun anlamı; herbir li etiketinden sonra alt satıra geçmemizdir. eğer alt alta değil de yan yana yazsaydık 4 olarak görecektik. Yani childNodes komutu satır atlamalarını da child olarak sayıyor.
value = todoList.childNodes[0];
// Children - Element
value = todoList.children;
value = todoList.children[1];
value = todoList.children[todoList.children.length - 1];
value = todoList.children[2].textContent = "Değişti.";

value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Burası da değişti.";

value = todoList;
value = todoList.children[0]; // 1. Çocuğa ulaşmak için kullanırız. 1. YOL
value = todoList.firstElementChild; // 1. Çocuğa ulaşmak için kullanırız. 2. YOL
value = todoList.lastElementChild;
value = todoList.children.length; // 4. Çocuğumuz varmış. 1.YOL
value = todoList.childElementCount; // 4. Çocuğumuz varmış. 2.YOL

value = cardrow; // cardrow elementi
value = cardrow.parentElement; // cardrow elementinin ebeveyni
value = cardrow.parentElement.parentElement; // cardrow elementinin ebeveyninin ebeveyni

// Element Kardeşleri
value = todo; // 2. child
value = todo.previousElementSibling; // Bir önceki kardeşe gider. (1. kardeşe)
value = todo.nextElementSibling; // Bir sonraki kardeşe gider. (3. kardeşe)
value = todo.nextElementSibling.nextElementSibling; // Bir sonraki kardeşten sonraki kardeşe gider. (4. kardeşe)

value = todo.previousElementSibling.previousElementSibling; //null değer verir. Çünkü todo=2. kardeş öncesi 1. kardeş ancak onun da öncesi yok.

console.log(value);