//map method 

const numbers = [1,2,3,4,5,6,7,8,9,10]

const multiplyarr = numbers.map((val,idx,accarr)=>{
    return val*2
})
console.log(multiplyarr)

const studentobj = [{
    name : "vijay",
    age : 21,
    state : "tamilnadu"
}]

const findobj = studentobj.map((obj,idx,accarr)=>console.log(accarr))


//filter 
// filter is array method used to return arrays
const filterarr = numbers.filter((val,idx,accarr)=> val < 5)
console.log(filterarr)


// filter method in noraml loop 

const newarr = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 5) {
        newarr.push(numbers[i]);
    }
}

console.log(newarr); 

// Reduce 
const data = "5"
const reducearr = numbers.reduce((acc,val,idx,accarr)=>{
   return acc + val
},data)

console.log(reducearr)









