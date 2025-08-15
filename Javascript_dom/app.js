

let user={
    name:"Webbrain",
    title:"IT center",
}

console.log(Object.getOwnPropertyDescriptor(user, 'name'))
Object.defineProperty(user, "name", {writable: false})
user.name="wba"
console.log(user.name)