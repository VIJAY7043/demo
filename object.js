const studentobj = [{   
    name : "vijay",
    age : 20,
    bloodgrp :"ab-",
    gender : "male"
},

{
name : "ajay",
age : 45,
bloodgrp :"ab+",
gender : "male"
},
{
    name : "swathi",
    age : 50,
    bloodgrp :"o+",
    gender : "female"
 },
{
        name : "hari",
        age : 25,
        bloodgrp :"0+",
        gender : "male"
}
]
console.log(studentobj[3].age)

const key = Object.keys(studentobj[0])
 console.log(key)

 const value = Object.values(studentobj[1])
 console.log(value)

//copy by value and copy by reference

//copy by value
// let a = 5   // stores in a different spaces
// let b = a
// b++
// console.log("a:",a)
// console.log('b:',b)


// //copy by reference

let nam1 = {value:10} // stores in a same address
let nam3 =  nam1
 nam3 = {value :15}
console.log(nam3)
console.log(nam1)
nam3.value={value:14}
console.log(nam1)
console.log(nam3)


//destructuring

const obj =[{
    name : "suryaa",
    age : 56,
    position : "manager",
},
{
    name : "dhana",
    age : 99,
    position : "sales executive"
}]

const{name,age,position} = obj[1]
console.log("the name is ->",name)


//array destructuring

const arr = ["mango","apple","banana"]

const[fruit1,fruit2,fruit3]= arr
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)






