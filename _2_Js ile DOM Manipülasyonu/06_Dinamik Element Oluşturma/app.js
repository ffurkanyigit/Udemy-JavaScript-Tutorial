// Yeni Elemet Oluşturma
// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1]; // 2 adet card-body class'ı var. Biz 2. sini istiyoruz.
newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

/*
// Text Content
// newLink.textContent="Farklı Sayfaya Git"; // Bu hiç güvenli bir yöntem değil.

// Text Node : En güvenli Yol.
const text = document.createTextNode("Naber");
cardbody.appendChild(text); // En son çocuktan sonra eklemek için kullanılır.
console.log(cardbody); 
*/

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));
cardbody.appendChild(newLink);
console.log(newLink);