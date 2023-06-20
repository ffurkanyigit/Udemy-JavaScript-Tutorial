const element = document.querySelector("#clear-todos");
// Element Özellikleri

/*
console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[1]);
console.log(element.textContent);
console.log(element.innerHTML); // içindeki html etiketleri dahil herseyi almak istediğimizi söylüyoruz.
console.log(element.href); 
console.log(element.style);
*/
 
// Style ve Element Özelliklerini Değiştirme...
/*
element.className = "btn btn-primary";
element.style.color = "#000";
element.style.marginLeft = "50px";
element.href = "https://www.google.com.tr";
element.target = "_blank";
console.log(element.textContent); // Alt satırda Değiştirdik.
element.textContent = "Silin...";
element.innerHTML="<span style= 'color:green'>Silinecek</span>";
*/
/*
const elements=document.querySelectorAll(".list-group-item"); // node list
// console.log(elements);
elements.forEach(function(el){
    el.style.color="red";
    el.style.background="aqua";
});
*/
let element2;
element2 =document.querySelector("li:first-child"); // "li:nth-child(1)"
element2 =document.querySelector("li:nth-child(2)");
element2 =document.querySelector("li:nth-child(3)");
element2 =document.querySelector("li:last-child");  // "li:nth-child(4)"
element2=document.querySelectorAll("li:nth-child(odd)") // 1. ve 3. çocuklar
element2=document.querySelectorAll("li:nth-child(even)") // 2. ve 4. çocuklar

element2.forEach(function(el){
    el.style.background="#ccc";
    el.style.color="red";

});

console.log(element2);

// console.log(element);
