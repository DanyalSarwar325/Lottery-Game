 function generateTicket(n){
    let arr=new Array(n);
    for(let i=0; i<arr.length; i++){
       arr[i]=Math.floor(Math.random()*10)
    }
    return arr;
    
}

  function predict(Lottery){
     return Lottery.reduce((a,b)=>(
       a+b
     )
    )
        

}
export {generateTicket,predict};