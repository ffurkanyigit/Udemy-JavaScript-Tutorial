// Elementi id'e göre seçme
let lelement;
element = document.getElementById("todo-form"); // bir id'den en fazla bir tane olacağı için tek sonuç alırız.
element = document.getElementById("tasks-title");
// Element Class'a göre seçme
element = document.getElementsByClassName("list-group-item"); // bir class'dan birden fazla olabileceği için HTML Collection sonucu alırız.
element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("card-header");
// Element Tag'e göre seçme
element = document.getElementsByTagName("li");
element = document.getElementsByTagName("div");
// Query Selector - Css Selector
// div,id,class vs. hiç fark etmeden hepsini tek komutla seçer.
// NOT: Query Selector sayfada ilk bulduğu elemanı seçer!!!---TEK BİR ELEMENT DÖNER---
element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");
element = document.querySelector(".list-group-item");
element = document.querySelector("li");
element = document.querySelector("div");
// QuerySelectorAll - TÜM ELEMANLARI SEÇER
element = document.querySelectorAll(".list-group-item");
console.log(element);

element.forEach(function(el){
    console.log(el);
});



