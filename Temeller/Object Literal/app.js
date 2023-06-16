let value;
const programmer = {
    name: "Furkan Yiğit",
    age: 28,
    email: "f.furkanyigit@gmail.com",
    langs: ["Python", "Javascript", "C++"],
    adress: {
        city: "Bursa",
        street: "Güneştepe"
    },
    work: function () {
        console.log("Programcı Çalışıyor...");
    }
}
value = programmer;
console.log(value);
// İstediğimiz herhangi bir kısmı çekebiliriz.
value = programmer.email; // Genel olarak tercih edilir.
console.log(value);
value = programmer["email"];
console.log(value);
// 
value = programmer.langs;
console.log(value);
//
value = programmer.adress.city;
console.log(value);
// Object içindeki fonkisyonu çekmek için kullanılır.
programmer.work();
//
const programmers = [
    { name: "Furkan Yiğit", age: 28 },
    { name: "Gürkan Yiğit", age: 26 },
    { name: "Orhan Yiğit", age: 24 }
];
value = programmers[0];
console.log(value);
value = programmers[0].name;
console.log(value);