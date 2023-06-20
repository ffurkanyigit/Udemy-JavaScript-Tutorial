let value;
value = document;
value = document.scripts; // html kısmında 4 adet script olduğunu görüyorum.
// app.js script'i sayfanın en altında konumlandırılmazsa, altında kalan öğeler görünmez.
value = document.scripts.length;
value = document.scripts[0];
// Linkler
value=document.links;
value=document.links[0];
value=document.links[document.links.length-1];
value=document.links[document.links.length-1].getAttribute("class"); // son linkimizin classlarına ulaşır.
value=document.links[document.links.length-1].getAttribute("href"); // son linkimizin hreflerine ulaşır.
value=document.links[document.links.length-1].className;
value=document.links[document.links.length-1].classList;
// Formlar
value=document.forms;
value=document.forms.length;
value=document.forms[0];
// Formlarımızı name'lerine göre seçtik.
value=document.forms["form"]; // formumuza name="form" ekledik.
value=document.forms[0].id; // id'sini yakalamak için 1.Yol
value=document.forms[0].getAttribute("id"); // id'sini yakalamak için 2.Yol
value=document.forms[0].name;
value=document.forms[0].getAttribute("name");
value=document.forms[0].method; // methodunu gördük (GET-POST)
console.log(value);
