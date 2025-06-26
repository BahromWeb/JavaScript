
// Berilgan son musbat bo‘lsa true, aks holda false qaytarsin.

// const musbatNumber = (number) => {
//   if (number > 0) {
//     console.log("Son 0 dan katta");
//     return true;
//   } else if (number === 0) {
//     console.log("Son 0 ga teng");
//     return false;
//   } else {
//     console.log("Son 0 dan kichkina");
//     return false;
//   }
// };

// console.log(musbatNumber(0));   

// Son toqmi yoki juftmi aniqlab, "toq" yoki "juft" matnini qaytar.

// const oddorEven=(number)=>{
//     if(number%2==0){
//         return "Juft son"
//     }else{
//         return "Toq son"
//     }
// }

// console.log(oddorEven(4))
// console.log(oddorEven(5))
// console.log(oddorEven(0))

// Berilgan ikki sonning yig‘indisini qaytaring.

// const sum=(a, b)=>{
//     let resualt=a+b
//     return resualt
// }   


// console.log(sum(23, 45))

// Berilgan matn nechta belgidan iboratligini aniqlang.

// const getLenght=(text)=>{
//     let length=text.length
//     return length
// }

// console.log(getLenght("Bahrom"))
// console.log(getLenght("Webbrain IT Accademy"))

// Berilgan son musbat, manfiy yoki nol ekanini aniqlang va matn ko‘rinishida qaytaring.

// const checkNumber=(number)=>{
//     if(number>0){
//         return "Musbat son"
//     }else if(number<0){
//         return "Manfiy son"
//     }else{
//         return "Nol"
//     }
// }

// console.log(checkNumber(3))
// console.log(checkNumber(-4))
// console.log(checkNumber(0))

// Berilgan n-chi Fibonacci sonini hisoblang.
// Masalan: fibonacci(6) = 8
// Fibonacci ketma-ketligi: 0, 1, 1, 2, 3, 5, 8, ...

// const fibonacciSon=(n)=>{
//     if(n==0){
//         return 0
//     }else if(n==1){
//         return 1
//     }

//     let first=0;
//     let second=1;
//     let next;

//     for(let i=2; i<=n; i++){
//         next=first+second
//         first=second
//         second=next
//     }

//     return next
// }
  
// console.log(fibonacciSon(4))


// Berilgan matnda nechta unli harf (a, e, i, o, u) borligini hisoblang.

// const countVowels=(text)=>{
//     let vowels=['a','e','i','o','u']
//     let count=0

//     for(let i=0; i<text.length; i++){
//         let char=text[i].toLowerCase();
//     }

//     if(vowels.includes(char)){
//         count++
//     }

//     return count
// }


// console.log(countVowels("Bahrom"))
// console.log(countVowels("UZBEKISTAN"))
// console.log(countVowels("JavaScript"))

