/*//  Print factorial of a number
// 5! = 1 * 2 * 3 * 4 * 5 = 120
let n=10;
console.log('factorials are');
for(let i=n;i<=n;i++){
    factorial = n * i;
    console.log(`${factorial}`);
    
}*/

function calcFactorial(n) {
    let fact = 1;
    for(let i = 1; i <= n; i++) {
        fact = fact * i;  // fact = 6
    }
    console.log(`Factorial of ${n} = ${fact}`);
}
calcFactorial(4);
calcFactorial(6);
calcFactorial(10);


