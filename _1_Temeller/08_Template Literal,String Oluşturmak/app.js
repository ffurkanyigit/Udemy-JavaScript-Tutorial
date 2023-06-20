const name = "Furkan Yiğit";
const department = "Bilişim";
const salary = 4000;
console.log("Eski ve uzun yöntem.")
const a = "İsim: " + name + "\n" + "Departman: " + department + "\n" + "Maaş: " + salary;
console.log(a);
// Alt Gr ve ;; tuşlarına basarak backtick işaretini elde edebiliriz.
console.log("Yeni yöntem.")
const b = `İsim: ${name}\nDepartman: ${department}\nMaaş: ${salary}`;
console.log(b);
// html sayfamızın içinde body'nin altına listemizi ekledik. Yine eski ve uzun bir yöntem.
const html = "<ul>" +
    "<li>" + name + "</li>" +
    "<li>" + department + "</li>" +
    "<li>" + salary + "</li>" +
    "</ul>"
document.body.innerHTML = html;
// html sayfamızın içinde body'nin altına listemizi ekledik. Yeni yöntem.
function c() {
    return "Merhaba";
}
const html2 = `
<ul>
<li>${name}</li>
<li>${department}</li>
<li>${salary}</li>
<li>${10 / 4}</li>
<li>${c()}</li>
</ul>
`;
document.body.innerHTML = html2;
