const x = 1;
const y = 2;

console.log(x,y)

// %s formet varible to string
// %d
// %i
// %o 

console.log("i am %s  and number is %d ", "santosh" ,789456)

console.clear();

console.count("aaa")
console.count("aaa")
console.count("bbb")

const sum = ()=>{ console.log(`sum of 2 and 4 is ${2+4}`)}
 
const masureTime = ()=>{
    
    console.time("sum()")
     sum()
    console.timeEnd("sum()")
}
masureTime()
