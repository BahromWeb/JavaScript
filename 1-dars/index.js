// 1. JavaScript ishlash strukturasi (Working Structure of JavaScript)
// JavaScript bir ipli (single-threaded) va sodda (synchronous) til sifatida yaratilgan. Lekin zamonaviy JavaScriptda asynchronous (noaniq vaqtli) funksiyalar ham ishlatiladi.

// Asosiy tarkibiy qismlar:
// Call Stack (chaqiruv steki):
// JavaScript kodni yuqoridan pastga ketma-ket o‘qiydi. Har bir funksiya chaqirilganda, u Call Stack'ga qo‘shiladi va bajarilgach, u yerda chiqariladi.

// Web APIs (Brauzer tomonidan taqdim etiladi):
// setTimeout, DOM, AJAX, Fetch va boshqalar Web API'lar orqali amalga oshadi.

// Callback Queue:
// Web APIs bajarilganidan keyin natijani callback sifatida bu navbatga (queue) qo‘yadi.

// Event Loop:
// Call Stack bo‘sh bo‘lsa, Callback Queue'dan vazifani olib Call Stack'ga qo‘yadi va bajaradi.

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 1000);

// console.log("3");

//2. Threadlar haqida umumiy tushuncha (Thread — iplar)
//JavaScript single-threaded til hisoblanadi — ya'ni bir vaqtning o‘zida faqat bitta kod satri bajarilishi mumkin.

// function job1() {
//   console.log("Job 1");
// }

// function job2() {
//   console.log("Job 2");
// }

// job1();
// job2();

// 3. Variables va Declarations haqida batafsil
// Variable (o‘zgaruvchi) — ma’lumot saqlash uchun konteyner.
// JavaScript’da 3 xil deklaratsiya turi mavjud:

