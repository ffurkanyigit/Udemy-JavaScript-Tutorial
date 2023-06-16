const process = 1; // değişkene 1 dediğimiz için case 1' e girer. Değişken 2 veya 3 olsaydı, case 2 veya case 3' e girerdik.
switch (process) {
    case 1:
        console.log("işlem 1"); // işlem 1 gerçekleşir ekrana yazı yazılır ve break komutuna gelir. 
        break; // İşlem başarılı switch-case yapısından çık demektir. Eğer break kullanmazsak diğer case'lerde break görene kadar girer. 
    case 2:
        console.log("işlem 2");
        break;
    case 3:
        console.log("işlem 3");
        break;
    default:
        console.log("geçersiz işlem");
        //break; burada break kullansakta olur kullanmasakta çünkü altında başka case yok.
}
