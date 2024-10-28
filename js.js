//1.reduce()
var a=[2,4,6,8,10].reduce((acc,curr)=>acc+curr,0)
console.log(a)

//2.reduce()
var b=[1,3,5,7].reduce((acc,curr)=>acc*curr,1)
console.log(b)

//3.map() to uppercase()
var fruits=["apple","banana","cherry"];
var uppercase=fruits.map(fruit=>fruit.toUpperCase());
console.log(uppercase);

//4.map()
var num=[1,2,3,4,5].map(x=>x*10);
console.log(num)

//5.map()
var people=[
    {name:'john',age:25},
    {name:'sarah',age:30},
    {name:'mike',age:35}].map(age=>age.age);
    console.log(people)

    //6.foreach()
    var f=["apple","banana","cherry"].forEach(z=>console.log(z))

    //7.foreach()
    const numbers = [1, 2, 3, 4, 5, 6];
let even = 0;
numbers.forEach(number => {
    if (number % 2 === 0) {
        even++;
    }
});

console.log(even);
