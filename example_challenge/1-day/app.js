// 1-masala — Son juft yoki toq ekanini aniqlash
// Shart: Foydalanuvchi kiritgan son juft yoki toq ekanini ekranga chiqaring.

// let a=7

// if(a%2==0){
//     console.log(`${a} son juft`)
// }else{
//      console.log(`${a} son toq`)
// }


// 2-masala — Musbat yoki manfiy son
// Shart: Kiritilgan son musbat, manfiy yoki nol ekanini aniqlang.

// let a=-5

// if(a>0){
//     console.log(`${a} son musbat`)
// }else if(a<0){
//     console.log(`${a} son manfiy`)
// }else{
//     console.log(`${a} son 0 ga teng`)
// }

// 3-masala — 1 dan 10 gacha sonlar yig‘indisi
// Shart: 1 dan 10 gacha bo‘lgan sonlar yig‘indisini toping.


// let sum=0

// for(let i=1; i<=10; i++){
//     sum+=i
// }

// console.log(sum)

// 4-masala — Eng katta son
// Shart: Uchta son berilgan. Eng kattasini aniqlang.

// let a=4, b=7, c=0

// let max=0

// if(a>=b && a>=c){
//     max=a
// }else if(b>=a && b>=c){
//     max=b
// }else{
//     max=c
// }


// console.log(max)

// 5-masala — Massivdagi eng kichik son
// Shart: [3, 5, 1, 9, -4] massivdagi eng kichik sonni toping.

// let arr = [3, 5, 1, 9, -4];
// let min = arr[0];

// for(let i=1; i<arr.length; i++){
//      if(arr[i]<min){
//         min=arr[i]
//      }
// }

// console.log(min)

// 6-masala — Matnda belgi sonini hisoblash
// Shart: "salom" so‘zida nechta belgi borligini toping.

// let a="salom"

// console.log(a.length)

// 7-masala — Juft sonlar yig‘indisi
// Shart: 1 dan 20 gacha bo‘lgan juft sonlar yig‘indisini toping.

// let total=0

// for(let i=0; i<=20; i+=2){
//     if(i%2==0){
//         total+=i
//     }
// }

// console.log(total)

// 8-masala — Palindrom so‘z tekshirish
// Shart: So‘z teskari o‘qilganda ham bir xil bo‘lsa ("level", "anna") palindrom deyiladi. So‘zni tekshiring.

// let str="bahrom"
// let reversed=str.split('').reverse().join('')
 
//   if(str==reversed){
//     console.log("Kiritilgan so'z palindrom")
//   }else{
//      console.log("Kiritilgan so'z palindrom emas")
//   }

// 9-masala — Takrorlanuvchi elementlarni topish
// Shart: [1, 2, 3, 2, 4, 1, 5] massivida takrorlanuvchi sonlarni toping.

// let nums = [1, 2, 3, 2, 4, 1, 5];
// let duplicates = [];
//   for(let i=0; i<nums.length; i++){
//       for(let j=i+1; j<nums.length; j++){
//          if(nums[i]===nums[j] && !duplicates.includes(nums[i])){
//             duplicates.push(nums[i])
//          }
//       }
//   }

//   console.log("Takrorlanganlar", duplicates)

// 10-masala — Fibonacci sonlari
// Shart: 10 ta Fibonacci sonini chiqaring (0, 1, 1, 2, 3, 5, 8...).

const generateFib = (n) => {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }

    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; 
    }
    return fib;
};

console.log(generateFib(10));
// Natija: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
