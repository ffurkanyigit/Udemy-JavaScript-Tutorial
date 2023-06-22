const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");
// Click Eventi
/*
title.addEventListener("click",run);  // Todolar başlığına tek tıklama yaparak veri gelir.
function run(e){
    console.log(e.type);
}
*/
/*
title.addEventListener("dblclick",run); // Todolar başlığına çift tıklama yaparak veri gelir.
function run(e){
    console.log(e.type);
}
*/
// Mouse Down eventi: mousla tıklayıp durduğumuz zamanlarda veri gelir. (keyDown eventinin aynısıdır.)
/*
title.addEventListener("mousedown",run);
function run(e){
    console.log(e.type);
}
*/
//Mouse Up eventi: mousla tıklayıp elimizi çektiğimizde veri gelir.
/*
title.addEventListener("mouseup",run);
function run(e){
    console.log(e.type);
}
*/
// Mouse Over eventi: Seçtiğimiz elementin üzerine geldiğimiz zaman veri gelmeye başlar. Tıklamaya gerek yoktur.
/*
title.addEventListener("mouseover",run);
function run(e){
    console.log(e.type);
}
*/
// Mouse Out eventi: Seçtiğimiz elementin üzerine gelip, çıktığımız zaman veri gelmeye başlar.
/*
title.addEventListener("mouseout",run);
function run(e){
    console.log(e.type);
}
*/

// NOT: mouseover eventi card-body içinde (birden fazla elementli kutu) farklı elementlerin içinde gezerken mouseover her defasında veri gönderir.
/*
cardBody.addEventListener("mouseover", run);
function run(e) {
    console.log(e.type);
}
*/
// NOT: mouseout eventi card-body içinde (birden fazla elementli kutu) farklı elementlerin içinde gezerken mouseout her defasında veri gönderir.
/*
cardBody.addEventListener("mouseout", run);
function run(e) {
    console.log(e.type);
}
*/
// mouseenter ve mouseleave eventi: Sadece bir elemente giriş ve çıkışta veri gelir. (out ve over gibi her seferinde veri gelmez.)
cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);
function run(e){
    console.log(e.type);
}



