console.log("Code step one")
const file=require("fs")
const info=file.readFileSync("Jigar/data.txt","utf-8")
console.log(info)
console.log("Code is running")

console.log("Asynorouns calls")
file.readFile("Jigar/data.txt","utf-8",(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log(data)
    }
})
console.log("After the code")