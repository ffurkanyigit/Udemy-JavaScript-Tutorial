// Scope Kavramı: 3'e ayrılır.

// 1 Global Scope: Herşeyi kapsar

/*
function a(){
    2 Function Scope
}
*/

/*
if(){
    3 Block Scope: if-while-for olabilir...
}
*/
/*
var value1 = 10;
let value2 = 20;
const value3 = 30;
console.log(value1, value2, value3); 
*/
/*
function Funk() {
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    console.log(value1, value2, value3);
}
console.log(value1, value2, value3); // İsimleri aynı olsa bile scopları farklı oldukları için karışmazlar. Global Scope ve Function Scope için geçerlidir.
*/
/*
if(true){
    var a=10;
    let b=20;
    const c=30;
}
console.log(a); // Blok içinde tanımlanan var değişkenlerini blok dışında da kullanılırken diğer değişkenler kullanılamaz. (sadece var için geçerlidir.)
console.log(b);
console.log(c);
*/
/*
if (true) {
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    console.log(value1, value2, value3);  
}
console.log(value1, value2, value3); // Global Scope için tanımladığım value1 = 10 idi. Ancak block scopeta value1'e verdiğimiz değer global scopedeki value1 değerini ezdi. Sadece val değişkeni için geçerlidir.
*/

// GÜVENLİK İÇİN!!!

// Bu konu için bir örnek verelim;
var a = 123456; // Diyelim ki ben databasemin şifresini var ile oluşturdum.
if (true) {
    var a = 333333; // Fakat başka bir yerde herhangi bir block scope altında var=a oluşturursam eğer, benim global scopeta tuttuğum 123456 olan şifrem değişir ve beklenmedik hata alırım.
}
console.log(a);
// ÖNEMLİ: DEĞİŞMESİNİ İSTEMEDİĞİMİZ DEĞERLER var İLE TANIMLANAMAZLAR. let veya const KULLANILMALIDIR!!!