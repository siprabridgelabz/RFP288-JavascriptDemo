console.log("sipra")
//datatype
let number=4;
console.log(typeof(number));
number="sipra";
console.log(typeof(number));
number=true;
console.log(typeof(number));
number=4.4555;
console.log(typeof(number));
//array
let array=new Array();
let arrays=new Array(10);
let arr=new Array(1,2,3,4,5,6,7,8,9,10);
let fruits=["apple","bannana"];
console.log(fruits[0]);
fruits[2]="kiwi";
console.log(fruits);
console.log(fruits.length);
fruits.push("mango");
console.log(fruits);
fruits.unshift("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.indexOf("apple");
console.log(fruits.indexOf("apple"));
console.log(Array.isArray (fruits));

//Arithmetic operation
//Addition
let sum=1+2;
console.log(sum);
let a='5';
b=3;
let c=a+b;
console.log(c);
//substraction
let x=12;
y=6;
let z=x-y;
console.log(z);
//multiplication
let result=x*y;
console.log(result);
//Division
let div=x/y;
console.log(div);
//reminder
let rem=x%y;
console.log(rem);
//Assignment operator
let sipra=0;
sipra+=1;
console.log(sipra);

let val=5,
val_two=10,
val_three=20
val=val_two=val_three
console.log(val);


let dd=5 && 10;
console.log(val);
//comparision operator
let res=4==5;
console.log(res);

let str='sipra',
str_one='divya';
let abs=str>str_one;
console.log(abs);

console.log(str=='sipra');
console.log(5>'1');
console.log(null==undefined);

let aa=true;
cc=false;
console.log(aa && cc);
console.log(!aa);
console.log(aa || cc);

let ab=25;
let bd='sipra';
if(bd=='sipra');
{
if(ab==2)
{
    console.log("condition is true");
}
else
{
    console.log("condition is false");
}
}
if(bd=='sipra'&&ab==25)
{
    console.log("condition is true");
}
let Month =2;
let MonthName;
Month>5?(MonthName='feb'):(MonthName='Invalid')
if(Month==1)
{
    MonthName='jan';
}
else if(Month==2)
{
    MonthName=='feb';
}
else if(Month==3)
{
    MonthName=='mar';
}
else
{
    MonthName='Invalid';
}
console.log(MonthName);
console.log(MonthName);

let count=7;
while(count<12)
{
    console.log(count);
    count++;
}

  
