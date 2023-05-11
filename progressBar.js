const progressBar = require("progress")

const bar = new progressBar("downloding [:bar] :rate/bps :eats" , {
    total:100,
})

const timer = setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer)
    }

},100)

const chalk = require("chalk")

console.log(chalk.green("qwertyuio"))
console.log("santosh timer")

