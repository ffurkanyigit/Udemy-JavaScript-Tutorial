// Karşılaştırma Operatörleri
// ==   Eşittir
// ===  Üç eşittir işareti değerler ve tipler aynı mıdır diye kontrol eder? En sağlıklı yöntemdir !!!
// !=
// !==
// >
// <
// >=
// >=
console.log(2 == 2);
console.log("js" == "java");
console.log(2 == "2"); // burada cevap true çıkar ancak false çıkması lazım çünkü tipler farklı.
console.log(2 === "2");// burada cevap false çıkar çünkü tipleri farklı. Üç eşittir işareti değerler ve tipler aynı mıdır diye kontrol eder? En sağlıklı yöntemdir !!!
console.log(4 > 2);
console.log(2 > 4);
console.log(2 != 4);
console.log(2 != 2);
console.log(4 >= 2);
console.log(2 >= 4);
// Mantıksal Bağlaçlar
console.log("not operatörü: !");
console.log(!(2 != 2));
console.log("and operatörü: &&");
console.log((2 == 2) && ("Ahmet" == "Ahmet"));
console.log("or operatörü: ||");
console.log((4 == 2) || ("Ahmet" == "Ahmet"));
// IF KOŞULLARI
console.log("if koşulları");
/* if (koşul){
     if bloğu
 } */
const error = false;
if (error == true) {
    console.log("Hata Oluştu.");
}
else {
    console.log("Hata Oluşmadı.");
}

const user = "mmc";
if (user === "mmc") {
    console.log("Kullanıcı Bulundu.");
}
else {
    console.log("Kullanıcı Bulunmadı.");
}

const process = "3";
if (process === "1") {
    console.log("işlem 1");
}
else if (process === "2") {
    console.log("işlem 2");
}
else if (process === "3") {
    console.log("işlem 3");
}
else {
    console.log("Geçersiz işlem.");
}

const number = 120;
if (number == 100) {
    console.log("Sayı 100'e eşit.");
}
else {
    console.log("Sayı 100'e eşit değil.")
}

// Ternary Operatörü: if-else işlemlerini daha kolay bir biçimde yazmamızı sağlar.
console.log(number === 100 ? "Sayı 100" : "Sayı 100 Değil");
// Eğer koşul basit tek satırlık bir koşulsa süslü parantezleri kaldırabiliriz.
const number2 = 100;
if (number2 === 100) console.log("sayı 100");
else console.log("sayı 100 değil");