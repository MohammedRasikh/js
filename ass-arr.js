//Create an array containing 5 numbers. Use a loop to print multiplication tables of all the 5 numbers. Solve the problem using for-in, for-of and forEach
// 5*5=25 4*4=16
// [1,2,3,4,5]
// n*n

let num =[1,2,3,4,5];
mul=0;
for(let i in num){
mul=num[i]*num[i];
console.log(mul);
}

// let num =[1,2,3,4,5];
// mul=0;
// for(i=0;i<num.length;i++){
//     mul=num[i]*num[i];
//     console.log(mul);
// }
