// While 1  

// let a=17;
// let b= 5;
// while (a >= b) {
//     a -= b;
// }
// console.log('Qolgan qism:', a);


// While 2: 

// let A = 17; 
// let B = 5;
// let count = 0;
// while (A >= B) {
//     A -= B;
//     count++;
// }
// console.log('Joylashish soni:', count);

// While 3: 
// let N = 17, K = 5;
// while (N >= K) {
//     N -= K;
// }
// console.log('Qoldiq:', N);

// While  masala 4:

// let n=243

// while(n>1){
//     n/=3
// }
// if(n==1){
//     console.log(n+"ning darajasi")
// }else{
//     console.log(3+"ning darajasi emas ")
// }

// While 5:

// n = 16;
// let k = 0;
// while (n > 1) {
//     n /= 2;
//     k++;
// }
// if (n == 1){
//     console.log(k + " 2 ning darajasi ")
// }else{
//     console.log("Bu son 2 ning darajasi emas :")
// }
 
// While 6:

// n = 7;
// let count = 1;

// while (n > 0) {
//     count *= n;
//     n -= 2;
// }

// console.log('Ikki marta faktorial:', count);

// While 7:

// let n = 10; 
// let k = 1;
// while (k * k <= n) {
//   k++;
// }
// console.log(" Kvadrati n dan katta bo'ladi :", k);

// While 8:

// n = 38;
// k = 1;
// while (k**2 <= n) {
//     k++;
// }
// console.log('Katta butun k:', k-1);

// While 9:

// let n = 10; 
// let k = 0

// while (3**k <= n) {
//   k++;
// }

// console.log("Darjasi kichik bo'ladi :", k);


// While 10:

// n = 20;
// k = 0;

// while (3**k <= n) {
//     k++;
// }
// console.log('Eng katta k:', k-1);

// While 11: 

// n = 15;
// k = 0;
// let res = 0;
// while (res < n) {
//     k++;
//     res += k;
// }
// console.log('Eng kichik k:', k-1);
// console.log('Yigindi:', res);

// While 12:

// birinchi usul 

// let n=14
// let k=1
// let res=0

// while (res <= n){
//      k++; 
//      res+=k
// }

// console.log(k-1)


// let n = 15;
// let k = 0;
// let res = 0;
// while (res <= n) {
//     k++;
//     res += k;
// }
// console.log('Eng katta k:', k-1);
// console.log('Yigindi:', res);

// While 13: 

// let a = 2;
// let k = 0;
// let res = 0;
// while (res <= a) {
//   k++;
//   res += 1 / k;
// }
// console.log("eng kichik son :", k, "Sum:", res);

// While 14: 

// let k = 4;
// let res = 0;
// let a = 10; 
// while (res + 1 / (k + 1) <= a) {
//   res += 1 / (k + 1);
//   k++;
// }
// console.log("Eng katta son :", k, "Sum:", res);


// While 15: 

// first method

// let s=100000000
// let p=2
// p/=100
// let l=s
// let res=0

// while(s<2*l){
//     s*=(p+1)
//     console.log(s)
//     res++
// }
// console.log(res)


// second method

// let S = 1000; 
// let p = 10; 
// let k = 0; 
// let sum = S;

// while (sum < 2 * S) {
//   sum += (sum * p) / 100;
//   k++;
// }

// console.log(" Oylar soni:", k, "Bankdagi summa:", sum.toFixed(2));


// While 16: 

// birinchi usul

// let n=10
// let p=20
// let res=0
// let day=0

// while(res<=200){
//     res+=n
//     n+=(n*p/100)
//     day++
// }

// console.log(day)

// second methood

// let distance = 10; // 1-kun masofasi
// let p = 20; // Har kuni p% ko‘payadi
// let k = 0; // Kunlar soni
// let total = 0; // Umumiy masofa

// while (total <= 200) {
//   total += distance;
//   distance += (distance * p) / 100;
//   k++;
// }

// console.log(" Kunlar soni:", k, "Jami masofa:", Math.floor(total));


// While 17: 

// let n = 17,
//   m = 5;
// let count = 0;
// let remain = n;

// while (remain >= m) {
//   remain -= m;
//   count++;
// }

// console.log(" Butun qismi:", count, "Qoldiq:", remain);


// While 18:

// let n = 12345;
// let teskari = 0;
// console.log(n)

// while (n > 0) {
//   teskari = teskari * 10 + (n % 10); 
//   n = parseInt(n / 10); 
// }

// console.log("Teskari raqam:", teskari);


// While 19:

// let n = 54321
// let yigindi = 0;
// let raqamlarSoni = 0;

// while (n > 0) {
//   yigindi += n % 10; 
//   raqamlarSoni++; 
//   n = parseInt(n / 10)
// }

// console.log("Raqamlar yig'indisi:", yigindi);
// console.log("Raqamlar soni:", raqamlarSoni);


// While 20:

// let n = 789456
// let bor = false;

// while (n > 0) {
//   if (n % 10 === 2) {
//     bor = true; 
//     break;
//   }
//   n = parseInt(n / 10);
// }

// if(bor){
//     console.log(bor)
// }else{
//     console.log(bor)
// }


// While 21: 

// let n = 12345;
// let bor = false;

// while (n > 0) {
//   let raqam = n % 10;
//   if (raqam % 2 !== 0) {
//     bor = true; 
//     break;
//   }
//   n = parseInt(n / 10);
// }

// console.log("Toq raqamlar bor:", bor);


// While 22: 

// let n = 29;
// let tub = false;
// let i = 2;
// let limit = parseInt(n / 2); 

// while (i <= limit) {
//   if (n % i === 0) {
//     tub = true;
//     break;
//   }
//   i++;
// }

// console.log("Tub son:", tub);


// While23: 

// birinchi usul 

// let a=6
// let b=15

// let x=1
// let k=2

// while(k<=a && k<=b){
//     if(a%k==0 && b%k==0){
//         x=k
//     }
//     k++
// }

// console.log(x)

// let a = 56, b = 98;
// while (a !== b) {
//     if (a > b) {
//         a -= b;
//     } else {
//         b -= a;
//     }
// }
// console.log('EKUB:', a);

// uchinchi usul

// let a = 36, b = 60;
// while (b !== 0) {
//   let temp = b;
//   b = a % b;
//   a = temp;
// }

// console.log("Eng katta umumiy bo'luvchi:", a);


// While24:

// let n = 34;
// let a = 1, b = 1;
// let isFibonacci = false;

// while (b <= n) {
//     if (b === n) {
//         isFibonacci = true;
//         break;
//     }
//     let temp = b;
//     b = a + b;
//     a = temp;
// }

// console.log( isFibonacci + 'Fibonacci soni' + 'Fibonacci emas');


// While 25: 

// let n = 20;
// let a = 1,
//   b = 1,
//   next;

// while (b <= n) {
//   next = a + b;
//   a = b;
//   b = next;
// }

// console.log(" Birinchi katta Fibonacci soni:", b);


// While 26: 

// let n = 21;
// let a = 1, b = 1, next;

// while (b < n) {
//     next = a + b;
//     a = b;
//     b = next;
// }

// console.log('While26: Oldingi Fibonacci soni:', a, 'Keyingi Fibonacci soni:', b + a);


// While 27:

// let n = 21;
// let a = 1,
//   b = 1,
//   next;
// let index = 2;

// while (b < n) {
//   next = a + b;
//   a = b;
//   b = next;
//   index++;
// }

// console.log(" Fibonacci indeks:", b === n + index + "Fibonacci emas");


// While 28: 

// let e = 0.001;
// let a_k = 2,
//   a_prev;
// let k = 2;

// do {
//   a_prev = a_k;
//   a_k = 2 + 1 / a_prev;
//   k++;
// } while (Math.abs(a_k - a_prev) >= e);

// console.log("While28: k =", k, ", a_k =", a_k, ", a_k-1 =", a_prev);


// While29: 

// let a=7
// let b=14
// let c=3
// let x=0
// let y=0

// while(a>=c){
//     a-=c
//     x++
// }

// while(b>=c){
//     b-=c
//     x++
// }

// while(y>0){
//     res+=x
//     y--
// }

// While30:

// let A = 8, B = 6, C = 2;

// let rowCount = Math.floor(A / C);
// let colCount = Math.floor(B / C);
// let totalSquares = rowCount * colCount;
// console.log('Kvadratlar soni:', totalSquares);

// ikkinchi usul

// let A = 10,
//   B = 6,
//   C = 2;
// let count = 0;
// let width = A,
//   height = B;

// while (width >= C) {
//   let tempHeight = height;
//   while (tempHeight >= C) {
//     count++;
//     tempHeight -= C;
//   }
//   width -= C;
// }

// console.log("While30: Kvadratlar soni:", count);

