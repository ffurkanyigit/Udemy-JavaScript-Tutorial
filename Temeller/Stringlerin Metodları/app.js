let value;
const firstName = "Louis";
const lastName = "Armstrong";
const langs = "Java,Python,C++";
value = firstName + " " + lastName;
console.log(value);
value = "Furkan Yiğit";
value = "Osman" + " " + value;
console.log(value);
value += " " + "KisaYol";
console.log(value);
value = firstName.length;
console.log(value);
value = firstName.concat(" ", lastName, " ", " Caz"); // firstName+" "+lastName+" "+"Caz"
console.log(value);
value = firstName.toLowerCase();
console.log(value);
value = firstName.toUpperCase();
console.log(value);
value = firstName[0];
console.log(value);
value = firstName[firstName.length - 1]; // Harf sayısını bilmediğimiz durumlarda son harfini öğrenmek için kullanırız.
console.log(value);
// Index Of
value = firstName.indexOf("L");
console.log(value);
value = firstName.indexOf("D"); // Aradığımız harfin olmaması durumunda -1 sonucunu alırız.
console.log(value);
// Char At
value = firstName.charAt(0);
console.log(value);
value = firstName.charAt(firstName.length - 1);
console.log(value);
// Split
value = langs.split(","); // Virgül ile ayırmış olduğumuz langs değerlerini tek tek array'lara ayırır.
console.log(value);
// Replace
value = langs.replace("Python", "CSS");
console.log(value);
// Includes
value = langs.includes("Java"); // Aradığımız "Java" üyesi lang içerisinde varsa true döner yoksa false dönecek.
console.log(value);
value = langs.includes("Matlab");
console.log(value);