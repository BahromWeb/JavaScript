




let user1={name:"webbrain"}
let user2={title:"Academy"}

user1.__proto__=user2
// Object.assign(user1, user2)

console.log(user1.title)