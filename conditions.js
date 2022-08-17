console.log("all is well");

//-------------------ODEV1---------------------

/* const n1 = +prompt("bir sayı girin");
const opt = prompt("operatör girin");
const n2 = +prompt("bir sayı daha girin");
if (opt === "+") {
    console.log(`sonuc ${n1 + n2}`);
}else if (opt === "-") {
    console.log(`sonuc ${n1 - n2}`);
}else if (opt === "*") {
    console.log(`sonuc ${n1 * n2}`);
}else if (opt === "/") {
    console.log(`sonuc ${n1 / n2}`);
}else console.log("lütfen + - / * gibi bir operatör giriniz");
 */

//---------------ODEV2------------------------------------

/* let day = +prompt("ogrenmek istediginiz gunu 1 ile 7 arasında belirtin ");
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
        day = "InClass";
        break;
    case 5:
        day = "Teamwork";
        break;
    case 6:
        day = "InClass + Workshop";
        break;
    case 7:
        day = "Self-Study";
        break;
    default:
        alert("gun 1-7 arasında olmalıdır");
        break;
};
console.log(day);  */


//------------ODEV3--------------------------

/* let maas = +prompt("maasınızı giriniz");
if (maas < 5500) {
    maas *= 1.5
} else if (maas > 5500) {
    maas *= 1.1
}
console.log(`yeni maasınız ${maas}`);


 */

// ODEV4

// --------1.YONTEM-----------

/* const gelir = +prompt("geliriniz?");
const gider = +prompt("gideriniz?");
const fark = (gelir - gider);
if (fark >= 5500) {
    console.log("kredi alabilirsiniz");
}else console.log("kredi veremeyiz");
 */

// --------2.YONTEM-----------

/* const gelir = +prompt("geliriniz?");
const gider = +prompt("gideriniz?");
let fark = (gelir - gider);
console.log(fark >= 5500 ? "kredi pozitif" : "kredi negatif");

 */