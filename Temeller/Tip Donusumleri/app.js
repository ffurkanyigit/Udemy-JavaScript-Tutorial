let value;
// Veri tipinden String'e çevirme
console.log("Veri tipinden String'e Çevirme: ");
value = 123;
console.log(value);
console.log(typeof value);
value = String(123);
//value = String(3.14);
//value = String(true);
//value = String(function () { console.log() });
//value = String([1, 2, 3, 4]);
//value = (10).toString();      nadir de olsa kullanılıyor.
//value = (3.14).toString();
console.log(value);
console.log(typeof value);

// Veri tipinden Sayılara çevirme
console.log("Veri tipinden Sayılara Çevirme: ");
value = Number("123");
//value = Number(null);          Başarılı
//value = Number(undefined);        Çevirme yapılamaz. İçinde değer yok.
//value = Number("Hello World");        Çevirme yapılamaz. İçinde metin var.
//value = Number(function () { console.log() });       Çevirme yapılamaz. İçinde fonksiyon var.
//value = Number([1, 2, 3, 4]);       Çevirme yapılamaz. İçinde array var.
//value = Number("3.14");        Başarılı
//value = parseFloat("3.14");    Başarılı
//value = parseInt("3");         Başarılı
console.log(value);
console.log(typeof value);

// Otomatik çevirme işlemleri
console.log("Otomatik Çevirme İşlemleri: ");
const a = "Hello" + 34;
console.log(a);
console.log(typeof a);      // Otomatik olarak 2 ifadeyi string yaptı.
const b = "34" + 53;
console.log(b);
console.log(typeof b);      // Otomatik olarak 2 ifadeyi string yaptı.
const c = Number("34") + 53;
console.log(c);
console.log(typeof c);      // Otomatik olarak 2 ifadeyi number yaptı ve toplamını verdi.

