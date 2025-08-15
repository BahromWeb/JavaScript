


let ar=[2, 4, 6, 78, 89, 56, 6, 8, 23]

Array.prototype.remove=function(n){
    let res=this.filter((value)=>value !== n)
    console.log(res)
}

ar.remove(4)