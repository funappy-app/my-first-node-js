'use strict';
const number = process.argv[2] || 0;
let sum = 0;
for(let i = 0;i<number;i++){
    sum = sum + i + 1;
}
console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.argv[2] + 'の合計値は:'　+ sum);
