
// sum of first n-natural numbers using loop

function calculateSum(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}

let t1 = performance.now();
console.log(calculateSum(1000000000));
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds`);

