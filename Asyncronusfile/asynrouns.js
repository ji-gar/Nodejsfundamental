const filemodule=require('fs')

filemodule.writeFile("asyncefiletxt.txt","This is Asyncronus file operation",(err)=>{
console.log("Sucessfulcreatedfile")
})
filemodule.appendFile("asyncefiletxt.txt","This is Asynronusfile folder",(err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("Task completed")
    }
})
filemodule.readFile("asyncefiletxt.txt","utf-8",(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log(data)
    }
})