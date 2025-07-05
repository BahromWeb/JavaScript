

// masala 1
// var L=2345

// var x=parseInt(L/100)
// console.log(x)

// masala 2

// var K=1500

// var T=parseInt(K/1000)
// console.log("Berilgan K Tonnada :",T)

// masala 3
// var K = 1500;

// var B = parseInt(K / 1024);
// console.log("Berilgan B Mg :", B);

// masala 4
// var K = 10;
// var B=3
// var T = parseInt(K / B);

// console.log(" 1chi bo'lak ichida ikkinchi bo'lak :", T);

// masala 5

// var K = 20;
// var B=6
// var T = parseInt(K / B);
// var J=(K%B)

// console.log(" 1chi bo'lak ichida ikkinchi bo'lak :", T);
// console.log("Birinchi bo'lak ichida joylashmay qolgan qismi :", J)

// masala 6

// var son = 34

// var bir=parseInt(son/10)
// var onl=(son%10)

// console.log("Birlik  :", bir);
// console.log("Onlik  :", onl);

// masala 7

// var son = 34;

// var bir = parseInt(son / 10);
// var onl = son % 10;

// var x=bir+onl

// console.log("Birlik  :", bir);
// console.log("Onlik  :", onl);
// console.log("Sonlar yig'indisi :", x)

// masala 8
// var son = 34;

// var bir = parseInt(son / 10);
// var onl = son % 10;

// var x=onl*10+bir

// console.log("Birlik  :", bir);
// console.log("Onlik  :", onl);
// console.log("Almashgan :", x)

// masala 9

// var son=234

// var bir=son%10
// var ikki=parseInt(son/10)%10
// var uch=parseInt(son/100)

// console.log(bir);
// console.log(ikki);
// console.log(uch);

// masala 10

// var son=234
// console.log(son)

// var bir=son%10
// var ikki=parseInt(son/10)%10
// var uch=parseInt(son/100)

//  x=bir*100+ikki*10+uch

//  console.log("almashgani :", x)

// masala 11

// var son=234
// console.log(son)

// var bir=son%10
// var ikki=parseInt(son/10)%10
// var uch=parseInt(son/100)

//  x=bir+ikki+uch

//  console.log("Yig'indi :", x)

// masala 12

// let num = 123;

// let yuzlik = parseInt(num / 100);
// let onlik = parseInt((num % 100) / 10);
// let birlik = num % 10;

// let reversedNum = birlik * 100 + onlik * 10 + yuzlik;
// console.log("Teskari son:", reversedNum);

// masala 13

// let num = 123;

// let yuzlik = parseInt(num / 100);
// let qolgan = num % 100;

// let newNum = qolgan * 10 + yuzlik;
// console.log("Chapdagi raqam ochirilgan yangi son:", newNum);

// masala 14

// let num = 123;

// let birlik = num % 10;
// let qolgan = parseInt(num / 10);

// let newNum = birlik * 100 + qolgan;
// console.log("Ongdagi raqam ochirilgan yangi son:", newNum);


// masala 15

// let num = 123;

// let yuzlik = parseInt(num / 100);
// let onlik = parseInt((num % 100) / 10);
// let birlik = num % 10;

// let swappedNum = onlik * 100 + yuzlik * 10 + birlik;
// console.log("Yuzlik va o‘nlik almashtirilgan son:", swappedNum);

// masala 16

// let num = 123;

// let yuzlik = parseInt(num / 100);
// let onlik = parseInt((num % 100) / 10);
// let birlik = num % 10;

// let swappedNum = yuzlik * 100 + birlik * 10 + onlik;
// console.log("Onlik va birlik almashtirilgan son:", swappedNum);


// masala 17

// let num = 1245;

// let yuzlik = parseInt((num % 1000) / 100);
// console.log("Yuzliklar xonasidagi raqam:", yuzlik);


// masala 18

// let num = 1245;

// let minglik = parseInt(num / 1000);
// console.log("Mingliklar xonasidagi raqam:", minglik);

// masala 19

// let N = 5000;

// let minut = parseInt(N / 60);
// console.log("Toliq otgan minut:", minut);

// masala 20

// let N = 10000; 

// let soat = parseInt(N / 3600);
// console.log("Toliq otgan soat:", soat);


// masala 21

// let N = 5000;

// let minut = parseInt(N / 60);
// let sekund = N % 60;

// console.log("Toliq otgan minut:", minut, "Qolgan sekund:", sekund);


// masala 22

// let N = 10000;

// let soat = parseInt(N / 3600);
// let sekund = N % 3600;

// console.log("Toliq otgan soat:", soat, "Qolgan sekund:", sekund);


// masala 23

// var sekund = 86400; 

// var soat = parseInt(sekund / 3600);
// var qolgansekund = sekund % 3600;

// var minut = parseInt(qolgansekund / 60);
// qolgansekund = qolgansekund % 60; 

// console.log("'tgan soat: " + soat + " O'tgan minut: " + minut + " O'tgan sekund: " + qolgansekund);

// masala 24

// let K = 26 
// let firstDay = 1;

// let weekDay = (firstDay + (K - 1)) % 7;
// console.log(K, "- kun haftaning ", weekDay, "- kuniga to'g'ri keladi.");

// masala 25

// let K = 26;
// let firstDay = 4; 

// let weekDay = (firstDay + (K - 1)) % 7;
// if (weekDay === 0) {
//   weekDay = 7;
// }

// console.log(K, "- kun haftaning ", weekDay, "- kuniga to'g'ri keladi.");

// masala 26

// let K = 200; 
// let firstDay = 2;

// let weekDay=(firstDay+(K-1)%7);

// console.log(K, "- kun haftaning ", weekDay, "- kuniga to'g'ri keladi.");

// masala 27

// let K = 300;
// let firstDay = 7;

// let weekDay = (firstDay + (K - 1)) % 7;
// console.log(K, "- kun haftaning ", weekDay, "- kuniga to'g'ri keladi.");

// masala 28

// let K = 120
// let N = 3

// let weekDay = (N + (K - 1)) % 7;
// console.log(K, "- kun haftaning ", weekDay, "- kuniga to'g'ri keladi.");

// masala 29

// let A = 30, B = 20, C = 5;

// let row = parseInt(A / C);
// let col = parseInt(B / C);
// let totalSquares = row * col;
// let remainingArea = A * B - totalSquares * C * C;

// console.log("Joylashgan kvadratlar soni:", totalSquares);
// console.log("Qolgan yuzasi:", remainingArea, "kvadrat birlik.");


