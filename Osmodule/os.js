const os=require("os")
const file=require("fs")
console.log(os.homedir())
console.log(os.hostname())
console.log(os.platform())
console.log(os.arch())
console.log(os.machine())
console.log( os.cpus())
console.log(os.networkInterfaces())
console.log(os.totalmem()/1024/1024/1024)
console.log(os.type())
console.log(os.tmpdir())
// file.mkdir(os.homedir()+"/Home",(err)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//         console.log("Folder created")
//     }
// })