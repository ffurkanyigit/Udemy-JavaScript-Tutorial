// VAR (Değişken Tanımlama)
var a;
a = 10;
console.log(a);
var name = "Furkan";
var name = "Yiğit";
console.log(name);
// Let (Değişken Tanımlama)
let name2 = "Furkan Yiğit";
console.log(name2);
name2 = "Osman";
console.log(name2);

// var ile let arasındaki fark?
//let name3="Furkan Yiğit";
//let name3="Osman"; // let anahtar kelimesiyle tekrarlı tanımlama yapılamaz.

let b, c;
b = 10;
c = 20;
console.log(b + c);

// Const (Değişken Tanımlama) : Değişken değeri sonradan değiştirilemez.
//const name3 = "Furkan";
//console.log(name3);
//name3 = "Osman";
//console.log(name3);

//const d;
//d = 10;
//console.log(d); Bu durumda hata verir. Const anahtar kelimesi için tanımlamalar sonradan yapılamaz.

const e = [1, 2, 3, 4, 5];
console.log(e);
//e = [1, 2, 3, 4, 5, 6]; Const için değişken değeri sonradan değiştirilemez.
e.push(6); //Ancak bu durum hata vermez. Çünkü e'nin gösterdiği yer değişmiyor sadece değeri değişiyor.
console.log(e);