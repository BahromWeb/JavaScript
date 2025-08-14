

let res=0;

const sum=(n)=>{
    console.log(n)
    if(n==1){
        return res+=1
    }else{
        res+=n
        return sum(n-1)
    }
}

sum(5)
console.log(res)