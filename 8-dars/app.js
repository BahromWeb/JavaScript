// Today topic Array

// array 1:

// let n=20
// let x=1
// res=[]

// for(let i=0; i<n; i++){
//     res.push(x)
//     x+=2
// }
// for(let i=0; i<=res.length; i++){
//     console.log(res[i])
// }

// array 2

// first method

// let n=10
// let res=[]

// for(let i=0; i<n; i++){
//     res.push(2**i)
// }
// console.log(res)

// second method

// let n = 10;
// let x = 1;
// let res = [];

// for (let i = 1; i < n; i++) {
//   res.push(x);
//   x *= 2;
// }

// for (let i = 0; i < res.length; i++) {
//   console.log(res[i]);
// }

// array 3

// let n=20
// let a=5
// let d=3
// res=[]

// for(let i=0; i<n; i++){
//     res.push(a)
//     a+=d
// }
// for(let i=0; i<res.length; i++){
//     console.log(res[i])
// }

// array 4

// let n = 10, A = 2, D = 3;
// let res = [];
// for (let i = 0; i < n; i++) {
//   res.push(A);
//   A *= D;
// }
// for(let i=0; i<res.length; i++){
//     console.log(res[i])
// }


// array 5

// let n = 10;
// let res = [1, 1];
// for (let i = 2; i < n; i++) {
//   res.push(res[i - 1] + res[i - 2]);
// }
// for(let i=0; i<res.length; i++){
//   console.log(res[i])
// }

// array 6

// let n=10
// let a=4
// let b=6
// res=[a, b]

// for(let i=2; i<n; i++){
//   res.push(res[i-1]+res[i-2])
// }

// for(let i=0; i<res.length; i++){
//   console.log(res[i])
// }

// array 7

// let arr = [4, 5, 7, 8, 6, 9];

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// array 8

// let res=[23,45,67,342,567,456,123,890,31,67,98,13,19]
// let x=0;

// for(let i=0; i<res.length; i++){
//   if(res[i]%2==1){
//      console.log(res[i]);
//      x++
//   }
// } 
// console.log(x)

// array 9

// let res=[23,45,67,342,567,456,123,890,31,67,98,13,19]
// let x=0;

// for(let i=res.length-1; i>0; i--){
//   if(res[i]%2==0){
//      console.log(res[i]);
//      x++
//   }
// } 
// console.log(x)

// array 10

// let res=[4,8,5,3,12,13,16,17,19,23,34,43,53,57]
// let x=0;

// for(let i=0; i<res.length; i++){
//   if(res[i]%2==0){
//      console.log(res[i]);
//      x++
//   }
// } 
// console.log("Array juft elementlar soni :"+x)

// array 11

// first method

// let n=40
// let res=[]

// for(let i=0; i<n; i++){
//     res.push(i)
// }
// console.log(res)

// let k=3
// for(let i=k; i<res.length; i++){
//     console.log(res[i], i)
//}
// let arr = [4, 5, 7, 8, 6, 9, 3, 2, 10, 15]; 
// let k = 2;
// let res = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % k === 0) {
//     res.push(arr[i]);
//   }
// }

// console.log(res);

// array 12


// let arr = [4, 5, 7, 8, 6, 9, 3, 2, 10, 15]; 

// for (let i = 0; i < arr.length; i+=2) {
//      console.log(arr[i]);

// }

// array 13

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
// let res = [];

// for (let i = arr.length - 1; i >= 0; i -= 2) {
//   res.push(arr[i]);
// }

// console.log(res);

// array 14

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// let res = [];

// for (let i = 0; i < arr.length; i += 2) {
//   res.push(arr[i]);
// }
// for (let i = 1; i < arr.length; i += 2) {
//   res.push(arr[i]);
// }
// console.log(res);

// array 15

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,17];

// for (let i = 1; i < arr.length; i += 2) {
//   console.log(arr[i],i)
// }

// if(arr.length%2==0){
//   var x=arr.length-2
// }else{
//   var x=arr.length-1
// }
// for (let i = x; i >=0 ; i -= 2) {
//   console.log(arr[i], i);
// }

// array 16

// let n = 43
// let res = [];

// for (let i = 1; i < n; i++) {
//   res.push(i);
// }

// for (let i = 0; i < res.length / 2; i++) {
//   console.log(res[i], i);

//   if (i !== res.length - i - 1) {
//     console.log(res[res.length - i - 1], res.length - i - 1);
//   }
// }

// console.log(res);


// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// let n = arr.length;
// let result = [];

// for (let i = 0; i < n; i++) {
//   if (i % 2 === 0) {
//     result.push(arr[i / 2]); 
//   } else {
//     result.push(arr[n - 1 - (i - 1) / 2]); 
//   }
// }

// console.log("Resual :", result);

// array 17

// let arr = [10, 20, 30, 40, 50, 60]; 
// let n = arr.length;
// let result = [];

// let left = 0,
//   right = n - 1; // left = 0, right = 5

// while (left <= right) {
//   if (left < right) {
//     result.push(arr[left++]); // 10
//     result.push(arr[left++]); // 20
//     result.push(arr[right--]); // 60
//     result.push(arr[right--]); // 50
//   } else if (left === right) {
//     result.push(arr[left++]); // 30 qo'shiladi
//   }
// }

// console.log("Natija:", result);

// array 18

// let arr = [123,45,67,89,456,232,478,987,234,765,34,21,13,3,9,12,99]
// let x=0

// for(let i=0; i<arr.length; i++){
//      if(arr[i]<arr[arr.length-1]){
//       x=arr[i]
//       break;
//      }
     
// }

// console.log(x)

// array 19

// let arr = [23,45,67,89,456,232,478,987,234,765,34,21,13,3,9,12,99]
// let x=0

// for(let i=0; i<arr.length; i++){
//      if(arr[i]<arr[arr.length-1] && arr[i]>arr[0]){
//       x=arr[i]
//      }
     
// }

// console.log(x)

// array 20

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// let k=3
// let l=8
// let sum=0

// for(let i=k+1; i<l; i++){
//   sum+=arr[i]
// }

// console.log(sum)

// array 21

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let k = 3;
// let l = 8;
// let sum = 0;
// let num=0

// for (let i = k + 1; i < l; i++) {
//   sum += arr[i];
//   num++
// }
// let result=sum/num
// console.log(result);

// array 22

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let K = 2, L = 5; 
// let sum = 0, count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (i < K || i > L) { 
//         sum += arr[i]; 
//         count++; 
//     }
// }
// let result=sum/count

// console.log("O'rta arifmetik:", result); 

// array 23

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let K = 2, L = 5; 
// let sum = 0, count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (i < K || i > L) { 
//         sum += arr[i];
//     }
// }

// console.log(sum); 

// second method

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let k = 2,
//   l = 5;
// let sum = 0

// for (let i = 0; i < k; i++) {
//   sum += arr[i]
// }

// for (let i = l + 1; i < arr.length; i++) {
//   sum += arr[i]
// }
// console.log(sum);

// array 23

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let k = 2,
//   l = 5;
// let sum = 0,
//   count = 0;

// for (let i = 0; i < k; i++) {
//   sum += arr[i];
//   count++;
// }

// for (let i = l + 1; i < arr.length; i++) {
//   sum += arr[i];
//   count++;
// }

// let x = sum / count;
// console.log("Orasidagi sonlar o'rta arifmetigi:", x);

// array 24

// let arr = [1,5,6,8,3];
// let n = arr.length;
// let d = arr[1] - arr[0]; 
// let ArifmetikPro = false

// for (let i = 2; i < n; i++) {
//   if (arr[i] - arr[i - 1] == d) {
//     ArifmetikPro = true
//     break;
//   }
// }

// if (ArifmetikPro) {
//   console.log("Massiv arifmetik progressiya va ayirmasi:", d);
// } else {
//   console.log("Massiv arifmetik progressiya emas, natija: 0");
// }

// array 25

// let arr = [2, 6, 18, 54]; 
// let n = arr.length;
// let q = arr[1] / arr[0];
// let GeometrikPro = false;

// for (let i = 2; i < n; i++) {
//   if (arr[i] / arr[i - 1] == q) {
//     GeometrikPro = true;
//     break;
//   }
// }
// if (GeometrikPro) {
//   console.log("Massiv geometrik progressiya va ayirmasi:", q);
// } else {
//   console.log("Massiv geometrik progressiya emas, natija: 0");
// }

// array 26

// let arr = [2,3,5,6,7,12,8,11]
// let x=0;

// for(let i=0; i<arr.length-1; i++){
//   if(arr[i]%2==arr[i+1]%2){
//     x=i+1
//     break;
//   }
// }
// console.log(x)

// second method

// let arr = [2, 5, 7, 11, 4, 17]; 
// let n = arr.length;
// let index = 0;

// for (let i = 1; i < n; i++) {
//   if (arr[i] % 2 === arr[i - 1] % 2) {
//     index = i;
//     break;
//   }
// }
// console.log("Ketma-ketlik tekshiruvi natijasi:", index);

// array 27

// first method

// var res = [1, -2, 3, -4, 5, -6, -3, -7, 34, -1, 43, -9, 234, -232, 232, -3, 232,];
// var x = 0

// for (let i = 1; i < res.length; i++) {
//   if (res[i]/Math.abs(res[i]) === res[i-1]/Math.abs(res[i-1])) {
//     x = i 
//     break;
//   }
// }

// console.log("Massiv:", res);
// console.log("Ketma-ket ishorasi bir xil bolgan birinchi element indeksi:", x);

// let arr = [3, -2, 5, -8, 7, -6]; 
// let index = 0; 

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] >= 0 === arr[i - 1] >= 0) {
//     index = i;
//     break;
//   }
// }

// console.log("Ketma-ketlik tekshiruvi natijasi:", index);

// array 28

// let arr = [8, 5, 7, 6, 4, 17,2]; 
// let minValue=arr[0];

// for(let i=2; i<arr.length; i+=2){
//    if(arr[i]<minValue){
//     minValue=arr[i]
//    }
// }

// console.log(minValue)

// array 29

// first method 


// let arr = [8, 80, 7, 19, 4, 17,2]; 
// let maxValue=arr[1];

// for(let i=3; i<arr.length; i+=2){
//    if(arr[i]>maxValue){
//     maxValue=arr[i]
//    }
// }

// console.log(maxValue)

// array 30

// let arr = [5, 10, 7, 3, 9, 15, 8, 6]; 
// let indexes = [];

// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] > arr[i + 1]) {
//     indexes.push(i);
//   }
// }

// console.log("Indekslar:", indexes);
// console.log("Elementlar soni:", indexes.length);

// array 31

// let arr = [5, 10, 7, 3, 9, 15, 8, 6]; 
// let indexes = []; 

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > arr[i - 1]) {
//     indexes.push(i); 
//   }
// }

// console.log("Indekslar (kamayish tartibida):");
// for (let i = indexes.length - 1; i >= 0; i--) {
//   console.log(indexes[i]);
// }

// console.log("Elementlar soni:", indexes.length);

// array 32

// let arr = [10, 5, 3, 8, 7, 12, 6, 9]
// let index = -1;

// for (let i = 1; i < arr.length - 1; i++) {
//   if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
//     index = i;
//     break; 
//   }
// }

// console.log("Birinchi lokal minimum indeksi:", index);

// array 33

// let arr = [10, 5, 15, 8, 20, 12, 6, 25, 9]
// let index = -1; 

// for (let i = arr.length - 2; i > 0; i--) {
//   if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//     index = i;
//     break;
//   }
// }

// console.log("Oxirgi lokal maksimum indeksi:", index);

// array 34

// let arr = [10, 5, 3, 8, 7, 12, 6, 9, 2, 4];
// let maxLocalMin = -Infinity;
// let index = -1; 

// for (let i = 1; i < arr.length - 1; i++) {
//   if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
//     if (arr[i] > maxLocalMin) {
//       maxLocalMin = arr[i];
//       index = i
//     }
//   }
// }

// if (maxLocalMin === -Infinity) {
//   console.log("Lokal minimumlar topilmadi.");
// } else {
//   console.log("Lokal minimumlar orasidan eng kattasi:", maxLocalMin);
//   console.log("Eng katta lokal minimum indeksi:", index);
// }

// second method

// let arr = [12, 34, 56, 43, 23, 44, 67, 89, 90, 234, 123, 543, 89];
// let minLocalMin = null; 

// for (let i = 1; i < arr.length - 1; i++) {
//   if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
//     if (minLocalMin === null || arr[i] < minLocalMin) {
//       minLocalMin = arr[i];
//     }
//   }
// }

// if (minLocalMin === null) {
//   console.log("Lokal minimumlar topilmadi.");
// } else {
//   console.log("Eng kichik lokal minimum:", minLocalMin);
// }

// array 35

// let arr = [12, 34, 56, 43, 23, 43, 67, 89, 90, 234, 123, 543, 89];
// let maxLocalMax = null; 

// for (let i = 1; i < arr.length - 1; i++) {
//   if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
//     if (maxLocalMax === null || arr[i] > maxLocalMax) {
//       maxLocalMax = arr[i];
//     }
//   }
// }

// if (maxLocalMax === null) {
//   console.log("Lokal maksimumlar topilmadi.");
// } else {
//   console.log("Eng katta lokal maksimum:", maxLocalMax);
// }

// array 36

// let arr = [12, 34, 56, 43, 23, 43, 67, 89, 90, 234, 123, 543, 89];
// let maxElement = null;

// for (let i = 0; i < arr.length; i++) {
//   let isLocal = false;

//   if (i > 0 && i < arr.length - 1) {
//     if ((arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) || (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])) {
//          isLocal = true; 
//     }
//   }

//   if (!isLocal) {
//     if (maxElement === null || arr[i] > maxElement) {
//       maxElement = arr[i];
//     }
//   }
// }

// if (maxElement === null) {
//   console.log("Bunday element yoq");
// } else {
//   console.log(
//     "Lokal minimum yoki maksimum bolmagan eng katta element:",
//     maxElement
//   );
// }

// array 37

// let arr = [1, 2, 3, 1, 5, 6, 7, 2, 8, 9, 10, 3, 4];
// let x = 0;
// let t = false;

// for (let i = 1; i < arr.length - 1; i++) {
//   if (arr[i] > arr[i - 1] && arr[i] < arr[i + 1]) {
//     t = true;
//   } else {
//     if (t) {
//       x++;
//       t = false;
//     }
//   }
// }

// console.log("Monoton o'suvchi oraliqlar soni:", x);

// array 38

// let arr = [10, 8, 6, 7, 5, 3, 2, 4, 1, 0, -2, -3];
// let x = 0;
// let t = false;

// for (let i = 1; i < arr.length - 1; i++) {
//   if (arr[i] < arr[i - 1] && arr[i] > arr[i + 1]) {
//     t = true;
//   } else {
//     if (t) {
//       x++;
//       t = false;
//     }
//   }
// }

// console.log("Monoton kamayuvchi oraliqlar soni:", x);

// array 39

// let arr = [10, 8, 6, 7, 5, 3, 2, 4, 1, 0, -2, -3];
// let x = 0;

// for (let i = 1; i < arr.length - 1; i++) {
//   if((arr[i] < arr[i - 1] && arr[i] > arr[i + 1]) ||  (arr[i] > arr[i - 1] && arr[i] < arr[i + 1])) {
//     x++;
//   }
// }

// console.log("O'zgarish nuqtalari soni:", x);

// array 40

// var res = [1, -2, 3, -4, 5, -6, -3, -7, 34, -1, 43, -9, 234, -232, 232, -3, 232,];
// var r = 10;
// var x = Math.abs(r-res[0])
// var a=res[0]
// for (let i = 1; i < res.length; i++) {
//    if(Math.abs(r-res[i])<x)
//     a=res[i]
// }

// console.log(r +" ga eng yaqin son :", a);

// array 41

// let arr = [1, 7, 3, 5, 9, 4];
// let maxSum = arr[0] + arr[1]; 
// let num1 = arr[0], num2 = arr[1];

// for (let i = 1; i < arr.length - 1; i++) {
//   let sum = arr[i] + arr[i + 1];
//   if (sum > maxSum) {
//     maxSum = sum;
//     num1 = arr[i];
//     num2 = arr[i + 1];
//   }
// }

// console.log("Eng katta yig'indili qo'shni elementlar:", num1, num2);

// array 42

// let arr = [1, 7, 3, 5, 9, 4]; 
// let R = 10; 

// let resultSum = arr[0] + arr[1]; 
// let num1 = arr[0], num2 = arr[1];

// for (let i = 1; i < arr.length - 1; i++) {
//   let sum = arr[i] + arr[i + 1];

//   if (Math.abs(sum - R) < Math.abs(resultSum - R)) {
//     resultSum = sum;
//     num1 = arr[i];
//     num2 = arr[i + 1];
//   }
// }

// console.log("Eng yaqin yigindili qoshni elementlar:", num1, num2);

// array 43

// let arr = [1, 2, 2, 3, 3, 3, 5, 6, 6, 7]; 
// let uniqueCount = 1; 

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] !== arr[i - 1]) {
//     uniqueCount++;
//   }
// }

// console.log("Takrorlanmagan elementlar soni:", uniqueCount);

// array 44

// var arr = [3, 5, 1, 3, 7, 5, 9];
// var indices = {};

// for (var i = 0; i < arr.length; i++) {
//   for (var j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       console.log(
//         "Element " + arr[i] + " takrorlandi, indekslari: " + i + " va " + j
//       );
//     }
//   }
// }

// array 45

// var arr = [4, 9, 1, 2, 5, 6];
// var minDiff = Math.abs(arr[1] - arr[0]);
// var index1 = 0,
//   index2 = 1;

// for (var i = 1; i < arr.length - 1; i++) {
//   var diff = Math.abs(arr[i + 1] - arr[i]);
//   if (diff < minDiff) {
//     minDiff = diff;
//     index1 = i;
//     index2 = i + 1;
//   }
// }

// console.log("Eng yaqin elementlar indekslari: ", index1, index2);

// array 46

// var arr = [7, 14, 3, 10, 2, 8, 6];
// var R = 5;
// var closest1 = arr[0];
// var closest2 = arr[1];

// for (var i = 2; i < arr.length; i++) {
//   if (Math.abs(R - arr[i]) < Math.abs(R - closest1)) {
//     closest2 = closest1;
//     closest1 = arr[i];
//   } else if (Math.abs(R - arr[i]) < Math.abs(R - closest2)) {
//     closest2 = arr[i];
//   }
// }

// console.log("R=" + R + " ga eng yaqin 2 ta element:", closest1, closest2);

// array 47

// var arr = [7, 4, 2, 3, 1, 5, 2, 4, 7];
// var unique = [];

// for (var i = 0; i < arr.length; i++) {
//   var isUnique = true;
//   for (var j = 0; j < i; j++) {
//     if (arr[i] === arr[j]) {
//       isUnique = false;
//       break;
//     }
//   }
//   if (isUnique) {
//     unique.push(arr[i]);
//   }
// }

// console.log("Takrorlanmagan elementlar:", unique);

// array 48

// var arr = [3, 5, 3, 3, 2, 1, 5, 2, 5];
// var maxCount = 0;
// var mostFrequent;
// var counts = {};

// for (var i = 0; i < arr.length; i++) {
//   var count = 1;
//   for (var j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       count++;
//     }
//   }
//   if (count > maxCount) {
//     maxCount = count;
//     mostFrequent = arr[i];
//   }
// }

// console.log("Eng kop takrorlangan element:", mostFrequent, "soni:", maxCount);

// array 49

// var arr = [1, 2, 3, 4, 6]; // 5 yo‘q
// var n = arr.length;
// var correct = true;

// for (var i = 1; i <= n; i++) {
//   var found = false;
//   for (var j = 0; j < n; j++) {
//     if (arr[j] === i) {
//       found = true;
//       break;
//     }
//   }
//   if (!found) {
//     console.log("Xato kiritilgan indeks:", i);
//     correct = false;
//     break;
//   }
// }

// if (correct) {
//   console.log("Massiv to‘g‘ri shakllangan.");
// }

// array 50


// var arr = [4, 7, 1, 9, 2, 5];

// for (var i = 0; i < arr.length - 1; i++) {
//   if (arr[i] > arr[i + 1]) {
//     console.log("Element:", arr[i], "indeks:", i);
//   }
// }

// array 51

// var a = [1, 2, 3];
// var b = [4, 5, 6];

// console.log("A massiv:", a);
// console.log("B massiv:", b);

// var temp = a;
// a = b;
// b = temp;

// console.log("Almashtirilgandan keyin A massiv:", a);
// console.log("Almashtirilgandan keyin B massiv:", b);

// array 52

// var a = [2, 8, 3, 10, 6];
// var b = [];

// for (var i = 0; i < a.length; i++) {
//   if (a[i] < 5) {
//     b[i] = 2 * a[i];
//   } else {
//     b[i] = a[i] / 2;
//   }
// }

// console.log("B massiv:", b);

// array 53

// var a = [3, 6, 2, 9];
// var b = [4, 5, 7, 1];
// var c = [];

// for (var i = 0; i < a.length; i++) {
//   if (a[i] > b[i]) {
//     c[i] = a[i];
//   } else {
//     c[i] = b[i];
//   }
// }

// console.log("C massiv:", c);

// array 54

// var a = [3, 8, 4, 6, 7, 2, 9];
// var b = [];
// var index = 0;

// for (var i = 0; i < a.length; i++) {
//   if (i % 2 === 0) {
//     b[index] = a[i];
//     index++;
//   }
// }

// console.log("B massiv:", b);

// array 55

// var a = [2, 5, 7, 3, 9, 8, 4];
// var b = [];
// var index = 0;

// for (var i = 1; i < a.length; i += 2) {
//   b[index] = a[i];
//   index++;
// }

// console.log("b massiv:", b);
// console.log("b massiv uzunligi:", b.length);

// array 56

// var a = [1, 6, 4, 8, 3, 7, 2, 5];
// var b = [];
// var index = 0;

// for (var i = 3; i < a.length; i += 3) {
//   b[index] = a[i];
//   index++;
// }

// console.log("b massiv:", b);
// console.log("b massiv uzunligi:", b.length);

// array 57

// var a = [1, 2, 3, 4, 5, 6, 7, 8];
// var b = [];
// var index = 0;

// for (var i = 0; i < a.length; i += 2) {
//   b[index] = a[i];
//   index++;
// }
// for (var i = 1; i < a.length; i += 2) {
//   b[index] = a[i];
//   index++;
// }

// console.log("b massiv:", b);

// array 58

// var a = [3, 5, 2, 7, 4];
// var b = [];
// var sum = 0;

// for (var k = 0; k < a.length; k++) {
//   sum += a[k];
//   b[k] = sum;
// }

// console.log("b massiv:", b);

// array 59

// var a = [3, 5, 2, 7, 4];
// var b = [];
// var sum = 0;

// for (var k = 0; k < a.length; k++) {
//   sum += a[k];
//   b[k] = sum / (k + 1);
// }

// console.log("b massiv:", b);

// array 60

// var a = [3, 5, 2, 7, 4];
// var b = [];
// var n = a.length;

// for (var k = 0; k < n; k++) {
//   var sum = 0;
//   for (var j = k; j < n; j++) {
//     sum += a[j];
//   }
//   b[k] = sum;
// }

// console.log("b massiv:", b);

// array 61

// var a = [3, 5, 2, 7, 4];
// var b = [];
// var n = a.length;

// for (var k = 0; k < n; k++) {
//   var sum = 0;
//   var count = 0;
//   for (var j = k; j < n; j++) {
//     sum += a[j];
//     count++;
//   }
//   b[k] = sum / count;
// }

// console.log("b massiv:", b);

// array 62

// var a = [-3, 5, -2, 7, 4, -8, 6];
// var b = [];
// var c = [];
// var indexB = 0,
//   indexC = 0;

// for (var i = 0; i < a.length; i++) {
//   if (a[i] > 0) {
//     b[indexB] = a[i];
//     indexB++;
//   } else {
//     c[indexC] = a[i];
//     indexC++;
//   }
// }

// console.log("b massiv (musbatlar):", b, "uzunligi:", b.length);
// console.log("c massiv (manfiylar):", c, "uzunligi:", c.length);

// array 63

// var a = [1, 2, 3];
// var b = [5, 6, 7, 8];
// var c = [];
// var i = 0,
//   j = 0,
//   k = 0;

// while (i < a.length && j < b.length) {
//   if (a[i] < b[j]) {
//     c[k] = a[i];
//     i++;
//   } else {
//     c[k] = b[j];
//     j++;
//   }
//   k++;
// }

// while (i < a.length) {
//   c[k] = a[i];
//   i++;
//   k++;
// }

// while (j < b.length) {
//   c[k] = b[j];
//   j++;
//   k++;
// }

// console.log("c massiv:", c);

// array 64

// var a = [1, 4, 7];
// var b = [2, 5, 8];
// var c = [3, 6, 9];
// var d = [];
// var index = 0;

// for (var i = 0; i < a.length; i++) {
//   d[index] = a[i];
//   index++;
// }
// for (var i = 0; i < b.length; i++) {
//   d[index] = b[i];
//   index++;
// }
// for (var i = 0; i < c.length; i++) {
//   d[index] = c[i];
//   index++;
// }

// for (var i = 0; i < d.length - 1; i++) {
//   for (var j = i + 1; j < d.length; j++) {
//     if (d[i] > d[j]) {
//       var temp = d[i];
//       d[i] = d[j];
//       d[j] = temp;
//     }
//   }
// }

// console.log("d massiv:", d);

// array 65

// var a = [2, 5, 8, 3, 6];
// var k = 2; // Indeks (1 <= k < n)

// if (k >= 0 && k < a.length) {
//   a[k] += 1;
// }

// console.log("Yangi massiv:", a);

// array 66

// var a = [3, 6, 9, 12, 15, 18, 21, 24];
// var lastEven = -1;

// for (var i = a.length - 1; i >= 0; i--) {
//   if (a[i] % 2 == 0) {
//     lastEven = a[i];
//     break;
//   }
// }

// if (lastEven != -1) {
//   for (var i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0) {
//       a[i] = lastEven;
//     }
//   }
// }

// console.log("Yangi massiv:", a);

// array 67

// var a = [2, 5, 8, 7, 10, 13, 12, 15];
// var lastOdd = -1;

// for (var i = a.length - 1; i >= 0; i--) {
//   if (a[i] % 2 == 1) {
//     lastOdd = a[i];
//     break;
//   }
// }

// if (lastOdd != -1) {
//   for (var i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 1) {
//       a[i] = lastOdd;
//     }
//   }
// }

// console.log("Yangi massiv:", a);

// array 68

// var a = [7, 3, 5, 1, 9, 4, 6];
// var minIndex = 0,
//   maxIndex = 0;

// for (var i = 1; i < a.length; i++) {
//   if (a[i] < a[minIndex]) minIndex = i;
//   if (a[i] > a[maxIndex]) maxIndex = i;
// }

// var temp = a[minIndex];
// a[minIndex] = a[maxIndex];
// a[maxIndex] = temp;

// console.log("Yangi massiv:", a);

// array 69

// var a = [3, 5, 7, 9, 11, 13];

// for (var i = 0; i < a.length / 2; i++) {
//   var temp = a[i];
//   a[i] = a[a.length - 1 - i];
//   a[a.length - 1 - i] = temp;
// }

// console.log("Yangi massiv:", a);

// array 70

// var a = [2, 4, 6, 8, 10, 12];
// var n = a.length / 2;

// for (var i = 0; i < n; i++) {
//   var temp = a[i];
//   a[i] = a[n + i];
//   a[n + i] = temp;
// }

// console.log("Yangi massiv:", a);

// array 71

// var a = [3, 7, 2, 9, 5];

// for (var i = 0; i < a.length / 2; i++) {
//   var temp = a[i];
//   a[i] = a[a.length - 1 - i];
//   a[a.length - 1 - i] = temp;
// }

// console.log("Yangi massiv:", a);

// array 72

// var a = [10, 20, 30, 40, 50];
// var k = 1,
//   h = 3;

// var temp = a[k];
// a[k] = a[h];
// a[h] = temp;

// console.log("Yangi massiv:", a);

// array 73

// var a = [10, 20, 30, 40, 50];
// var k = 1,
//   h = 3;

// while (k < h) {
//   var temp = a[k];
//   a[k] = a[h];
//   a[h] = temp;
//   k++;
//   h--;
// }

// console.log("Yangi massiv:", a);

// array 74

// var a = [10, 5, 8, 3, 7, 12, 6];
// var minIndex = 0,
//   maxIndex = 0;

// for (var i = 1; i < a.length; i++) {
//   if (a[i] < a[minIndex]) minIndex = i;
//   if (a[i] > a[maxIndex]) maxIndex = i;
// }

// if (minIndex > maxIndex) {
//   var temp = minIndex;
//   minIndex = maxIndex;
//   maxIndex = temp;
// }

// for (var i = minIndex + 1; i < maxIndex; i++) {
//   a[i] = 0;
// }

// console.log("Yangi massiv:", a);

// array 75

// var a = [10, 5, 8, 3, 7, 12, 6];
// var minIndex = 0,
//   maxIndex = 0;

// for (var i = 1; i < a.length; i++) {
//   if (a[i] < a[minIndex]) minIndex = i;
//   if (a[i] > a[maxIndex]) maxIndex = i;
// }

// if (minIndex > maxIndex) {
//   var temp = minIndex;
//   minIndex = maxIndex;
//   maxIndex = temp;
// }

// var left = minIndex + 1,
//   right = maxIndex - 1;
// while (left < right) {
//   var temp = a[left];
//   a[left] = a[right];
//   a[right] = temp;
//   left++;
//   right--;
// }

// console.log("Yangi massiv:", a);

// array 76

// var a = [3, 9, 2, 10, 4, 8, 1];

// for (var i = 1; i < a.length - 1; i++) {
//   if (a[i] > a[i - 1] && a[i] > a[i + 1]) {
//     a[i] = 0;
//   }
// }

// console.log("Yangi massiv:", a);

// array 77

// var a = [5, 2, 8, 1, 6, 3, 9];

// for (var i = 1; i < a.length - 1; i++) {
//   if (a[i] < a[i - 1] && a[i] < a[i + 1]) {
//     a[i] = a[i] * a[i];
//   }
// }

// console.log("Yangi massiv:", a);

// array 78

// var a = [4, 8, 12, 16, 20];
// var b = [];

// b[0] = a[0];
// b[a.length - 1] = a[a.length - 1];

// for (var i = 1; i < a.length - 1; i++) {
//   b[i] = (a[i - 1] + a[i + 1]) / 2;
// }

// console.log("Yangi massiv:", b);

// array 79

// var a = [10, 20, 30, 40, 50];
// var b = newmassiv(a.length);

// b[0] = 0;
// for (var i = 1; i < a.length; i++) {
//   b[i] = a[i - 1];
// }

// console.log("Yangi massiv:", b);

// array 80

// var a = [10, 20, 30, 40, 50];
// var b = newmassiv(a.length);

// for (var i = 0; i < a.length - 1; i++) {
//   b[i] = a[i + 1];
// }

// b[a.length - 1] = 0;

// console.log("Yangi massiv:", b);

// array 81

// var a = [10, 20, 30, 40, 50, 60];
// var k = 2;
// var b = newMassiv(a.length);

// for (var i = 0; i < k; i++) {
//   b[i] = 0;
// }

// for (var i = k; i < a.length; i++) {
//   b[i] = a[i - k];
// }

// console.log("Yangi massiv:", b);

// array 82

// var a = [10, 20, 30, 40, 50, 60];
// var k = 2;
// var b = newMassiv(a.length);

// for (var i = 0; i < a.length - k; i++) {
//   b[i] = a[i + k];
// }

// for (var i = a.length - k; i < a.length; i++) {
//   b[i] = 0;
// }

// console.log("Yangi massiv:", b);

// array 83

// var a = [10, 20, 30, 40, 50];
// var last = a[a.length - 1];

// for (var i = a.length - 1; i > 0; i--) {
//   a[i] = a[i - 1];
// }

// a[0] = last;

// console.log("Yangi massiv:", a);

// array 84

// var a = [10, 20, 30, 40, 50];
// var first = a[0];

// for (var i = 0; i < a.length - 1; i++) {
//   a[i] = a[i + 1];
// }

// a[a.length - 1] = first;

// console.log("Yangi massiv:", a);

// array 85

// var a = [10, 20, 30, 40, 50, 60];
// var k = 2;
// var b = newMassiv(a.length);

// for (var i = 0; i < a.length; i++) {
//   b[(i + k) % a.length] = a[i];
// }

// console.log("Yangi massiv:", b);

// array 86

// var a = [10, 20, 30, 40, 50, 60];
// var k = 2;
// var b = newMassiv(a.length);

// for (var i = 0; i < a.length; i++) {
//   b[i] = a[(i + k) % a.length];
// }

// console.log("Yangi massiv:", b);

// array 87

// var a = [50, 20, 40, 10, 30];
// var first = a[0];

// a.splice(0, 1);
// a.sort((x, y) => x - y);
// a.unshift(first);

// console.log("Yangi massiv:", a);

// array 88

// var a = [50, 20, 40, 10, 30];
// var last = a[a.length - 1];

// a.pop();
// a.sort((x, y) => x - y);
// a.push(last);

// console.log("Yangi massiv:", a);

// array 89

// var a = [50, 20, 40, 10, 30];
// var index = 2; 
// var fixed = a[index];

// a.splice(index, 1);
// a.sort((x, y) => x - y);
// a.splice(index, 0, fixed);

// console.log("Yangi massiv:", a);

// array 90

// var a = [10, 20, 30, 40, 50];
// var k = 2;

// a.splice(k, 1);

// console.log("Yangi massiv:", a);

// array 91

// var a = [10, 20, 30, 40, 50, 60, 70];
// var k = 2, m = 5;

// a.splice(k, m - k);

// console.log("Yangi massiv:", a);

// array 92

// var a = [10, 15, 20, 25, 30, 35];

// a = a.filter((x) => x % 2 === 0);

// console.log("Yangi massiv:", a);

// array 93

// var a = [10, 20, 30, 40, 50, 60];

// a = a.filter((_, i) => i % 2 !== 0);

// console.log("Yangi massiv:", a);

// array 94

// var a = [10, 20, 30, 40, 50, 60];

// a = a.filter((_, i) => i % 2 === 0);

// console.log("Yangi massiv:", a);

// array 95

// var a = [10, 10, 20, 30, 30, 40, 50];

// for (var i = 0; i < a.length - 1; i++) {
//   if (a[i] === a[i + 1]) {
//     a.splice(i, 1);
//     i--;
//   }
// }

// console.log("Yangi massiv:", a);

// array 96

// var a = [10, 20, 10, 30, 20, 40, 50];

// a = a.filter((x, i, self) => self.indexOf(x) === i);

// console.log("Yangi massiv:", a);

// array 97

// var a = [10, 20, 10, 30, 20, 40, 50];

// a = a.filter((x, i, self) => self.lastIndexOf(x) === i);

// console.log("Yangi massiv:", a);

// array 98

// var a = [10, 20, 10, 30, 10, 20, 40, 50];

// a = a.filter((x) => a.filter((y) => y === x).length >= 3);

// console.log("Yangi massiv:", a);

// array 99

// var a = [10, 20, 10, 30, 10, 20, 40, 50];

// a = a.filter((x) => a.filter((y) => y === x).length <= 2);

// console.log("Yangi massiv:", a);

// array 100

// var a = [10, 20, 10, 30, 20, 40, 50];

// a = a.filter((x) => a.filter((y) => y === x).length !== 2);

// console.log("Yangi massiv:", a);

// array 101

// var a = [10, 20, 30, 40, 50];
// var k = 2;

// a.splice(k, 0, 0);

// console.log("Yangi massiv:", a);

// array 102

// var a = [10, 20, 30, 40, 50];
// var k = 2;

// a.splice(k + 1, 0, 0);

// console.log("Yangi massiv:", a);

// array 103

// var a = [10, 5, 30, 2, 50, 40];
// var minIndex = a.indexOf(Math.min(...a));
// var maxIndex = a.indexOf(Math.max(...a));

// a.splice(minIndex + 1, 0, 0);
// if (maxIndex > minIndex) maxIndex++;
// a.splice(maxIndex + 1, 0, 0);

// console.log("Yangi massiv:", a);

// array 104

// var a = [10, 20, 30, 40, 50];
// var k = 2,
//   m = 3;

// a.splice(k, 0, ...Array(m).fill(0));

// console.log("Yangi massiv:", a);

// array 105

// var a = [10, 20, 30, 40, 50];
// var k = 2,
//   m = 3;

// a.splice(k + 1, 0, ...Array(m).fill(0));

// console.log("Yangi massiv:", a);

// array 106

// var a = [10, 20, 30, 40, 50];

// for (var i = 0; i < a.length; i += 2) {
//   a[i] += 2;
// }

// console.log("Yangi massiv:", a);

// array 107

// var a = [10, 20, 30, 40, 50];

// for (var i = 1; i < a.length; i += 2) {
//   a[i] += 2;
// }

// console.log("Yangi massiv:", a);

// array 108

// var a = [-10, 20, -30, 40, 50];

// for (var i = 0; i < a.length; i++) {
//   if (a[i] > 0) {
//     a.splice(i, 0, 0);
//     i++;
//   }
// }

// console.log("Yangi massiv:", a);

// array 109

// var a = [-10, 20, -30, 40, 50];

// for (var i = 0; i < a.length; i++) {
//   if (a[i] < 0) {
//     a.splice(i + 1, 0, 0);
//     i++;
//   }
// }

// console.log("Yangi massiv:", a);

// array 110

// var a = [10, 15, 20, 25, 30, 35];

// a = a.map((x) => (x % 2 === 0 ? 0 : x));

// console.log("Yangi massiv:", a);



































