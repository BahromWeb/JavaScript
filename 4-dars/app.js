

// Shart oparatoriga oid masalalar :

// masala 1

// let son1 = 45

// if ( son1 > 1 ){
//   son1++;
// }
// else {
//    son1;
// }
// console.log( son1 )

// masala 2

// let son = -7

// if ( son > 0 ){
//   son++;
// }else if ( son == 0) {
//   console.log(" Kiritilgan son 0 ga teng :")
// }else{
//   son-=2;
// }
// console.log( son )

// masala 3

// let son = 8

// if ( son > 0 ){
//   son++;
// }else if ( son == 0 ){
//   son = 10;
// }else {
//   son-=2;
// }

// console.log( son )

// masala 4

// let son1 = 6
// let son2 = 0
// let son3 = -2

// let musbatSanoq=0

// if( son1 > 0 ){
//     musbatSanoq++;
// }
// if (son2 > 0) {
//   musbatSanoq++;
// }
// if (son3 > 0) {
//   musbatSanoq++;
// }

// console.log("Musbat sonlar :",musbatSanoq)

// masala 5 

// let son1 = 0
// let son2 = 8
// let son3 = -2

// let musbatSanoq=0
// let manfiySanoq=0

// if( son1 > 0 ){
//     musbatSanoq++;
// }else if( son1 < 0 ){
//    manfiySanoq++;
// }
// if (son2 > 0) {
//   musbatSanoq++;
// } else if (son2 < 0) {
//   manfiySanoq++;
// }
// if (son3 > 0) {
//   musbatSanoq++;
// } else if (son3 < 0) {
//   manfiySanoq++;
// }
// console.log("Musbat sonlar son :",musbatSanoq, "Manfiy sonlar soni :",manfiySanoq)

// masala 6

// let son1 = 29
// let son2 = 6

// if ( son1 > son2 ){
//   console.log( "Katta son :", son1)
// }
// else {
//   console.log( "Katta son: ", son2)
// }

// masala 7

// let son1 = -7
// let son2 = 0

// if ( son1 < son2 ){
//   console.log("Kichik son tartib raqami : 1" )
// }
// else if ( son2 < son1 ){
//   console.log("Kichik son tartib raqami : 2")
// }
// else {
//   console.log("Ikkita son teng ")
// }

// masala 8

// let son1 = 8
// let son2 = 8

// if ( son1 > son2 ){
//      console.log("Katta son :", son1);
//      console.log("Kichik son :", son2);
// }
// else if ( son2 > son1 ){
//   console.log("Katta son :", son2);
//   console.log("Kichik son :", son1);
// }
// else {
//   console.log("Ikkala son teng ")
// }

// masala 9

// let a=5
// let b=6
// console.log("a=" + a ,"b=" + b)
// a+=b
// b=a-b
// a-=b

// console.log("a=" + a, "b=" + b);
 
// let son1 = 14.8
// let son2 = 14.6

// if ( son1 > son2 ){

//   let change=son1
//   son1=son2
//   son2=change
// }

// console.log(" son1 :", son1);
// console.log(" son2 :", son2);

// masala 10


// birinchi usul

// let a=9
// let b=4

// if(a==b){
//     a-=b
//     b=a
// }else{
//     a+=b
//     b=a
// }
// console.log(a,b)

// let son1 = 20
// let son2 = 4

// if ( son1 !== son2 ){
//   count=son1+son2
//   console.log("Yig'indi :", count)
// }
// else if ( son1 == son2 ){
//   son1 = 0
//   son2 = 0 
//   console.log(son1 , son2)
// }

// masala 11

// let son1 = 7
// let son2 = 7
//  if( son1 !== son2 ){
//      if( son1 > son2 ){
//       console.log("Kattasi :", son1)
//      }else {
//       console.log("Kattasi :",son2)
//      }
//  }
//  else if ( son1 == son2 ){
//       son1=0
//       son2=0
//       console.log( son1, son2 )
//  }

// masala 12 

// let son1 = 3
// let son2 = -8
// let son3 = -7

// if ( son1 < son2 && son1 < son3){
//   console.log("Kichik son :", son1)
// }
// else if ( son2 < son1 && son2 < son3){
//   console.log("Kichik son :", son2)

// }else {
//   console.log("Kichik son :", son3)
// }

// masala 13 

// let a=8
// let b=8
// let c=8

// if((a<b && a>c) || (a<c && a>b)){
//     console.log(a)
// }else if((b<a && b>c) || (b<c && b>a)){
//     console.log(b)
// }else if((c<a && c>b) || (c<b && c>a)){
//     console.log(c)
// }else{
//   console.log("Bunday son mavjud emas :")
// }
// let son1 = 3
// let son2 = 5
// let son3 = 4

// let middle;

// if ((son1 > son2 && son1 < son3) || (son1 < son2 && son1 > son3)){
//     middle=son1
// }else if ((son2 > son1 && son2 < son3) || (son2 < son1 && son2 > son3)){
//   middle=son2
// }else {
//   middle=son3
// }

// console.log(middle)

// masala 14

// let a = 10,b = 9,c = 9;

// if (a <= b && a <= c) {
//   console.log(a);
//   if (b <= c) {
//     console.log(b);
//     console.log(c);
//   } else {
//     console.log(c);
//     console.log(b);
//   }
// } else if (b <= a && b <= c) {
//   console.log(b);
//   if (a <= c) {
//     console.log(a);
//     console.log(c);
//   } else {
//     console.log(c);
//     console.log(a);
//   }
// } else {
//   console.log(c);
//   if (a <= b) {
//     console.log(a);
//     console.log(b);
//   } else {
//     console.log(b);
//     console.log(a);
//   }
// }

// second way

// let son1 =5
// let son2 =5
// let son3 =5

// let min, max

// if (son1 < son2 && son1 < son3){
//   min=son1
// }else if (son2 < son1 && son2 < son3 ){
//   min=son2
// }else{
//   min=son3
// }
// if (son1 > son2 && son1 > son3 ){
//   max=son1
// }else if ( son2 > son1 && son2 > son3 ){
//   max=son2
// }else {
//   max=son3
// }

// console.log("min :", min, "max :", max)

// masala 15

// let a = 10
// let b = 10
// let c = 20

// if (a >= b && a >= c) {
//   if (b >= c) {
//     console.log(a, b);
//   } else {
//     console.log(a, c);
//   }
// } else if (b >= a && b >= c) {
//   if (a >= c) {
//     console.log(b, a);
//   } else {
//     console.log(b, c);
//   }
// } else {
//   if (a >= b) {
//     console.log(c, a);
//   } else {
//     console.log(c, b);
//   }
// }


// let son1 =  2
// let son2 = 3
// let son3 = 5

// if ((son1 + son2 > son1 + son3) && ( son1 + son2 > son2 + son3)){
//   console.log("Yig'indisi katta bo'ladigan sonlar :", son1, "va", son2)
// }
// else if((son1 + son3 > son1 + son2) && (son1 + son3 > son2 + son3)){
//   console.log("Yig'indisi katta bo'ladigan sonlar :", son1, "va", son3);
// }
// else {
//   console.log("Yig'indisi katta bo'ladigan sonlar :", son2, "va", son3);
// }

// masala 16

// let son1=2
// let son2=23
// let son3=9

// if(son1 < son2 && son2 < son3){
//   son1*=2
//   son2*=2
//   son3*=2
// }else {
//   son1=-son1
//   son2=-son2
//   son3=-son3
// }

// console.log("son1 :", son1);
// console.log("son2 :", son2);
// console.log("son3 :", son3);

// masala 17

// let son1=0
// let son2=1
// let son3=-8

// if((son1 < son2 && son2 < son3) || (son1 > son2 && son2 > son3)){
//   son1*=2
//   son2*=2
//   son3*=2
// }else {
//   son1=-son1
//   son2=-son2
//   son3=-son3
// }

// console.log("son1 :", son1);
// console.log("son2 :", son2);
// console.log("son3 :", son3);

// masala 18

// birinchi usul 

// let a=3
// let b=3
// let c=5
// res=0

// if(b==c && a!=b){
//     res=1
// }else if(a==c && b!=c){
//     res=2
// }else if(a==b && c!=a){
//     res=3
// }

// console.log(res)

// let son1=2
// let son2=8
// let son3=8

// if (son1 == son2 && son1 !== son3){
//   console.log("Ikkita teng : son1 va son2  son3 ning tartib raqami : 3")
// }else if (son1 == son3 && son1 !== son2 ){
//   console.log("Ikkita teng : son 1 va son3  son2 tartib raqami : 2")
// }else if (son2 == son3 && son1 !==son2){
//   console.log("Ikkita teng : son2 va son3  son1 tartib raqami : 1")
// }else {
//   console.log("Ikkita tengi yo'q :")
// }

// masala 19

// let son1 = 10;
// let son2 = 10;
// let son3 = 10;
// let son4 = 5;

// if (son1 === son2 && son1 === son3 && son1 !== son4) {

//   console.log("Bittasi teng: son1, son2 va son3. son4 sonining tartib raqami: 4");
// } else if (son1 === son2 && son1 === son4 && son1 !== son3) {

//   console.log("Bittasi teng: son1, son2 va son4. son3 sonining tartib raqami: 3");
// } else if (son1 === son3 && son1 === son4 && son1 !== son2) {

//   console.log("Bittasi teng: son1, son3 va son4. son2 sonining tartib raqami: 2");
// } else if (son2 === son3 && son2 === son4 && son1 !== son2) {

//   console.log("Bittasi teng: son2, son3 va son4. son1 sonining tartib raqami: 1");
// } else {
//   console.log("Uchtasi teng bo'lgan son yo'q");
// }

// masala 20

// let A = 4
// let B = 9
// let C = 9

// let distanceAB = Math.abs(A - B)
// let distanceAC = Math.abs(A - C)

// if (distanceAB < distanceAC){
//   console.log("A nuqtaga eng yaqin masofa B ")
//   console.log("Masofa :", distanceAB)
// }else if(distanceAC < distanceAB){
//     console.log("A nuqtaga eng yaqin masofa C")
//     console.log("Masofa :", distanceAC)
// }else {
//   console.log("Ikkita masofa teng :")
// }

// masala 21

// let x=7
// let y=0

// if(x==0 && y==0){
//     console.log(0)
// }else if(y==0){
//     console.log(1)
// }else if(x==0){
//     console.log(2)
// }else{
//     console.log(3)
// }


// let x = 2
// let y = 0


// if (x === 0 && y === 0) {
//     console.log(0); 
// } else if (x === 0) {
//     console.log(2); 
// } else if (y === 0) {
//     console.log(1); 
// } else {
//     console.log(3); 
// }

// masala 22


// let x = -3; 
// let y = 5;  


// if (x > 0 && y > 0) {
//     console.log("1-chorak"); 
// } else if (x < 0 && y > 0) {
//     console.log("2-chorak"); 
// } else if (x < 0 && y < 0) {
//     console.log("3-chorak"); 
// } else if (x > 0 && y < 0) {
//     console.log("4-chorak"); 
// }

// masala 23 

// let x1 = 2, y1 = 3; 
// let x2 = 5, y2 = 3; 
// let x3 = 2, y3 = 6; 

// let x4, y4;


// if (x1 === x3) {
//   x4 = x2;
// } else if (x1 === x2) {
//   x4 = x3;
// } else {
//   x4 = x1;
// }

// if (y1 === y3) {
//   y4 = y2;
// } else if (y1 === y2) {
//   y4 = y3;
// } else {
//   y4 = y1;
// }

// console.log("To'rtinchi uch koordinatalari: ("  x4  ", "  y4  ")");

// masala 24

// let x = 3; // Misol uchun x

// let fx;
// if (x > 0) {
//   fx = 2 * Math.sin(x);
// } else {
//   fx = x - 6;
// }

// console.log("f(x) = " + fx);

// masala 25

// let x = -3

// let fx;
// if (x < -2 || x > 2) {
//   fx = 2 * x;
// } else {
//   fx = -3 * x;
// }

// console.log("f(x) = " , fx);

// masala 26

// let x = 1

// let fx;
// if (x <= 0) {
//   fx = -x;
// } else if (x > 0 && x < 2) {
//   fx = x * x;
// } else if (x >= 2) {
//   fx = 4;
// }

// console.log("f(x) = " , fx);


// masala 27

// let x = 3

// let fx;

// if (x < 0) {
//   fx = 0; // Agar x < 0 bo'lsa
// } else {
//   let n = parseInt(x); // x ning butun qismini olish
//   if (n % 2 === 1) {
//     fx = 1; // Agar butun qismi toq bo'lsa
//   } else {
//     fx = -1; // Agar butun qismi juft bo'lsa
//   }
// }

// console.log("f(x) = ", fx);


// masala 28

// let yil = 1900

// let kunlar;
// if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
//   kunlar = 366;
// } else {
//   kunlar = 365;
// }

// console.log(yil , "-yilda " , kunlar , " kun bor.");


// masala 29

// let a=-56
// let b=parseInt(Math.abs(a/10))
// if(a==0){
//     console.log("Son nolga teng")
// }else if(a>0){
//     if(b==0){
//         console.log("Musbat bir xonaali son :")
//     }else if(b<10){
//         console.log("Musbat ikki xonali son")
//     }else if(b<100){
//         console.log("Musbat uch xonali son :")
//     }else if(b<1000){
//         console.log("Musbat to'rt xonali son :")
//     }
// }else{
//     if (b == 0) {
//       console.log("Manfiy bir xonaali son :");
//     } else if (b < 10) {
//       console.log("Manfiy ikki xonali son");
//     } else if (b < 100) {
//       console.log("Manfiy uch xonali son :");
//     } else if (b < 1000) {
//       console.log("Manfiy to'rt xonali son :");
//     }
// }

// masala 30

// let num = 2;

// if (num < 10) {
//   if (num % 2 === 0) {
//     console.log(num + " - Bir xonali juft son");
//   } else {
//     console.log(num + " - Bir xonali toq son");
//   }
//   num++;
// }

// if (num >= 10 && num < 100) {
//   if (num % 2 === 0) {
//     console.log(num + " - Ikki xonali juft son");
//   } else {
//     console.log(num + " - Ikki xonali toq son");
//   }
//   num++;
// }

// if (num >= 100 && num < 1000) {
//   if (num % 2 === 0) {
//     console.log(num + " - Uch xonali juft son");
//   } else {
//     console.log(num + " - Uch xonali toq son");
//   }
//   num++;
// }
