//   Function

// function 1

// const PowerA3=(a)=>{
//     console.log(a**3)
// }

// PowerA3(2)
// PowerA3(5);
// PowerA3(3);

// function 2

// const PowerA234 = (a) => ({
//     kvadrat: a ** 2,
//     kub: a ** 3,
//     tortinchi: a ** 4
// });

// console.log(PowerA234(2));
// console.log(PowerA234(3));
// console.log(PowerA234(4));

// function 3

// const MEAN = (x, y) => ({
//     middleArifmetic: (x + y) / 2, 
//     geometricArifmetic: (x * y)**2
// });

// const A = 4, B = 16, C = 9, D = 25;

// console.log("A va B:", MEAN(A, B));
// console.log("A va C:", MEAN(A, C));
// console.log("A va D:", MEAN(A, D));

// function 4

// const Triangle=(a, b, c)=>{
//     if((a+b)>c && (a+c)>b && (c+b)>a){
//         p=a+b+c
//         l=p/2
//         s=(l*(l-a)*(l-b)*(l-c))**(0.5)
//         console.log(p, s)
//     }else{
//         console.log("Bu kesmalardan uchburchak yasab bo'lmaydi ")
//     }

// }

// Triangle(3, 4, 5)
// Triangle(8, 6, 4)
// Triangle(1, 6, 3)
// Triangle(3, 4, 9);

// function 5

// const DigitNumberCount = (a) => {
//     let count = 0;
//     let summ = 0;
//     while (a >= 1) {
//         let number = a % 10;
//         a = parseInt(a / 10);  
//         count++;
//         summ += number;
//     }
//     console.log("Raqamlar soni : "+ count, "Raqamlar yig'indisi : "+ summ);
// }

// DigitNumberCount(1235);  
// DigitNumberCount(156);    
// DigitNumberCount(89);     
// DigitNumberCount(34567);  
// DigitNumberCount(543);    
// DigitNumberCount(5); 

// function 6

// const DigitCountSum = (a) => {
//     let count = 0, sum = 0;
//     while (a > 0) {
//         sum += a % 10;
//         a = parseInt(a / 10);
//         count++;
//     }
//     console.log(count, sum);
// };

// DigitCountSum(1234); 
// DigitCountSum(56);  

// function 7

// const InvertDigit = (a) => {
//     let reversed = 0;
//     while (a > 0) {
//         reversed = reversed * 10 + (a % 10);
//         a = parseInt(a / 10);
//     }
//     console.log(reversed);
// };

// InvertDigit(1234); 
// InvertDigit(56); 


// function 8

// const AddRightDigit = (son, raqam) => {
//     let newSon = son;
//     let pow = 1;

//     while (pow <= newSon) {
//         pow *= 10;
//     }

//     console.log(son * 10 + raqam);
// };

// AddRightDigit(123, 5); 
// AddRightDigit(78, 9); 

// function 9



// function 10

// const Swap = (a, b) => {
//     let x = a;
//     a = b;
//     b = x;
//     console.log(a, b);
// };

// Swap(5, 10); // 10 5
// Swap(3, 7);  // 7 3

// second method

// const Swap = (a, b) => {
//     a = a + b;
//     b = a - b;
//     a = a - b;
//     console.log(a, b);
// };

// Swap(5, 10); // 10 5
// Swap(3, 7);  // 7 3

// function 11

// const Minmax = (x, y) => {
//     if (x > y) {
//         let temp = x;
//         x = y;
//         y = temp;
//     }
//     console.log(x, y);
// };

// Minmax(8, 3);  // 3 8
// Minmax(5, 9);  // 5 9

// second method

// const Minmax = (x, y) => {
//     if (x > y) {
//         x = x + y;
//         y = x - y;
//         x = x - y;
//     }
//     console.log(x, y);
// };

// Minmax(8, 3);  // 3 8
// Minmax(5, 9);  // 5 9

//  function  12

// const SortInc3 = (a, b, c) => {
//     let arr = [a, b, c].sort((x, y) => x - y);
//     console.log(...arr);
// };

// SortInc3(8, 3, 5);  // 3 5 8
// SortInc3(1, 6, 2);  // 1 2 6

// function 13

// const SortDec3 = (a, b, c) => {
//     let arr = [a, b, c].sort((x, y) => y - x);
//     console.log(...arr);
// };

// SortDec3(8, 3, 5);  // 8 5 3
// SortDec3(1, 6, 2);  // 6 2 1

// function 14

// const ShiftRight3 = (a, b, c) => {
//     a = a + b + c;
//     b = a - (b + c);
//     c = a - (b + c);
//     a = a - (b + c);
//     console.log(a, b, c);
// };

// ShiftRight3(1, 2, 3); // 3 1 2
// ShiftRight3(5, 6, 7); // 7 5 6

// function 15

// const ShiftLeft3 = (a, b, c) => {
//     a = a + b + c;
//     b = a - (b + c);
//     c = a - (b + c);
//     a = a - (b + c);
//     console.log(b, c, a);
// };

// ShiftLeft3(1, 2, 3); // 2 3 1
// ShiftLeft3(5, 6, 7); // 6 7 5

// second method

// 
// const ShiftLeft3 = (a, b, c) => {
//     [a, b, c] = [b, c, a];
//     console.log(a, b, c);
// };

// ShiftLeft3(1, 2, 3); // 2 3 1
// ShiftLeft3(5, 6, 7); // 6 7 5

// function 16

// const ishora=(num)=>{
//     if(num>0) return 1;
//     if(num<0) return -1;
//     return 0;
// }

// console.log(ishora(-2))
// console.log(ishora(9));
// console.log(ishora(0));
// console.log(ishora(-8));

// function 17

// const rootCount=(a, b, c)=>{
//     let  d=b*b-4*a*c;
//     if(d>0) return 2;
//     if(d==0) return 1;
//     return 0;
// }

// console.log(rootCount(1, -3, 2));
// console.log(rootCount(1, 2, 1));
// console.log(rootCount(1, 1, 1));

// function 18

// const doira=(R1, R2, R3)=>{
//     let S1=Math.PI*R1*R1
//     let S2=Math.PI*R2*R2
//     let S3 = Math.PI * R3 * R3
//     console.log("Birinchi doira Yuzi :"+S1)
//     console.log("Birinchi doira Yuzi :"+S2)
//     console.log("Birinchi doira Yuzi :"+S3);
// }

// doira(3, 4, 5)

// function 19

// const RingS = (R1, R2) => {
//   let PI = 3.1415;
//   let area1 = PI * (R1 * R1);
//   let area2 = PI * (R2 * R2);
//   let result = area1 - area2;
//   return result;
// };
// console.log(RingS(5, 3)); 

// function 20

// const TriangleP = (A, B) => {
//   let kvadrat = (A * A + B * B)**(0.5);
//   let perimeter = A + B + kvadrat;
//   return perimeter;
// };
// console.log(TriangleP(3, 4)); 

// function 21

// const SumRange = (A, B) => {
//   if (A > B) {
//     return 0;
//   }
//   let sum = 0;
//   for (let i = A; i <= B; i++) {
//     sum += i;
//   }
//   return sum;
// };
// console.log(SumRange(1, 5));

// function 22

// const Calc = (A, B, Op) => {
//   let result;
//   if (Op === 1) {
//     result = A - B;
//   } else if (Op === 2) {
//     result = A * B;
//   } else if (Op === 3) {
//     result = A / B;
//   } else {
//     result = A + B;
//   }
//   return result;
// };
// console.log(Calc(10, 2, 3));

// function 23

// const Quarter = (X, Y) => {
//   if (X > 0 && Y > 0) {
//     return 1;
//   } else if (X < 0 && Y > 0) {
//     return 2;
//   } else if (X < 0 && Y < 0) {
//     return 3;
//   } else {
//     return 4;
//   }
// };
// console.log(Quarter(-5, -3));

// function 24

// const Even = (K) => {
//   if (K % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(Even(4)); 

// function 25

// const IsSquare = (K) => {
//   let sqrt = (K*K);
//   if (sqrt === parseInt(sqrt)) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(IsSquare(9)); 

// function 26

// const IsPower5 = (K) => {
//   if (K < 1) {
//     return false;
//   }
//   while (K > 1) {
//     if (K % 5 !== 0) {
//       return false;
//     }
//     K = K / 5;
//   }
//   return true;
// };
// console.log(IsPower5(25)); 

// function 27

// const IsPowerN = (K, N) => {
//   if (K < 1) {
//     return false;
//   }
//   while (K > 1) {
//     if (K % N !== 0) {
//       return false;
//     }
//     K = K / N;
//   }
//   return true;
// };
// console.log(IsPowerN(27, 3)); 

// function 28

// const IsPrime = (N) => {
//   if (N < 2) {
//     return false;
//   }
//   for (let i = 2; i <= (N*N); i++) {
//     if (N % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(IsPrime(7)); 

// function 29

// const DigitCount = (K) => {
//   let count = 0;
//   while (K > 0) {
//     K = parseInt(K / 10);
//     count++;
//   }
//   return count;
// };
// console.log(DigitCount(12345)); 


// function 30

// const DigitN = (K, N) => {
//     let count = 0, temp = K;
    
//     while (temp > 0) {
//         count++;
//         temp = Math.floor(temp / 10);
//     }
    
//     if (N > count) return -1; 
    
//     for (let i = 1; i < N; i++) {
//         K = Math.floor(K / 10);
//     }
    
//     return K % 10;
// };
// console.log(DigitN(12345, 2)); // 4

// function 31

// const IsPalindrom = (N) => {
//     let original = N, reversed = 0;
    
//     while (N > 0) {
//         reversed = reversed * 10 + (N % 10);
//         N = Math.floor(N / 10);
//     }
    
//     return original === reversed;
// };
// console.log(IsPalindrom(121)); // true


// function 32 

// const DegToRad = (D) => {
//     return D * Math.PI / 180;
// };
// console.log(DegToRad(180)); // 3.1415...


// function 33

// const RadToDeg = (R) => {
//     return R * 180 / Math.PI;
// };
// console.log(RadToDeg(Math.PI)); // 180

// function 34

// const Fact = (N) => {
//     let result = 1;
    
//     for (let i = 1; i <= N; i++) {
//         result *= i;
//     }
    
//     return result;
// };
// console.log(Fact(5)); // 120

// function 35

// const Fact2 = (N) => {
//     let result = 1;
    
//     for (let i = N; i > 0; i -= 2) {
//         result *= i;
//     }
    
//     return result;
// };
// console.log(Fact2(5)); // 15 (5 * 3 * 1)

// function 36

// const Fib = (N) => {
//     if (N <= 1) return N;
    
//     let a = 0, b = 1, temp;
    
//     for (let i = 2; i <= N; i++) {
//         temp = a + b;
//         a = b;
//         b = temp;
//     }
    
//     return b;
// };
// console.log(Fib(7)); // 13

// function 37

// const Power1 = (A, B) => {
//     let result = 1;
    
//     for (let i = 0; i < B; i++) {
//         result *= A;
//     }
    
//     return result;
// };
// console.log(Power1(2, 3)); // 8

// function 38

