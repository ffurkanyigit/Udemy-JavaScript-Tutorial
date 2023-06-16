// Fonksiyon Tanımlama
function merhaba() {
    console.log("Merhaba");
}
merhaba(); // Fonksiyon Çağrısı (Function Call)
merhaba();
merhaba();
function merhaba1(name, age) {
    if (typeof name === "undefined") name = "Bilgi Yok";
    if (typeof age === "undefined") age = "Bilgi Yok";
    console.log(`İsim:${name} Yaş:${age}`);
}
merhaba1("Furkan", 28);
merhaba1("Ayşe", 30);
merhaba1();
function merhaba2(name = "Bilgi Yok", age = "Bilgi Yok") {
    console.log(`İsim:${name} Yaş:${age}`);
}
merhaba2("Furkan", 28);
merhaba2();
merhaba2("Gürkan");
// Fonksiyonlarda Retun'a Giriş
function multi(x) {
    console.log(2 * x);
}
let a = multi(5);
// Fonksiyonlarda Return
function square(x) {
    return x * x;
    console.log("Naber"); // Return aynı zamanda fonksiyonu bitiren komuttur. Dolayısıyla altında yazılan hiçbir kod çalışmaz.
}
function cube(x) {
    return x * x * x;
}
let b = square(12);
b = cube(b);
console.log(b);

let c = cube(square(12));
console.log(c);

function merhaba3() {
    return "Merhaba";
}
console.log(merhaba3());
// Function Expression : Biz değişkenimize fonksiyon eşitledik.
const merhaba4 = function (name) {
    console.log("Merhaba "+name);
}
merhaba4("Furkan");
// Immediately Invoked Function Expression (IIFE): Tanımlandığı yerde çalışan fonksiyon türü
(function(name){
    console.log("Merhaba "+name);
})("Orhan");
// Bir objenin içinde eğer bir fonksiyon varsa; bunlara metod denir.
// Objenin dışında varsa fonksiyon denir.
// metod veya fonksiyon diyebiliriz.
const database={
    host:"localhost", // properties
    add:function(){
        console.log("Eklendi"); // 4 adet metod
    },
    get:function(){
        console.log("Elde Edildi");
    },
    update:function(id){
        console.log(`Id:${id} Güncellendi`);
    },
    delete:function(id){
        console.log(`Id:${id} Silindi`);
    }
}
console.log(database.host);
database.add();
database.delete(10);