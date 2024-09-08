console.log("comparison:");
// it is ideal for comparison that
// data types should be the same in javascript.

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
/*The reason is that an equality chcek(==) and comparisons (>,<,>=,<=) work differently
 comparison convert null to a number,trating it as 0. that's why null>=0 is true and null>0 . but in undefined 
 they alway give false */


console.log("2"==2);// true
console.log("2"===2);//false

//why?
/*equal too (==) just the the valuse 2 ==2 that is corrct but strict chcek(===)that just not chcek you valuse but also 
check your data type too. "2" is a string data type and 2 is a num data type that is why it is wrong .. */