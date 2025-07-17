

// Tanlash operatoriga oid masalalar :
// masala 1

// let kun = 3;

// switch (kun) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;
//   default:
//     console.log("Noto'g'ri kun raqami");
// }

// masala 2

// let baho=5

// switch (baho) {
//   case 1:
//     console.log("Yomon");
//     break;
//   case 2:
//     console.log("Qoniqarsiz");
//     break;
//   case 3:
//     console.log("Qoniqarli");
//     break;
//   case 4:
//     console.log("Yaxshi");
//     break;
//   case 5:
//     console.log("A'lo");
//     break;
//     default:
//         console.log("Xato baholanish :")
// }

// masala 3

// let fasl=11

// switch (fasl) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Qish");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Bahor");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Yoz");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Kuz");
//     break;
//     default:
//         console.log("Noto'g'ri oy raqami :")
// }

// masala 4

// let oy=9

// switch (oy) {
//     case 2:
//         console.log("Bu oy 28 yoki 29 kun :")
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("Bu oy 30 kun bor :")
//       break;
//       default:
//         console.log("Bu oy 31 kundan iborat :")
// }

// masala 5

// birinchi usul

// let a=34
// let b=6
// let c=2

// res=0

// switch (c) {
//   case 1:
//     res = a + b;
//     break;
//   case 2:
//     res = a - b;
//     break;
//   case 3:
//     res = a * b;
//   case 4:
//     res = a / b;
//     break;
//   default: res="Bunday amal mavjud emas:"
// }

// console.log(res)

// let a=3
// let b=5

// let amal=2

// switch (amal) {
//   case 1:
//     console.log("Qo'shish amal :", a + b);
//     break;
//   case 2:
//     console.log("Ayirish amal :", a - b);
//     break;
//   case 3:
//     console.log("Ko'paytirish amal :", a * b);
//     break;
//   case 4:
//     console.log("Bo'lish amal :", a / b);
//     break;
//     default:
//         console.log("Bunday amal yo'q")
// }

// masala 6

// let a=1
// let b=1000

// res="";

// switch (a) {
//   case 1:res=b/10;break;
//   case 2:res=b/1000;break;
//   case 3:res=b;break
//   case 4:res=b/1000;break;
//   case 5:res=b/100;break;
//   default:res = "Notog'ri birlik kiritilgan :";
    
// }

// console.log(res)

// masala 7

// let a=100000;
// let b=3

// res="";

// switch (b) {
//   case 1:res=a;break
//   case 2:res=a/= 10 ** 6; break;
//   case 3:res=a/= 10 ** 3; break;
//   case 4:res=a*= 10 ** 3; break;
//   case 5:res=a/= 10 ** 2; break
//     default: a="Bunday og'irlik turi mavjud emas :";
// }

// console.log(res)

// let a = 45; 
// let b= 4; 

// switch (b) {
//   case 2:
//     a /= 10 * 6;
//     break;
//   case 3:
//     a /= 10 * 3;
//     break;
//   case 4:
//     a *= 10 * 3;
//     break;
//   case 5:
//     a *= 10 * 2;
//     break;
//     default:a="Bunday og'irlik turi mavjud emas :"
// }

// console.log(a)

// masala 8

// let d=33
// let m=22
// let res=""
// let err=" oyda bunday kun mavjud emas :"

// switch (m) {
//   case 1:
//     {
//       if (d >= 1 && d <= 31) {
//         res = d + "-yanvar";
//       } else {
//         res = "Yanvar " + err;
//       }break;
//     }
    
//   case 2:
//     {
//       if (d >= 1 && d <= 28) {
//         res = d + "-fevral";
//       } else {
//         res = "fevral " + err;
//       }break;
//     }
    
//   case 3:
//     {
//       if (d >= 1 && d <= 31) {
//         res = d + "-mart";
//       } else {
//         res = "mart " + err;
//       }break;
//     }
    
//   case 4:
//     {
//       if (d >= 1 && d <= 30) {
//         res = d + "-aprel";
//       } else {
//         res = "aprel " + err;
//       }break;
//     }
    
//   case 5:
//     {
//       if (d >= 1 && d <= 31) {
//         res = d + "-may";
//       } else {
//         res = "may " + err;
//       }break;
//     }
    
//   case 6:
//     {
//       if (d >= 1 && d <= 30) {
//         res = d + "-iyun";
//       } else {
//         res = "iyun " + err;
//       }break;
//     }
    
//   case 7:
//     {
//       if (d >= 1 && d <= 31) {
//         res = d + "-iyul";
//       } else {
//         res = "iyul " + err;
//       }break;
//     }
    
//   case 8:
//     {
//       if (d >= 1 && d <= 31) {
//         res = d + "-avgust";
//       } else {
//         res = "avgust " + err;
//       }break;
//     }
    
//   case 9:
//     {
//       if (d >= 1 && d <= 30) {
//         res = d + "-sentabr";
//       } else {
//         res = "sentabr " + err;
//       }break;
//     }
    
//   case 10:
//     {
//       if (d >= 1 && d <= 31) {
//         res = d + "-oktabr";
//       } else {
//         res = "oktabr " + err;
//       }break;
//     }
    
//   case 11:
//     {
//       if (d >= 1 && d <= 30) {
//         res = d + "-noyabr";
//       } else {
//         res = "noyabr " + err;
//       }break;
//     }
    
//   case 12:
//     {
//       if (d >= 1 && d <= 31) {
//         res = d + "-dekabr";
//       } else {
//         res = "dekabr " + err;
//       }break;
//     }default:res="Bunday oy mavjud emas :"
    
// }

// console.log(res)

// masala 9


// let d=12
// let m=6

// let res=""

// switch (m) {
//   case 1: {
//     if (d > 0 && d < 31) {
//       d++;
//       res = d + " - yanvar";
//     } else if (d == 31) {
//       d = 1;
//       res = d + " fevral";
//     } else {
//       res = " Yanvar oyida " + d + " mavjud emas :";
//     }
//     break;
//   }
//   case 2: {
//     if (d > 0 && d < 28) {
//       d++;
//       res = d + " - fevral";
//     } else if (d == 28) {
//       d = 1;
//       res = d + " - Mart";
//     } else {
//       res = " Fevral oyida " + d + " mavjud emas :";
//     }
//     break;
//   }
//   case 3: {
//     if (d > 0 && d < 31) {
//       d++;
//       res = d + " - Mart";
//     } else if (d == 31) {
//       d = 1;
//       res = d + " aprel";
//     } else {
//       res = " Mart oyida" + d + " mavjud emas :";
//     }
//     break;
//   }
//   case 4: {
//     if (d > 0 && d < 30) {
//       d++;
//       res = d + " - aprel";
//     } else if (d == 30) {
//       d = 1;
//       res = d + " - may";
//     } else {
//       res = " Aprel oyida" + d + "mavjud emas :";
//     }
//     break;
//   }
//   case 5: {
//     if (d > 0 && d < 31) {
//       d++;
//       res = d + " - may";
//     } else if (d == 31) {
//       d = 1;
//       res = d + " - iyun";
//     } else {
//       res = " may oyida" + d + "mavjud emas :";
//     }
//     break;
//   }
//   case 6: {
//     if (d > 0 && d < 30) {
//       d++;
//       res = d + " - iyun";
//     } else if (d == 30) {
//       d = 1;
//       res = d + " iyul";
//     } else {
//       res = " iyun oyida" + d + "mavjud emas :";
//     }
//     break;
//   }
//   case 7: {
//     if (d > 0 && d < 31) {
//       d++;
//       res = d + " - iyul";
//     } else if (d == 31) {
//       d = 1;
//       res = d + " - avgust";
//     } else {
//       res = " iyul oyida" + d + "mavjud emas :";
//     }
//     break;
//   }
//   case 8: {
//     if (d > 0 && d < 31) {
//       d++;
//       res = d + " - avgust";
//     } else if (d == 31) {
//       d = 1;
//       res = d + " sentabr";
//     } else {
//       res = " avgust oyida" + d + "mavjud emas :";
//     }
//     break;
//   }
//   case 9:{
//     if (d > 0 && d < 30) {
//       d++;
//       res = d + " - sentabr";
//     } else if (d == 30) {
//       d = 1;
//       res = d + " avgust";
//     } else {
//       res = " Sentabr oyida" + d + "mavjud emas :";
//     }
//     break;
//   }
//   case 10: {
//     if (d > 0 && d < 31) {
//       d++;
//       res = d + " - oktabr";
//     } else if (d == 31) {
//       d = 1;
//       res = d + " sentabr";
//     } else {
//       res = " oktabr oyida" + d + "mavjud emas :";
//     }
//     break;
//   }
//   case 11: {
//     if (d > 0 && d < 30) {
//       d++;
//       res = d + " - noyabr";
//     } else if (d == 30) {
//       d = 1;
//       res = d + " oktabr";
//     } else {
//       res = " noyabr oyida" + d + "mavjud emas :";
//     }
//     break;
//   }
//   case 12: {
//     if (d > 0 && d < 31) {
//       d++;
//       res = d + " - dekabr";
//     } else if (d == 31) {
//       d = 1;
//       res = d + " yanvar";
//     } else {
//       res = " Dekabr oyida" + d + "mavjud emas :";
//     }
//     break;
//   }
//   default: res=" Bunday oy mavjud emas :";
// }

// console.log(res)

// masala 10

// let y="q"
// let k=1;
// let res="Robot "

// switch(y){
//   case "s": res+="shimol"; break;
//   case "j": res+="janub"; break;
//   case "q": res+="sharq"; break;
//   case "g": res+="g'arb"; break;
//   default: res=null;
// }
// if(res!=null){
//   res+="ga ko'chdi va "
//   switch(k){
//     case 0:res+="harakatni davom ettir"; break;
//     case 1:res+="chapga buril"; break;
//     case 2:res+="O'nga buril"; break;
//     default: res=null;
//   }
//   if(res!=null){
//     res+="di"
//     console.log(res)
//   }else{
//      console.log("Bunday buyruq algaritmi mavjud emas :")
//   }
// }else{
//    console.log("Bunday tomon mavjud emas :")
// }

// masala 11

// let y = "q";
// let k1 = 1;
// let k2 = 0; 
// let res = "Robot ";

// switch (y) {
//   case "s":res += "shimol";break;
//   case "j":res += "janub";break;
//   case "q":res += "sharq";break;
//   case "g":res += "g'arb";break;
//   default:res = null;
// }

// if (res != null) {
//   res += "ga yo'naldi va ";
//   switch (k1) {
//     case 0:res += "o'ngga burildi";break;
//     case 1:res += "chapga burildi";break;
//     case 2:res += "180° burildi";break;
//     default:res = null;
//   }

//   if (res != null) {
//     res += ", keyin esa ";
//     switch (k2) {
//       case 0:res += "o'ngga burildi";break;
//       case 1:res += "chapga burildi";break;
//       case 2:res += "180° burildi";break;
//       default:res = null;
//     }
//   }

//   if (res != null) {
//     console.log(res);
//   } else {
//     console.log("Bunday buyruq algoritmi mavjud emas.");
//   }
// } else {
//   console.log("Bunday tomon mavjud emas.");
// }

// masala 12

// var caseNumber = 1; // 1 - R orqali, 2 - D orqali, 3 - L orqali, 4 - S orqali
// var qiymat = 10; // Shu yerga berilgan qiymatni yozing
// var pi = 3.14;

// switch (caseNumber) {
//   case 1:
//     var R = qiymat;
//     var D = 2 * R;
//     var L = 2 * pi * R;
//     var S = pi * R * R;
//     console.log("Radius R: " + R);
//     console.log("Diametr D: " + D);
//     console.log("Uzunlik L: " + L);
//     console.log("Yuza S: " + S);
//     break;
//   case 2:
//     var D = qiymat;
//     var R = D / 2;
//     var L = 2 * pi * R;
//     var S = pi * R * R;
//     console.log("Diametr D: " + D);
//     console.log("Radius R: " + R);
//     console.log("Uzunlik L: " + L);
//     console.log("Yuza S: " + S);
//     break;
//   case 3:
//     var L = qiymat;
//     var R = L / (2 * pi);
//     var D = 2 * R;
//     var S = pi * R * R;
//     console.log("Uzunlik L: " + L);
//     console.log("Radius R: " + R);
//     console.log("Diametr D: " + D);
//     console.log("Yuza S: " + S);
//     break;
//   case 4:
//     var S = qiymat;
//     var R = Math.sqrt(S / pi);
//     var D = 2 * R;
//     var L = 2 * pi * R;
//     console.log("Yuza S: " + S);
//     console.log("Radius R: " + R);
//     console.log("Diametr D: " + D);
//     console.log("Uzunlik L: " + L);
//     break;
//   default:
//     console.log("Noto'g'ri case raqami");
// }


// masala 13

// var caseNumber = 1; // 1 - a orqali, 2 - c orqali, 3 - h orqali, 4 - S orqali
// var qiymat = 10; // Shu yerga berilgan qiymatni yozing

// switch (caseNumber) {
//   case 1:
//     var a = qiymat;
//     var c = a * Math.sqrt(2);
//     var h = c / 2;
//     var S = (a * h) / 2;
//     console.log("Katet a: " + a);
//     console.log("Gipotenuza c: " + c);
//     console.log("Balandlik h: " + h);
//     console.log("Yuza S: " + S);
//     break;
//   case 2:
//     var c = qiymat;
//     var a = c / Math.sqrt(2);
//     var h = c / 2;
//     var S = (a * h) / 2;
//     console.log("Gipotenuza c: " + c);
//     console.log("Katet a: " + a);
//     console.log("Balandlik h: " + h);
//     console.log("Yuza S: " + S);
//     break;
//   case 3:
//     var h = qiymat;
//     var c = h * 2;
//     var a = c / Math.sqrt(2);
//     var S = (a * h) / 2;
//     console.log("Balandlik h: " + h);
//     console.log("Gipotenuza c: " + c);
//     console.log("Katet a: " + a);
//     console.log("Yuza S: " + S);
//     break;
//   case 4:
//     var S = qiymat;
//     var h = Math.sqrt(2 * S);
//     var a = (S * 2) / h;
//     var c = a * Math.sqrt(2);
//     console.log("Yuza S: " + S);
//     console.log("Balandlik h: " + h);
//     console.log("Katet a: " + a);
//     console.log("Gipotenuza c: " + c);
//     break;
//   default:
//     console.log("Noto'g'ri case raqami");
// }


// masala 14

// var caseNumber = 1; // 1 - a orqali, 2 - R1 orqali, 3 - R2 orqali, 4 - S orqali
// var qiymat = 10; // Shu yerga berilgan qiymatni yozing

// switch (caseNumber) {
//   case 1:
//     var a = qiymat;
//     var R1 = (a * Math.sqrt(3)) / 6;
//     var R2 = 2 * R1;
//     var S = (a * a * Math.sqrt(3)) / 4;
//     console.log("Tomon a: " + a);
//     console.log("Ichki chizilgan aylana radiusi R1: " + R1);
//     console.log("Tashqi chizilgan aylana radiusi R2: " + R2);
//     console.log("Yuza S: " + S);
//     break;
//   case 2:
//     var R1 = qiymat;
//     var a = (R1 * 6) / Math.sqrt(3);
//     var R2 = 2 * R1;
//     var S = (a * a * Math.sqrt(3)) / 4;
//     console.log("Ichki chizilgan aylana radiusi R1: " + R1);
//     console.log("Tomon a: " + a);
//     console.log("Tashqi chizilgan aylana radiusi R2: " + R2);
//     console.log("Yuza S: " + S);
//     break;
//   case 3:
//     var R2 = qiymat;
//     var R1 = R2 / 2;
//     var a = (R1 * 6) / Math.sqrt(3);
//     var S = (a * a * Math.sqrt(3)) / 4;
//     console.log("Tashqi chizilgan aylana radiusi R2: " + R2);
//     console.log("Ichki chizilgan aylana radiusi R1: " + R1);
//     console.log("Tomon a: " + a);
//     console.log("Yuza S: " + S);
//     break;
//   case 4:
//     var S = qiymat;
//     var a = Math.sqrt((4 * S) / Math.sqrt(3));
//     var R1 = (a * Math.sqrt(3)) / 6;
//     var R2 = 2 * R1;
//     console.log("Yuza S: " + S);
//     console.log("Tomon a: " + a);
//     console.log("Ichki chizilgan aylana radiusi R1: " + R1);
//     console.log("Tashqi chizilgan aylana radiusi R2: " + R2);
//     break;
//   default:
//     console.log("Noto'g'ri case raqami");
// }


// masala 15

// let n = 7;
// let m = 3;

// let res = null;

// switch (n) {
//   case 6:res = "olti";break;
//   case 7:res = "yetti";break;
//   case 8:res = "sakkiz";break;
//   case 9:res = "to'qqiz";break;
//   case 10:res = "o'n";break;
//   case 11:res = "valet";break;
//   case 12:res = "dama";break;
//   case 13:res = "qirol";break;
//   case 14:res = "tuz";break; // 13 takrorlanmasligi kerak
// }

// if (res !== null) {
//   res += " ";

//   switch (m) {
//     case 6:res += "g'isht";break;
//     case 7:res += "olma";break;
//     case 8:res += "chillak";break;
//     case 9:res += "qarg'a";break;
//     default:res = null;
//   }

//   if (res !== null) {
//     console.log(res);
//   } else {
//     console.log("Bunday karta turi mavjud emas.");
//   }
// } else {
//   console.log("Bunday raqamli karta turi mavjud emas.");
// }

// masala 16


// let yosh = 23

// let onlik = (yosh / 10) * 10;
// let birlik = yosh % 10;

// let natija = "";

// switch (onlik) {
//     case 20: natija = "Yigirma"; break;
//     case 30: natija = "O'ttiz"; break;
//     case 40: natija = "Qirq"; break;
//     case 50: natija = "Ellik"; break;
//     case 60: natija = "Oltmish"; break;
// }

// switch (birlik) {
//     case 1: natija += " bir"; break;
//     case 2: natija += " ikki"; break;
//     case 3: natija += " uch"; break;
//     case 4: natija += " to'rt"; break;
//     case 5: natija += " besh"; break;
//     case 6: natija += " olti"; break;
//     case 7: natija += " yetti"; break;
//     case 8: natija += " sakkiz"; break;
//     case 9: natija += " to'qqiz"; break;
// }

// console.log(natija + " yosh");

// masala 17

// let masala = 13; // Masala soni (10-40 oralig'ida)

// let onlik = Math.floor(masala / 10) * 10;
// let birlik = masala % 10;

// let natija = "";

// switch (onlik) {
//     case 10: natija = "O'n"; break;
//     case 20: natija = "Yigirma"; break;
//     case 30: natija = "O'ttiz"; break;
//     case 40: natija = "Qirq"; break;
// }

// switch (birlik) {
//     case 1: natija += " bir"; break;
//     case 2: natija += " ikki"; break;
//     case 3: natija += " uch"; break;
//     case 4: natija += " to'rt"; break;
//     case 5: natija += " besh"; break;
//     case 6: natija += " olti"; break;
//     case 7: natija += " yetti"; break;
//     case 8: natija += " sakkiz"; break;
//     case 9: natija += " to'qqiz"; break;
// }

// console.log(natija + "ta masala");

// masala 18

// let son = 598 // Uch xonali son

// let yuzlik = parseInt(son / 100);
// let onlik = parseInt((son % 100) / 10);
// let birlik = son % 10;

// let natija = "";

// switch (yuzlik) {
//     case 1: natija += "Bir yuz "; break;
//     case 2: natija += "Ikki yuz "; break;
//     case 3: natija += "Uch yuz "; break;
//     case 4: natija += "To'rt yuz "; break;
//     case 5: natija += "Besh yuz "; break;
//     case 6: natija += "Olti yuz "; break;
//     case 7: natija += "Yetti yuz "; break;
//     case 8: natija += "Sakkiz yuz "; break;
//     case 9: natija += "To'qqiz yuz "; break;
// }

// switch (onlik) {
//     case 1: natija += "o'n "; break;
//     case 2: natija += "yigirma "; break;
//     case 3: natija += "o'ttiz "; break;
//     case 4: natija += "qirq "; break;
//     case 5: natija += "ellik "; break;
//     case 6: natija += "oltimish "; break;
//     case 7: natija += "yetmish "; break;
//     case 8: natija += "sakson "; break;
//     case 9: natija += "to'qson "; break;
// }

// switch (birlik) {
//     case 1: natija += "bir"; break;
//     case 2: natija += "ikki"; break;
//     case 3: natija += "uch"; break;
//     case 4: natija += "to'rt"; break;
//     case 5: natija += "besh"; break;
//     case 6: natija += "olti"; break;
//     case 7: natija += "yetti"; break;
//     case 8: natija += "sakkiz"; break;
//     case 9: natija += "to'qqiz"; break;
// }

// console.log(natija);

// masala 19

// let yil = 1988;
// let rang = (yil - 1984) % 10;
// let hayvon = (yil - 1984) % 12;

// switch (rang) {
//   case 0:
//   case 1:
//     console.log("Yashil");
//     break;
//   case 2:
//   case 3:
//     console.log("Qizil");
//     break;
//   case 4:
//   case 5:
//     console.log("Sariq");
//     break;
//   case 6:
//   case 7:
//     console.log("Oq");
//     break;
//   case 8:
//   case 9:
//     console.log("Qora");
//     break;
// }

// switch (hayvon) {
//   case 0:
//     console.log("Sichqon");
//     break;
//   case 1:
//     console.log("Sigir");
//     break;
//   case 2:
//     console.log("Yo'lbars");
//     break;
//   case 3:
//     console.log("Quyon");
//     break;
//   case 4:
//     console.log("Ajdaho");
//     break;
//   case 5:
//     console.log("Ilon");
//     break;
//   case 6:
//     console.log("Ot");
//     break;
//   case 7:
//     console.log("Qo'y");
//     break;
//   case 8:
//     console.log("Maymun");
//     break;
//   case 9:
//     console.log("Tovuq");
//     break;
//   case 10:
//     console.log("It");
//     break;
//   case 11:
//     console.log("To'ng'iz");
//     break;
// }

// masala 20

// let oy = 5; 
// let kun = 19; 

// switch (oy) {
//   case 1:
//     console.log(kun <= 19 , "O'qotar " + "Echki ");
//     break;
//   case 2:
//     console.log(kun <= 18 , "Echki " + "Qovg'a ");
//     break;
//   case 3:
//     console.log(kun <= 20 , "Qovg'a " + "Baliq ");
//     break;
//   case 4:
//     console.log(kun <= 19 , "Baliq " + "Qo'y ");
//     break;
//   case 5:
//     console.log(kun <= 20 , "Qo'y " + "Buzoq ");
//     break;
//   case 6:
//     console.log(kun <= 20 , "Buzoq " + "Egizaklar ");
//     break;
//   case 7:
//     console.log(kun <= 20 , "Egizaklar " + "Qisqichbaqa ");
//     break;
//   case 8:
//     console.log(kun <= 22 , "Qisqichbaqa " + "Arslon ");
//     break;
//   case 9:
//     console.log(kun <= 22 , "Arslon " + "Parizod ");
//     break;
//   case 10:
//     console.log(kun <= 22 , "Parizod " + "Tarozi");
//     break;
//   case 11:
//     console.log(kun <= 22 , "Tarozi " + "Chayon ");
//     break;
//   case 12:
//     console.log(kun <= 21 , "Chayon " + "O'qotar ");
//     break;
//   default:
//     console.log("Noto'g'ri sana");
// }
