let ism=prompt("Ismingizni kiriting");
document.write(ism)
let yosh=+prompt("Yoshingizni kititing");

let yil=2022-yosh;
document.write("  Siz " + yil + "-yilsiz");

let oy=yosh*12;
document.write("  Siz " + oy +" oy yashagansiz");

let kun=yosh*365;
document.write("  Siz " + kun +" kun yashagansiz");

let hafta=kun/7;
document.write("  Siz " + hafta +" hafta yashagansiz");

let soat=kun*24;
document.write("  Siz " + soat +" soat yashagansiz");

let minut=soat*60;
document.write("  Siz " + minut +" minut yashagansiz");

let sekund=minut*60;
document.write("  Siz " + sekund +" sekund yashagansiz");

