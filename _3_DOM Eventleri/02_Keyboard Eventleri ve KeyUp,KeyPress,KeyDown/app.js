// Klavye Eventleri
// 1- keypress: sadece harflere ve sdayılara atama yapabiliriz.
/*
document.addEventListener("keypress", run);
function run(e){
    // console.log("Herhangi bir tuş veya herhangi bir rakama basıldı.");
    // console.log(e.which); // Hangi karaktere bastığımızı ASCII tablosuna göre bize verir.
    console.log(e.key); // Hangi karaktere bastığımızı doğrudan bize verir.
}
*/
// 2- keydown: klavyedeki her karakter basıldığı anda tetikler.
/*
document.addEventListener("keydown", run);
function run(e){
    console.log(e.key);
}
*/
// 3- keyup: klavyedeki her karaktere basmaya bıraktığımız anda tetiklenir.
/*
document.addEventListener("keyup", run);
function run(e){
    console.log(e.key);
}
*/
// ÖRNEK: Bir Todo Girin kutucuğuna yazdığımız yazı hemen üstünde yazan Todo List kısmında görünsün?
const header = document.querySelector(".card-header"); // Bir Todo Giriniz yazan input kısmı.
const todoInput = document.querySelector("#todo"); // Todo List yazan başlık kısmı.
// keyup ile yapmak istiyorum...
document.addEventListener("keyup", changeText);
function changeText(e) {
    header.textContent = e.target.value; // .value ile aldığımız değerleri header'imiza yazacağız. (alt satır sadece aldığımız değeri görmek için. Yoruma alabiliriz.)
    console.log(e.target.value); // BİZ BİR INPUT KISMINDA YAZILANI ÇEKMEK İSTERSEK e.target.value KULLANIYORUZ...
}