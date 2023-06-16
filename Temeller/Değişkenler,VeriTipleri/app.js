// Yorum Satırı
/*
Çoklu Yorum Satırı
*/
// Değişken Oluşturma
var a = 20;
var b = 10;
var c = 40;
console.log(a, b, c);

// Primitive Veri Tipi
// 1-Number Veri Tipi
var a = 10;
var b = 3.14;
console.log(typeof a);
console.log(typeof b);
// 2-String Veri Tipi
var name = "Furkan";
console.log(name);
console.log(typeof name);
// 3-Boolean Veri Tipi
var a = true;
console.log(a);
console.log(typeof a);
// 4-NULL Veri Tipi: Değişkenin hiçbir bilgi taşıdığını vurgulayan veri tipidir.
var x = null;
console.log(x);
console.log(typeof x);
// 5-Undefined Veri Tipi: Değer verilmesi unutulmuş.
var y;
console.log(y);
// Reference Veri Tipi :Js de veritipi object olarak görünen her veri tipi referans veri tipidir.
// 1-Array Veri Tipi
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(typeof numbers);
console.log(numbers[0]); //0. indeks' deki değeri gösterir.
// 2-Kendi objelerimizi oluşturduğumuz Veti Tipi
var person = {
    name: "Furkan",
    age: 25
}
console.log(person);
console.log(typeof person);
// 3-Date Object
var date = new Date();
console.log(date);
console.log(typeof date)
// 4-Fonksiyon
var merhaba = function () {
    console.log("Merhaba");
}
console.log(merhaba);
console.log(typeof merhaba);
// FARKLARI NEDİR?
// Örnek 1
var a = 10;
var b = a;
console.log(a, b);
a = 20;
console.log(a, b); //a değişti fakat b aynı kaldı.
// Örnek 2
var a = [1, 2, 3];
var b = a;
a.push(4); // a array'ına 4 rakamını ekler.
console.log(b); // a değişti ve b de değişti.