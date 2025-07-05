

// for sikl

// for masala 1


// let k=23
// let n=12

// for(let i=1; i<=n; i++){
//     console.log(k,i)
// }

// for masala 2

// let a=2
// let b=8

// res=0

// for(let i=a; i<=b; i++){
//     console.log(i)
//     res++;
// }

// console.log(res)

// for masala 3

// let a=2
// let b=8

// res=0

// for(let i=b-1; i>a; i--){
//     console.log(i)
//     res++
// }

// console.log(res)

// for masala 4

// let n=10000

// for(let i=1; i<=10; i++){
//     console.log(i+"kg -",n*i,"so'm")
// }


// for masala 5

// let n=10000

// for(let i=0.1; i<=1; i+=0.1){
//     console.log(i + "kg -", n * i, "so'm");
// }

// for masala 6

// let n=10000

// for( let i=1.2; i<=2; i+=0.2){
//     console.log(i+"kg -",n*i,"so'm")
// }

// for masala 7

// let a=1
// let b=5

// res=0;

// for(let i=a; i<b; i++){
//        res+=i
//        console.log(i) 
// }
// console.log(res)

// for masala 8

// let a=1
// let b=5

// res=1;

// for(let i=a; i<b; i++){
//        res*=i
//        console.log(i) 
// }
// console.log("Oradagi sonlar ko'paytmasi :"+res)

// for masala 9

// let a=1
// let b=5

// res=0

// for(let i=a; i<b; i++){
//        res+=i**2
//        console.log(i) 
// }
// console.log(res)

// for masala 10

// let n=3

// res=0

// for(let i=1; i<=n; i++){
//     res+=1/i;
//     console.log(i)
// }
// console.log(res)

// for masala 11

// let n = 3;
// res = 0;

// for (let i = 0; i <= n; i++) {
//   res += (i+n)**2
//   console.log(i);
// }
// console.log(res);

// for masala 12

// let n=3

// res=1

// for(let i=1; i<=n; i++){
//     res*=(i/10+1)
//     console.log(i)
// }
// console.log(res)

// for masala 13

// let n=3

// res=0

// for(let i=1; i<=n; i++){
//     res+=(1+(0.1*i))(-1)**(i+1)
//     console.log(i)
// }
// console.log(res)

// for masala 14

// let n=10

// res=0

// for(let i=1; i<=n; i++){
//     res+=(2*i-1)
//     console.log(i,res)
// }

// for masala 15

// let n=20
// let a=2

// res=1

// for(let i=1; i<=n; i++){
//     res*=a
//     console.log("2 ning "+i+" darajasi "+ res +" ga teng")
// }

// for masala 16

// let a = 3
// let n = 9
// let pow=1

// for (let i = 1; i <= n; i++) {
//   pow *= a;
//   console.log(a+" ning "+ i + " darajasi :", pow);
// }


// birinchi usul :
// let a = 2;
// let n = 5; 
// let res = 1;

// for (let i = 1; i <= n; i++) {
//   res *= a;
//   console.log(`a ning ${i}-darajasi: ${res}`);
// }

// for masala 17

// let a = 2;
// let n = 5;
// let pow = 1;
// let sum = 1;

// for (let i = 1; i <= n; i++) {
//   pow *= a;
//   sum += pow;
//   console.log("Bosqich:", i, "pow =", sum);
// }

// console.log("Yakuniy natija: pow =", sum);


// for masala 18

// let n=4
// let a=3

// let res=0

// for(let i=0; i<=n; i++){
//   res+=((-1)**i) * (a**i)
// }
// console.log(res)

// for masala 19

// let n=3
// let res=1

// for(let i=1; i<=n; i++){
//     res*=i
// }
// console.log(n+"! = ",res+" ga teng")

// for masala 20

// let n=4
// count=0

// for(let i=1; i<=n; i++){
//     let res = 1;
//     for(let j=1; j<=i; j++){
//         res*=j
//     }
//     count+=res;
//     console.log( i + "! = ", res + " ga teng");
// }
// console.log("Foktaryallar yig'indisi = "+count)

// ikkinchi usul

// let n=4
// let res=0
// let x=1;

// for(let i=1; i<=n; i++){
//    x*=i;
//    res+=x
//      console.log(i + "! = ", res + " ga teng");
// }
// console.log(res)

// for masala 21

// let n=10;
// let res=1;
// let x=1;

// for(let i=1; i<=n; i++){
//   x*=i;
//   res+=(1/x)
// }
// console.log(res)

// let n=10
// count=1

// for(let i=1; i<=n; i++){
//     let res = 1;
//     for(let j=1; j<=i; j++){
//         res*=j
//     }
//     count+=(1/res)
//     console.log(i, res)
// }
// console.log(count)

// ikkinchi usul

// let n = 20;
// let res = 1;

// for (let i = 1; i <= n; i++) {
//   let fact = 1;
//   for (let j = 2; j <= i; j++) {
//     fact *= j;
//   }
//   res += 1 / fact;
// }

// console.log(res);


// for masala 22

// let n = 20;
// let x = 0.4;
// let res = 1;

// for (let i = 1; i <= n; i++) {
//   let fact = 1;
//   for (let j = 2; j <= i; j++) {
//     fact *= j;
//   }
//   res += x ** i / fact;
// }

// console.log(res);


// for masala 23

// let n = 20;
// let x = 0.4;
// let res = x;

// for (let i = 1; i <= n; i++) {
//   let fact = 1;
//   for (let j = 2; j <= 2 * i + 1; j++) {
//     fact *= j;
//   }
//   res += ((-1) ** i * x ** (2 * i    + 1)) / fact;
// }

// console.log(res);


// for masala 24

// let n = 20;
// let x = 0.4;
// let res = 1;

// for (let i = 1; i <= n; i++) {
//   let fact = 1;
//   for (let j = 2; j <= 2 * i; j++) {
//     fact *= j;
//   }
//   res += ((-1) ** i * x ** (2 * i)) / fact;
// }

// console.log(res);


// for masala 25

// let n = 20;
// let x = 0.4;
// let res = x;

// for (let i = 2; i <= n; i++) {
//   let term = ((-1) ** (i - 1) * x ** i) / i;
//   res += term;
// }

// console.log(res);


// for masala 26

// let n = 20;
// let x = 0.4;
// let res = x;

// for (let i = 1; i <= n; i++) {
//   let term = ((-1) ** i * x ** (2 * i + 1)) / (2 * i + 1);
//   res += term;
// }

// console.log(res);


// for masala 27

// let n=20
// let x=0.4
// let res=x

// for(let i=1; i<=n; i++){
//   let a=1
//   for(let j=1; j<=2*n-1; j+=2){
//     a*=j
//   }
//   let b=1
//   for(let j=2; j<=2*n+1; j+=2){
//     b*=j
//   }
//   res+=a*(x**(2*i+1))/b
// }

// console.log(res)

// for masala 28

// let n = 20;
// let x = 0.5
// let res = 1 + x / 2;

// for (let i = 1; i < n; i++) {
//   let a = 1;
//   for (let j = 1; j <= 2 * i - 1; j += 2) {
//     a *= j;
//   }

//   let b = 1;
//   for (let j = 2; j <= 2 * i; j += 2) {
//     b *= j;
//   }

//   let term = ((-1) ** (i - 1) * a * x ** (2 * i)) / (b * 2 * i);
//   res += term;
// }

// console.log(res);

// for masala 29

// let b=-10
// let a=30
// let n=10;

// let x=Math.abs(b-a)/n

// if(a<b){
//     for(let i=1; i<=b; i+=x){
//         console.log(i)
//     }
// }else{
//     for(let i=a; i>=b; i-=x){
//         console.log(i);
//     }
// }


// for masala 30

// let b = -10;
// let a = 30;
// let n = 10;

// let x = Math.abs(b - a) / n;

// if (a < b) {
//   for (let i = 1; i <= b; i += x) {
//     console.log(1 - Math.sin(i));
//   }
// } else {
//   for (let i = a; i >= b; i -= x) {
//     console.log(1 - Math.sin(i));
//   }
// }

// for masala 31

// let n = 10;
// let A = 2;

// for (let k = 1; k <= n; k++) {
//   A = 2 + 1 / A;
//   console.log(A);
// }


// for masala 32

// let n = 10;
// let A = 1;

// for (let k = 1; k <= n; k++) {
//   A = (A + 1) / k;
//   console.log(A);
// }

// for masala 33

// let n = 10;
// let F1 = 1,
//   F2 = 1;

// console.log(F1);
// console.log(F2);

// for (let k = 3; k <= n; k++) {
//   let F = F1 + F2;
//   console.log(F);
//   F1 = F2;
//   F2 = F;
// }


// for masala 34

// let n = 10;
// let A1 = 1,
//   A2 = 2;

// console.log(A1);
// console.log(A2);

// for (let k = 3; k <= n; k++) {
//   let A = (A1 + 2 * A2) / 3;
//   console.log(A);
//   A1 = A2;
//   A2 = A;
// }


// for masala 35

// let n = 10;
// let A1 = 1,
//   A2 = 2,
//   A3 = 3;

// console.log(A1);
// console.log(A2);
// console.log(A3);

// for (let k = 4; k <= n; k++) {
//   let A = A2 + A3 - 2 * A1;
//   console.log(A);
//   A1 = A2;
//   A2 = A3;
//   A3 = A;
// }


// for masala 36

// let n=5
// let k=2
// let res=0

// for(let i=1; i<=n; i++){
//     let x=1
//     for(let j=1; j<=k; j++){
//         x*=i
//     }
//     res+=x
// }
// console.log(res)

// ikkinchi usul

// let N = 5,K = 3;
// let sum = 0;

// for (let i = 1; i <= N; i++) {
//   let power = 1;
//   for (let j = 1; j <= K; j++) {
//     power *= i;
//   }
//   sum += power;
// }

// console.log("Natija:", sum);

// for masala 37

// let N = 4;
// let sum = 0;

// for (let i = 1; i <= N; i++) {
//   let power = 1;
//   for (let j = 1; j <= i; j++) {
//     power *= i;
//   }
//   sum += power;
// }

// console.log("Natija:", sum);


// for masala 38

// let N = 4;
// let sum = 0;

// for (let i = 1; i <= N; i++) {
//   let power = 1;
//   for (let j = 1; j <= N - i + 1; j++) {
//     power *= i;
//   }
//   sum += power;
// }

// console.log("Natija:", sum);

// for masala 39

// let A = 2, B = 4;

// for (let i = A; i <= B; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += i + " ";
//   }
//   console.log(row.trim());
// }

// for masala 40 

let a=3
let b=7

for(let i=a; i<=b; i++){
    for(let j=1; j<=i-a+1; j++){
        console.log(i)
    }
}