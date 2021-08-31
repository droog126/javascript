function fbi(n){
    
    if (n==0 || n==1){
        return n;
    }else{
        return fbi(n-2)+fbi(n-1)
    }
}

var r=fbi(5);
console.log(r)