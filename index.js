const filemodule=require("fs")
//create a new file
// let file="C:\Users\Jigar\Desktop\nodejspra\info\data.txt"
filemodule.writeFileSync('info/mnq.txt',"FILE INSIDE THE INFO FOLDER")
//it overwrite the data
filemodule.writeFileSync('read.txt',"lorem ispum1")
//useto append the data on the file
filemodule.appendFileSync('read.pdf',"lorem ispum2")
filemodule.appendFileSync('read.pdf',"lorem ispum2")
filemodule.appendFileSync('read.pdf',"lorem ispum2")
//it read the file
const info=filemodule.readFileSync('info/data.txt')
console.log(info.toString())
filemodule.renameSync('info/mnq.txt','info/pqr.pdf')