let value;
const numbers = [43, 56, 33, 23, 35, 5];
const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7); // Çok fazla kullanılan bir yöntem değildir.
const langs = ["Python", "Java", "C++", "Javascript"];
const a = ["Merhaba", 22, null, undefined, 3.14];
value = numbers.length;
console.log(value);
// Indexleme
value = numbers[0];
console.log(value);
value = numbers[numbers.length - 1]
console.log(value);
// Herhangi bir indexteki değeri değiştirmek.
numbers[2] = 1000;
value = numbers;
console.log(value);
// Index of
value = numbers.indexOf(1000);
console.log(value);
// Arrayin sonuna değer eklemek - Push
numbers.push(2000);
value = numbers;
console.log(value);
// Arrayin başına değer eklemek - Push
numbers.unshift(3000);
value = numbers;
console.log(numbers);
// Sonundan değer atmak.
numbers.pop();
value = numbers;
console.log(value);
// Başından değer atmak.
numbers.shift();
value = numbers;
console.log(value);
// Belirli bir kısmı atmak.
numbers.splice(0, 3);
value = numbers;
console.log(value);
// Array'imizi ters çevirir.
numbers.reverse();
value = numbers;
console.log(value);
// Array içindeki değerlerimizin ilk rakamına göre küçükten büyüğe sıralama yapar.
value = numbers.sort();
console.log(value);
// Fonksiyon kullanarak sıralamak.
value = numbers.sort(function (x, y) {
    // küçükten büyüğe sıralamak
    return x - y;
});
console.log(value);
// Fonksiyon kullanarak sıralamak.
value = numbers.sort(function (x, y) {
    // büyükten küçüğe sıralamak
    return y - x;
})
console.log(value);