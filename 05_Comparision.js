// console.log(2 >1);
// console.log(2 < 1);
// console.log(2 >= 2);
// console.log(2 <= 2);
// console.log(2 == 2);
// console.log(2 != 2);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);

/* The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false. */

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

/*
All these comparisons return false because undefined is not converted to a number.
In fact, undefined isn’t equal to anything, not even to itself.
*/  

// === strict equality operator
console.log("2" === 2);    


