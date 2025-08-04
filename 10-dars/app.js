
// string example 

// string 1

// let char = 'A';  
// console.log(char.charCodeAt(0));  

// string 2

// let n = 65;  // 65 - 'A' belgisi
// console.log(String.fromCharCode(n));  // Belgini chiqaramiz

// string 3

// let a = "D";
// console.log(String.fromCharCode(a.charCodeAt(0) - 1),a,String.fromCharCode(a.charCodeAt(0) + 1));

// string 4

// let m = 5;
// for (let i = 0; i < m; i++) {
//   console.log(String.fromCharCode(65 + i));
// }

// string 5

// let p = 5;
// for (let i = p - 1; i >= 0; i--) {
//   console.log(String.fromCharCode(97 + i));
// }

// string 6

// let input = "A";

// if (input >= "0" && input <= "9") {
//   console.log("digit");
// } else if ((input >= "A" && input <= "Z") || (input >= "a" && input <= "z")) {
//   console.log("lotin");
// } else {
//   console.log(0);
// }

// string 7

// let str1 = "Hello";
// console.log(str1.charCodeAt(0), str1.charCodeAt(str1.length - 1));

// string 8

// let count = 5;
// let char2 = "B";
// let result = "";
// for (let i = 0; i < count; i++) {
//   result += char2;
// }
// console.log(result);

// string 9

// let strA = "Hello";
// let strB = "World";
// console.log(strA + strB);

// string 10

// let strReverse = "Hello";
// let reversed = "";
// for (let i = strReverse.length - 1; i >= 0; i--) {
//   reversed += strReverse[i];
// }
// console.log(reversed);

// string 11

// let strWithSpaces = "HelloWorld";
// let spacedStr = "";

// for (let i = 0; i < strWithSpaces.length; i++) {
//   spacedStr += strWithSpaces[i];

//   if (i < strWithSpaces.length - 1) {
//     spacedStr += " ";
//   }
// }

// console.log(spacedStr);

// string 12

// let strStar = "Hello";
// let starCount = 3;
// let newStr = "";

// for (let i = 0; i < strStar.length; i++) {
//   newStr += strStar[i]; 
//   if (i < strStar.length - 1) {
//     for (let j = 0; j < starCount; j++) {
//       newStr += "*";
//     }
//   }
// }

// console.log(newStr);

// string 13

// let strDigits = "Hello1234";
// let digitCount = 0;
// for (let i = 0; i < strDigits.length; i++) {
//   if (strDigits[i] >= "0" && strDigits[i] <= "9") {
//     digitCount++;
//   }
// }
// console.log(digitCount);

// string 14

// let strUpperCase = "HelloWORLD";
// let upperCount = 0;
// for (let i = 0; i < strUpperCase.length; i++) {
//   if (strUpperCase[i] >= "A" && strUpperCase[i] <= "Z") {
//     upperCount++;
//   }
// }
// console.log(upperCount);

// string 15

// let strMixed = "ПриветHello";
// let countMixed = 0;
// for (let i = 0; i < strMixed.length; i++) {
//   if (
//     (strMixed[i] >= "a" && strMixed[i] <= "z") ||
//     (strMixed[i] >= "а" && strMixed[i] <= "я")
//   ) {
//     countMixed++;
//   }
// }
// console.log(countMixed);

// string 16

// let str = "Hello WORLD!";
// let lowerStr = "";

// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   if (char >= "A" && char <= "Z") {
//     lowerStr += String.fromCharCode(char.charCodeAt(0) + 32);
//   } else {
//     lowerStr += char;
//   }
// }

// console.log(lowerStr);

// string 17

// let str = "Hello World!";
// let upperStr = "";

// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   if (char >= "a" && char <= "z") {
//     upperStr += String.fromCharCode(char.charCodeAt(0) - 32);
//   } else {
//     upperStr += char;
//   }
// }

// console.log(upperStr);

// string 18

// let str = "Hello World!";
// let swappedStr = "";

// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   if (char >= "A" && char <= "Z") {
//     swappedStr += String.fromCharCode(char.charCodeAt(0) + 32);
//   } else if (char >= "a" && char <= "z") {
//     swappedStr += String.fromCharCode(char.charCodeAt(0) - 32);
//   } else {
//     swappedStr += char;
//   }
// }

// console.log(swappedStr);

// string 19

// let str = "Hello 123, 45.6";
// let result = 0;

// let num = parseFloat(str);

// if (!isNaN(num)) {
//   if (str.indexOf(".") !== -1) {
//     result = 2;
//   } else {
//     result = 1;
//   }
// } else {
//   result = 0;
// }

// console.log(result);

// string 20

// let numStr = "12345";
// let reversedStr = "";

// for (let i = numStr.length - 1; i >= 0; i--) {
//   reversedStr += numStr[i];
// }

// console.log(reversedStr);

// string 21

// let numStr = "54321";
// let originalStr = "";

// for (let i = 0; i < numStr.length; i++) {
//   originalStr += numStr[i];
// }

// console.log(originalStr);

// string 22

// let numStr = "12345";
// let sum = 0;

// for (let i = 0; i < numStr.length; i++) {
//   sum += parseInt(numStr[i]);
// }

// console.log(sum);

// string 23

// let expr = "7 + 3 - 2";
// let parts = expr.split(" ");
// let result = parseInt(parts[0]);

// for (let i = 1; i < parts.length; i += 2) {
//   let operator = parts[i];
//   let number = parseInt(parts[i + 1]);

//   if (operator === "+") {
//     result += number;
//   } else if (operator === "-") {
//     result -= number;
//   }
// }

// console.log(result);

// string 24

// let binaryStr = "1010";
// let decimalValue = 0;

// for (let i = 0; i < binaryStr.length; i++) {
//   decimalValue = decimalValue * 2 + (binaryStr[i] - "0");
// }

// console.log(decimalValue);

// string 25

// let decimalNum = 10;
// let binaryStr = "";

// while (decimalNum > 0) {
//   binaryStr = (decimalNum % 2) + binaryStr;
//   decimalNum = Math.floor(decimalNum / 2);
// }

// console.log(binaryStr);

// string 26

// math method

// var str = "Hello World";
// var n = 20;
// var res = "";

// if (str.length > n) {
//   for (let i = n; i > 0; i--) {
//     res += str[str.length - i];
//   }
// } else {
//   for (let i = 1; i <= n - str.length; i++) {
//     res += ".";
//   }
//   res += str;
// }

// console.log("Matn uzunligi:", str.length);
// console.log("Yangi matn:", res);
// console.log("Yangi matn uzunligi:", res.length);

// string method

// var str = "Hello";
// var n = 20;
// var res = "";

// if (str.length > n) {
//   res = str.slice(-n); 
// } else {
//   res = str.padStart(n, "."); 
// }

// console.log("Matn uzunligi:", str.length);
// console.log("Yangi matn:", res);
// console.log("Yangi matn uzunligi:", res.length);

// string 27

// const string27Math = (S1, S2, N1, N2) => {
//     let res = "";
    
//     for (let i = 0; i < N1; i++) {
//         res += S1[i];
//     }
    
//     for (let i = S2.length - N2; i < S2.length; i++) {
//         res += S2[i];
//     }
    
//     return res;
// };

// console.log(string27Math("HelloWorld", "JavaScript", 3, 5)); // "Helcript"

// second string method

// const string27_method = (S1, S2, N1, N2) => {
//     let firstPart = S1.slice(0, N1); 
//     let secondPart = S2.slice(-N2); 
//     return firstPart + secondPart;
// };

// console.log(string27_method("HelloWorld", "JavaScript", 3, 5)); // "Helcript"

// string 28
// const string28Math = (S, C) => {
//     let res = "";

//     for (let i = 0; i < S.length; i++) {
//         res += S[i]; 
//         if (S[i] === C) {
//             res += C;
//         }
//     }

//     return res;
// };

// console.log(string28Math("Hello", "o"));

// second string method

// const string28_method = (S, C) => {
//     let parts = S.split(C); 
//     let newString = parts.join(C + C); 
//     return newString;
// };

// console.log(string28_method("Hello", "l")); 

// string 29

// const string29Math = (S1, S2, C) => {
//     let res = "";

//     for (let i = 0; i < S1.length; i++) {
//         if (S1[i] === C) {
//             res += S2;
//         }
//         res += S1[i];
//     }

//     return res;
// };

// console.log(string29Math("hello", "123", "l")); // "he123l123lo"

// second strinf method

// const string29_method = (S1, S2, C) => {
//     let parts = S1.split(C); 
//     let newString = parts.join(S2 + C); 
//     return newString;
// };

// console.log(string29_method("hello", "123", "l")); // "he123l123lo"

// string 30

// const string30_math = (S1, S2, C) => {
//     let res = "";

//     for (let i = 0; i < S1.length; i++) {
//         res += S1[i];
//         if (S1[i] === C) {
//             res += S2;
//         }
//     }

//     return res;
// };

// console.log(string30_math("hello", "123", "l")); // "hel123l123o"

// second strinf method

// const string30_method = (S1, S2, C) => {
//     let parts = S1.split(C); 
//     let newString = parts.join(C + S2); 
//     return newString;
// };

// console.log(string30_method("hello", "123", "l")); // "hel123l123o"

// string 31

// const string31_math = (S1, S2) => {
//     for (let i = 0; i <= S1.length - S2.length; i++) {
//         if (S1.slice(i, i + S2.length) === S2) {
//             return true;
//         }
//     }
//     return false;
// };

// console.log(string31_math("hello world", "world")); // true

// second string method

// const string31_method = (S1, S2) => {
//     let isFound = S1.includes(S2); 
//     return isFound;
// };

// console.log(string31_method("hello world", "world")); // true

// string 32

// const string32_math = (S1, S2) => {
//     let count = 0;

//     for (let i = 0; i <= S1.length - S2.length; i++) {
//         if (S1.slice(i, i + S2.length) === S2) {
//             count++;
//         }
//     }

//     return count;    
// };

// console.log(string32_math("abababa", "aba")); // 2

// second string method

// const string32_method = (S1, S2) => {
//     let parts = S1.split(S2); 
//     let count = parts.length - 1; 
//     return count;
// };

// console.log(string32_method("abababa", "aba")); // 2

// string 33

// const string33_math = (S1, S2) => {
//     for (let i = 0; i <= S1.length - S2.length; i++) {
//         if (S1.slice(i, i + S2.length) === S2) {
//             return S1.slice(0, i) + S1.slice(i + S2.length);
//         }
//     }
//     return S1;
// };

// console.log(string33_math("hello world", "world")); // "hello "

// second string method

// const string33_method = (S1, S2) => {
//     let newString = S1.replace(S2, ""); 
//     return newString;
// };

// console.log(string33_method("hello world", "world")); // "hello "

// string 34

// const string34Math = (S1, S2) => {
//     for (let i = S1.length - S2.length; i >= 0; i--) {
//         if (S1.slice(i, i + S2.length) === S2) {
//             return S1.slice(0, i) + S1.slice(i + S2.length);
//         }
//     }
//     return S1;
// };

// console.log(string34Math("hello world world", "world")); // "hello world "

// second string method

// const string34_method = (S1, S2) => {
//     let lastIndex = S1.lastIndexOf(S2);
//     return lastIndex !== -1 ? S1.slice(0, lastIndex) + S1.slice(lastIndex + S2.length) : S1;
// };

// console.log(string34_method("hello world world", "world")); // "hello world "

// string 35

// const string35_math = (S1, S2) => {
//     let res = "";
//     let i = 0;

//     while (i < S1.length) {
//         if (S1.slice(i, i + S2.length) === S2) {
//             i += S2.length;
//         } else {
//             res += S1[i];
//             i++;
//         }
//     }
    
//     return res;
// };

// console.log(string35_math("banana apple banana", "banana")); // " apple "

// second string method

// const string35_method = (S1, S2) => {
//     return S1.split(S2).join("");
// };

// console.log(string35_method("banana apple banana", "banana")); // " apple "

// string 36

// const string36_math = (S1, S2, S3) => {
//     for (let i = 0; i <= S1.length - S2.length; i++) {
//         if (S1.slice(i, i + S2.length) === S2) {
//             return S1.slice(0, i) + S3 + S1.slice(i + S2.length);
//         }
//     }
//     return S1;
// };

// console.log(string36_math("hello world", "world", "JavaScript")); // "hello JavaScript"

// second string method

// const string36_method = (S1, S2, S3) => {
//     return S1.replace(S2, S3);
// };

// console.log(string36_method("hello world", "world", "JavaScript")); // "hello JavaScript"

// string 37

// const string37_math = (S1, S2, S3) => {
//     for (let i = S1.length - S2.length; i >= 0; i--) {
//         if (S1.slice(i, i + S2.length) === S2) {
//             return S1.slice(0, i) + S3 + S1.slice(i + S2.length);
//         }
//     }
//     return S1;
// };

// console.log(string37_math("hello world world", "world", "JavaScript")); // "hello world JavaScript"

// second string method

// const string37_method = (S1, S2, S3) => {
//     let lastIndex = S1.lastIndexOf(S2);
//     return lastIndex !== -1 ? S1.slice(0, lastIndex) + S3 + S1.slice(lastIndex + S2.length) : S1;
// };

// console.log(string37_method("hello world world", "world", "JavaScript")); // "hello world JavaScript"

// string 38

// const string38_math = (S1, S2, S3) => {
//     let res = "";
//     let i = 0;

//     while (i < S1.length) {
//         if (S1.slice(i, i + S2.length) === S2) {
//             res += S3;
//             i += S2.length;
//         } else {
//             res += S1[i];
//             i++;
//         }
//     }
    
//     return res;
// };

// console.log(string38_math("apple banana apple", "apple", "orange")); // "orange banana orange"

// second string method

// const string38_method = (S1, S2, S3) => {
//     return S1.split(S2).join(S3);
// };

// console.log(string38_method("apple banana apple", "apple", "orange")); // "orange banana orange"

// string 39

// const string39_math = (S) => {
//     let firstSpace = -1, secondSpace = -1;

//     for (let i = 0; i < S.length; i++) {
//         if (S[i] === " ") {
//             if (firstSpace === -1) firstSpace = i;
//             else {
//                 secondSpace = i;
//                 break;
//             }
//         }
//     }

//     if (firstSpace !== -1 && secondSpace !== -1) {
//         return S.slice(0, firstSpace + 1) + S.slice(secondSpace);
//     }
    
//     return S;
// };

// console.log(string39_math("hello world example")); // "hello example"

// second string method

// const string39_method = (S) => {
//     let parts = S.split(" ");
//     return parts.length > 2 ? parts[0] + " " + parts.slice(2).join(" ") : S;
// };

// console.log(string39_method("hello world example")); // "hello example"

// string 41
// const string41_math = (S) => {
//     let count = 0;
//     let isWord = false;

//     for (let i = 0; i < S.length; i++) {
//         if (S[i] !== " " && !isWord) {
//             count++;
//             isWord = true;
//         } else if (S[i] === " ") {
//             isWord = false;
//         }
//     }

//     return count;
// };

// console.log(string41_math("Salom dunyo bu test")); // 4

// string method 

// const string41_method = (S) => S.trim().split(/\s+/).length;

// console.log(string41_method("Salom dunyo bu test")); // 4

// string 42

// const string42 = (S) => {
//     let words = S.split(" ");
//     let count = 0;

//     for (let i = 0; i < words.length; i++) {
//         let firstChar = words[i][0];
//         let lastChar = words[i][words[i].length - 1];

//         if (firstChar >= "A" && firstChar <= "Z" && lastChar >= "A" && lastChar <= "Z") {
//             count++;
//         }
//     }

//     return count;
// };

// console.log(string42("Ali BEK Doston DiyorB")); // 2

// string 43

// const string43 = (S) => {
//     let words = S.split(" ");
//     let count = 0;

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].indexOf("A") !== -1) {
//             count++;
//         }
//     }

//     return count;
// };

// console.log(string43("Ali Bek Anvar Akmal")); // 3

// string 44

// const string44 = (S) => {
//     let words = S.split(" ");
//     let count = 0;

//     for (let i = 0; i < words.length; i++) {
//         let A_count = 0;
        
//         for (let j = 0; j < words[i].length; j++) {
//             if (words[i][j] === "A") {
//                 A_count++;
//             }
//         }

//         if (A_count >= 3) {
//             count++;
//         }
//     }

//     return count;
// };

// console.log(string44("Anvar AAAb Akmal AAAA")); // 2

// string 45

// const string45 = (S) => {
//     let words = S.split(" ");
//     let minLength = words[0].length;

//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length < minLength) {
//             minLength = words[i].length;
//         }
//     }

//     return minLength;
// };

// console.log(string45("Salom dunyo bu test")); // 2

// string 46

// const string46 = (S) => {
//     let words = S.split(" ");
//     let maxLength = words[0].length;

//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length > maxLength) {
//             maxLength = words[i].length;
//         }
//     }

//     return maxLength;
// };

// console.log(string46("Salom dunyo bu test")); // 5

// string 47

// const string47 = (S) => {
//     let words = S.split(" ");
//     let result = "";

//     for (let i = 0; i < words.length; i++) {
//         result += words[i];
//         if (i < words.length - 1) {
//             result += ".";
//         }
//     }

//     return result;
// };

// console.log(string47("Salom dunyo bu test")); // "Salom.dunyo.bu.test"


// string 48

// const string48 = (S) => {
//     let words = S.split(" ");
//     let result = [];

//     for (let i = 0; i < words.length; i++) {
//         let firstChar = words[i][0];
//         let newWord = firstChar;

//         for (let j = 1; j < words[i].length; j++) {
//             if (words[i][j] === firstChar) {
//                 newWord += ".";
//             } else {
//                 newWord += words[i][j];
//             }
//         }

//         result.push(newWord);
//     }

//     return result.join(" ");
// };

// console.log(string48("minimum maximum")); // "mini.u maxi.u"


// string 49

// const string49 = (S) => {
//     let words = S.split(" ");
//     let result = [];

//     for (let i = 0; i < words.length; i++) {
//         let lastChar = words[i][words[i].length - 1];
//         let newWord = "";

//         for (let j = 0; j < words[i].length - 1; j++) {
//             if (words[i][j] === lastChar) {
//                 newWord += ".";
//             } else {
//                 newWord += words[i][j];
//             }
//         }

//         newWord += lastChar;
//         result.push(newWord);
//     }

//     return result.join(" ");
// };

// console.log(string49("minimum maximum")); // "mi.um ma.um"

// string 50

// const string50 = (S) => {
//     let words = [];
//     let word = "";

//     for (let i = 0; i < S.length; i++) {
//         if (S[i] !== " ") {
//             word += S[i];
//         } else if (word !== "") {
//             words.push(word);
//             word = "";
//         }
//     }

//     if (word !== "") {
//         words.push(word);
//     }

//     let result = "";
//     for (let i = words.length - 1; i >= 0; i--) {
//         result += words[i];
//         if (i > 0) {
//             result += " ";
//         }
//     }

//     return result;
// };

// console.log(string50("  Salom   dunyo   bu   test  ")); // "test bu dunyo Salom"

// string 51

// const string51 = (S) => {
//     let words = S.split(" ");
    
//     for (let i = 0; i < words.length - 1; i++) {
//         for (let j = i + 1; j < words.length; j++) {
//             if (words[i] > words[j]) {
//                 let temp = words[i];
//                 words[i] = words[j];
//                 words[j] = temp;
//             }
//         }
//     }

//     return words.join(" ");
// };

// console.log(string51("Salom dunyo bu test")); // "Salom bu dunyo test"

// string 52

