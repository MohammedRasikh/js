// fibonacci series
let n=10;
let a=0 ,b=1;
console.log('fibo series');
for(let i=0;i<n;i++){
  
    sum=a+b;
    a=b;
    b=sum;
  
     console.log(`${sum}`);}
/*let calcFibo = (n) =>{
    let a=0 , b=1 ;
    for(i=1;i<n;i++){
    fact = a + b;
    a=b;
    b=fact;
    }
    console.log(`Factorial of ${n} = ${fact}`);
}
calcFibo(10);*/