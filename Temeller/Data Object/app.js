let value;
const now = new Date(); // İçine birşey yollmazsak eğer, şuan ki zamanı alır.
console.log(now);
// Özel bir zaman
const date1 = new Date("10-20-1995 06:15:10:05");
const date2 = new Date("October 20 1995");
const date3 = new Date("10/20/1995");
value = date1;
value = date1.getMonth(); // Ay bilgisini istedik ancak ocak ayı 0 (sıfır) kabul edildiği için "ekim ayı 9. aydır" sonucunu aldık.
console.log(value);
value = date1.getDate(); // Gün Bilgisini istedik.
console.log(value);
value = date1.getDay(); // Pazar gününü 0 (sıfır) kabul ederek başlar ve birer birer bize hangi güne denk geldiğini sayar.
console.log(value);
value = date1.getHours();
console.log(value);
value = date1.getMinutes();
console.log(value);
value = date1.getSeconds();
console.log(value);
value = date1.getMilliseconds();
console.log(value);
// Tarihi Değiştirmek.
date1.setMonth(7); // Ocak ayı 0 (sıfır) kabul edildiği için Ağustos ayına 7 dedik.
date1.setDate(15);
date1.setFullYear(1994);
date1.setHours(0);
date1.setMinutes(15);
date1.setMilliseconds(30);
value = date1;
console.log(value);