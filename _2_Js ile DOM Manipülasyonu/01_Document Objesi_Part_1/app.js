// console.log(window); // veya console.log(this);
// window veya this penceresi altından document kısmına erişelim.

// console.log(this.document); // document objesi sayesinde biz index.html içeriğine tamamen ulaşabiliriz.
// console.log(document); şeklinde de ulaşabilirdik.

let value;
value = document;
value = document.all; // HTMLAllCollection
value = document.all.length; // 44 adet index varmış.
value = document.all[0]; // Sıfırıncı indexte html elementi varmış.
value = document.all[6];
value = document.all[document.all.length - 1]; // son etiketimiz app.js elementiymiş.
// console.log(value);

// const elements = document.all;
// console.log(elements);  // HTMLAllCollection' a ulaşabiliriz.

/*
const elements = document.all;    // html collection
for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}
*/ // Bu istediğim gibi çıktı vermedi.


const elements=window.document.all;
// for(let i=0;i<elements.length;i++){
//     console.log(elements[i]);
// }

/*
elements.forEach(function(element){
    console.log(element);
}); // forEach fonksiyonunu html collection olduğu için kullanamıyoruz. forEach fonksiyonu Array'lerde kullanılır.
*/
/*
html collection'umuzu Array yapalım. forEach'i yeniden kullanalım.
const collections = Array.from(document.all);
console.log(typeof collections);
collections.forEach(function(collection){
    console.log(collection);
});
*/

// Diyelim ki body kısmına erişmek istiyorum. (8.indexmiş saydım.)
value=document.all;
// console.log(value);
value=document.all[8]; // 1. Yol
value=document.body;   // 2. Yol
// head için
value=document.head;
// charset
value=document.characterSet;
console.log(value);