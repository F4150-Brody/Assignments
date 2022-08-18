



//!------Oyuna devam mı diye soran kod-------------------

console.log("_______((GUEST GAME'e HOŞGELDİNİZ))_______")
let istek = "e"
while (istek == "e" || istek == "E") {
    istek = prompt("Oyun oynamak istiyor musun:E/H?")
    if (istek == "e" || istek == "E") {
        let hak = 5;
        let tahmin

        const rastgele = Math.round(Math.random() * 100);
        console.log(rastgele);
        do{
            tahmin =Number(prompt("0-100 arası bi tahmin lütfen:"));
            hak -= 1;
            if (tahmin === rastgele) {
                alert(`👏👏👏👏👏👏TEBRİKLER!!! ${5 - hak} KEREDE BİLDİN.👏👏👏👏👏👏`);
                break;
            }else if (tahmin < rastgele) {
                console.log("🔼artır🔼")
                }else console.log("🔽azalt🔽");
        }while(hak > 0);
        
        if (tahmin !== rastgele){
        alert("😐GAME OVER😐")
        }
        }else if (istek == "h" || istek == "H") {
        break;
        }else {alert("Lütfen sadece E veya H giriniz!");
        istek = prompt("E/H:");
        }                
}






//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.
//PSEUDO CODE
//* 1- hak =5
//* 2- Raskele sayı tut (0-100)
//* 3- Kullanıcan tahmin iste (tahmın)
//* 4- hak=hak-1
//* 5- eğer (tahmin =?rasgele)
//*        print(Tebrikler Bildiniz)
//*    değilse (tahmin < rasgele)
//*        print(Arttır)
//*    değilse(tahmin > rastgele)
//*        print(Azalt)
//* 6- eğer (hak > 0 )
//*       goto stage-3
//*   değilse
//*       print(üzgünüz)



/* let hak = 5;
const rastgele = Math.round(Math.random() * 100);
console.log(rastgele);

let tahmin;
do {
  tahmin = Number(prompt("Lutfen 0-100 arasinda bir tahmin giriniz:"));
  hak -= 1;
  if (tahmin === rastgele) {
    console.log(`Tebrikler ${5 - hak} kerede bildiniz.`);
    break;
  } else if (tahmin < rastgele) {
    console.log("ARTTIR ⬆️");
  } else {
    console.log("AZALT ⬇️");
  }
} while (hak > 0);

if (tahmin !== rastgele) {
  console.log("Uzgunuz oyunu kaybettiniz 😔😔");
}

 */
