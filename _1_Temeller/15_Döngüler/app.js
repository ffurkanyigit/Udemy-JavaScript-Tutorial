// While Döngüleri
console.log("While...");
console.log("1. Döngümüz...");
let i = 0;
while (i < 10) { // sonsuz döngüye girmemesi için i'yi ya artırırım ya da azaltırım.
    console.log(i);
    i++; // i+=1 veya i=i+1
}
console.log("2. Döngümüz...");
let a = 10;
while (a > 0) {
    console.log(a);
    a -= 1; // a-- vaya a=a-1
}
console.log("3. Döngümüz...");
let b = 10;
while (b > 0) {
    console.log(b);
    b -= 2;
}
console.log("4. Döngümüz...");
const langs = ["Python", "Javascript", "Java"];
let index = 0;
while (index < langs.length) {
    console.log(langs[index]);
    index++;
}
// Break ve Continue
console.log("Break...");
let c = 0;
while (c < 10) {
    console.log(c);
    if (c == 5) {
        break;
    }
    c++;
}
console.log("Continue...");
let d = 0;
while (d < 10) {
    if (d == 3 || d == 5) {
        d++;
        continue;
    }
    console.log(d);
    d++;
}
// Do While    NOT: çok fazla kullanılmazlar.
console.log("Do While...");
let e = 0;
do {
    console.log(e);
    e++;
} while (e < 10);
// For
console.log("For Döngüsü...");
const diller = ["Python", "Javascript", "Java"];
for (let f = 0; f < diller.length; f++) {
    console.log(diller[f]);
}
// For each metodu : Herbir elemanın içinde tek tek gezin anlamına gelir.
console.log("For Each Metodu...");
diller.forEach(function (diller,f) {
    console.log(diller,f); // f index numaralarını yazdırmak için kullanılır.
});
// Map Fonksiyonu (frameworklar için gerekli)
console.log("Map Fonksiyonu...");
const users=[
    {name:"Furkan",age:28},
    {name:"Gürkan",age:26},
    {name:"Orhan",age:24}
];
const names=users.map(function(isim){
    return isim.name;
});
console.log(names);
// map fonksiyonunda isim adında bir değişken belirledik ve bu değişken users içinde tek tek gezinecek tabi bizim komutlarımız dahilinde.
// burada (isim.name) dediğimiz için users içindeki name'leri tek tek yazacak.
// burada yaşları sıralamak isteseydik "foksiyona tanımladığımız değişken adı.age" yazardık.
const ages=users.map(function(yas){
    return yas.age;
});
console.log(ages);
// For in Döngüsü
console.log("For-In Döngüsü...");
const kisi={
    name:"Furkan",
    age:28
};
for(let key in kisi){
    console.log(key,kisi[key]);
}