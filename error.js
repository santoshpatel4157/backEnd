const error = new Error("this is error")
//console.log(error.stack)
//console.log(error.message)
//throw new Error("this is throw error")

const { CustomError } = require("./CustomError")
//throw new CustomError("this is custom error")

// //handle exeption using try catch   

// try{
//     doSomthing()
// }catch(e){
//      console.log("error occurred")
//      console.log(e)
// }

// function doSomthimg(){
//     // console.log("this is doSomeThing")
//     const data = fetch("www.123.com")
// }

// const promise = new Promise((resolve,reject)=>{
//     if(false){
//         resolve(doSomthimg())
//     }else{
//         reject(doSomthimg())
//     }
// })

// promise.then((val)=>{
//     console.log(val)
// }).catch((e)=>{
//     console.log(e)
//     console.log("error occurd")
// })