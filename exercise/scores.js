"use strict";

const myScores = [-12, -3, 18, 10, 4, -1, 0, 14];

const modifiedScores = [...myScores];

modifiedScores.sort((a, b) => (a - b));

let NN = modifiedScores.findIndex(el => el >= 0);

/*
let NN = 0;
for (const val of modifiedScores)
    if (val >= 0)
        break;
    else
        NN++;

console.log(NN);
*/
console.log(NN);
modifiedScores.splice(0, NN);
//modifiedScores.shift();
//modifiedScores.shift();
let avg = 0;
for (const val of modifiedScores)
    avg += val;
avg = avg / modifiedScores.length;

const addedArray=Array(NN).fill(Math.round(avg));
//const modifiedScores2=[...modifiedScores,...addedArray];
modifiedScores.splice(modifiedScores.length, 0, ...addedArray);

console.log(modifiedScores);
//console.log(modifiedScores2);
