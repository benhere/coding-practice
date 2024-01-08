
// find sum of first n natural numbers

function findSum(n){
    return (n * (n+1))/2;
}

let t1 = performance.now();
console.log(findSum(1000000000));
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds`);