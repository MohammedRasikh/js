let numbers = [2, 3, 5, 7, 10];

for (let index in numbers) {
    let num = numbers[index];
    console.log(Multiplication Table for ${num}:(using forin));
    for (let i = 1; i <= 10; i++) {
        console.log(${num} x ${i} = ${num * i});
    }
    console.log(`${num}`);
}