





let user={name:"Bahrom", last:"Hasanov"}

Object.prototype.fullName=function(){
    console.log(this.name, this.last)
    return this
}

user.fullName()


