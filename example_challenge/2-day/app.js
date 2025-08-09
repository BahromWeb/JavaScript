// 1-masala — Sonlar kvadratini chiqarish
// Shart: 1 dan 5 gacha bo‘lgan sonlarning kvadratini ekranga chiqaring.

// for(let i=0; i<5; i++){
//     console.log(i,i*i)
// }

// let harf="B"

// if(harf==harf.toUpperCase()){
//     console.log(`${harf} Katta harf`)
// }else{
//     console.log(`${harf} kichkina harf`)
// }

// 3-masala — 5 ga karrali sonlar
// Shart: 1 dan 50 gacha bo‘lgan faqat 5 ga karrali sonlarni chiqaring.

// for(let i=1; i<50; i++){
//     if(i%5==0){
//         console.log(i)
//     }
// }


// 4-masala — Massivdagi barcha sonlar yig‘indisi
// Shart: [4, 7, 1, 3] massivining yig‘indisini hisoblang.

// let arr=[23, 4, 56, 7, 8, 0, 22]
// let sum=0;

// for(let i=0; i<arr.length; i++){
//     sum+=arr[i]
// }

// console.log(sum)

// 5-masala — 3 ga va 5 ga bo‘linadigan sonlar
// Shart: 1 dan 30 gacha bo‘lgan faqat 3 va 5 ga bo‘linadigan sonlarni chiqaring.

// for(let i=1; i<30; i++){
//     if(i%3==0 && i%5==0){
//         console.log(i)
//     }
// }

// 6-masala — Matndagi so‘zlar soni
// Shart: "Men JavaScript o‘rganayapman" jumlasida nechta so‘z borligini toping.

// let sentence = "Men JavaScript organayapman";

// let word=sentence.split(" ")

// console.log(word.length)

// 7-masala — Teskari massiv
// Shart: [1, 2, 3, 4] massivini teskari tartibda chiqaring.

// let num=[1, 2, 3, 4]

// console.log(num.reverse())

// 8-masala — Unli harflar soni
// Shart: "javascript" so‘zida nechta unli harf (a, e, i, o, u) borligini hisoblang.

// let text = "javascript";
// let vowels = "aeiou";
// let count=0

// for(let bor of text){
//     if(vowels.includes(bor)){
//         count++
//     }
// }

// console.log(count)

// 9-masala — Unikal elementlar
// Shart: [1, 2, 2, 3, 4, 4, 5] massivida faqat unikal (takrorlanmagan) sonlarni chiqaring.

// let nums = [1, 2, 2, 3, 4, 4, 5];
// let unique = [];

// for(let i=1; i<nums.length-1; i++){
//     if(!unique.includes(i)){
//         unique.push(i)
//     }
// }

// console.log("Unikal elementlar:", unique);

// 10-masala — Armstrong soni
// Shart: 153 soni Armstrong soniga misol: har bir raqam kubining yig‘indisi o‘ziga teng (1³ + 5³ + 3³ = 153). Son Armstrong ekanini tekshiring.

// let num=153
// let digit=num.toString().split('')
// let sum=0;

//   for(let i=0; i<digit.length; i++){
//         sum=Math.pow(Number(i), 3)
//   }

//   if(sum==num){
//      console.log("Armstrong soni");
//   } else {
//     console.log("Armstrong soni emas");
//   }
