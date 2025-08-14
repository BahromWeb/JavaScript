


// let project = {
//   frontend: [
//     { name: "John", hours: 35 },
//     { name: "Alice", hours: 42 }
//   ],
//   backend: {
//     api: [
//       { name: "Sam", hours: 50 },
//       { name: "Olga", hours: 45 },
//       { subApi: [{ name: "Kate", hours: 25 }] }
//     ],
//     db: [
//       { name: "Max", hours: 30 },
//       { name: "Nick", hours: 20 }
//     ]
//   }
// };


// const sumHours=(data)=>{
//      let total=0;
//      if(Array.isArray(data)){
//         for(let item of data){
//             if(typeof item==="object" && item!=null){
//                 if("hours" in item){
//                     total+=item.hours
//                 }else{
//                     total+=sumHours(item)
//                 }
//             }
//         }
//      }else if(typeof data==="object" && data!=null){
//         for(let value of Object.values(data)){
//             total+=sumHours(value)
//         }
//      }
//      return total
// }

// console.log(sumHours(project)); // 247



for(let i=0; i<10; i++){
    console.log(i)
}

console.log(i)

