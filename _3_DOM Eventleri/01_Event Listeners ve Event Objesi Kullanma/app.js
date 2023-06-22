const filterInput = document.getElementById("filter");
// id'si filter olan kısma tıkladığımızda olmasını istediğimiz eventleri ayarlamak için 2 yol vardır.
// 1. YOL olan onfocus özelliği :eski ve az kullanılan bir yoldur.
/*
filterInput.onfocus = function(){
    console.log("1.YOL"); // id'si filter olan kısma tıkladığımızda konsola Naber yazacak.
}
*/
// 2. YOL addEventListener özelliği
/*
filterInput.addEventListener("focus",function(){
    console.log("2.YOL");
}); 
*/
// Biz ayrıca 2.yolu daha fazla bilgi almak için kullanacağız.
/*
filterInput.addEventListener("focus",function(e){
    console.log(e); // focus event objesi olduğunu görebiliyoruz.
    console.log(e.type); // eventin tipine baktık.
    console.log(e.target); // event nerede oluşmuş.
    console.log(e.target.placeholder);
    console.log(e.target.className);
});
*/
// Kırmızı Todo Ekleyin butonu submit olduğunda event ekleyelim.
const todoForm = document.getElementById("todo-form"); 
todoForm.addEventListener("submit",submitForm);
function submitForm(e){
    console.log("Submit Eventi"); // Butona bastığımız anda yazı geliyor evet ama sayfa yenilendiği için kayboluyor.
    e.preventDefault(); // BU KOD EN ALTA YAZILMALIDIR!!!
    // Form özelliğinin default özelliği olan submit butonuna bastığımızda sayfanın yenilenmesini iptal eder.
}

