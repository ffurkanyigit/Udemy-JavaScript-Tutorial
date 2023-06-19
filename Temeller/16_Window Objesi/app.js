/*
console.log(this);  veya
console.log(window);  ikiside aynıdır. Javascript'in en genel objesidir.
*/
// Alert
// alert("Merhaba");
// Confirm
/*
const cevap=confirm("Emin misiniz?");
console.log(cevap);
if(cevap){
    console.log("Silinebilir.");
}
else{
    console.log("Silmeyin!!!");
}
*/
// Prompt: kullanıcıdan veri almak
/*
const cevap=prompt("2+2=?");
console.log(cevap);
console.log(typeof(cevap));
if(cevap=="4"){
    console.log("Doğru...");
}
else{
    console.log("Yanlış!!!");
}
*/

/*
let value;
value = window;
value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;
console.log(value);

if(confirm("Sayfa yenilensin mi?")){
    window.location.reload();
}
else{
    console.log("Sayfa Yenilenmedi...");
}
*/


let value;
value = window.outerHeight;    // Görünen sayfanın yüksekliğini verir.  (kapatma-büyütme kısımları dahil. en üst ile en alt)
value = window.outerWidth;     // Görünen sayfanın uzunluğunu verir. (kenar çerçeveler dahil.)
value = window.innerHeight;    // Çerçevesiz
value = window.innerWidth;     // Çerçevesiz
value = window.scrollX;        // x ekseninde scrollun ne kadar scroll ettiğini verir. (scroll'un ne kadar sağ tarafa kaydılrıldığını verir.)
value = window.scrollY;        // y ekseninde scroll'un ne kadar aşağıya kaydırıldığını verir.
console.log(value);


