const filemodule=require("fs")
function readfile( foldername)
{
   const data= filemodule.readFileSync(`${foldername}/bio.txt`,"latin1")
   console.log(data)
}
function rename( foldername)
{
    filemodule.renameSync(`${foldername}/bio.txt`,`${foldername}/mybio.txt`)
}
if (filemodule.existsSync("Jigar")) {
    filemodule.writeFileSync("Jigar/bio.txt","My name is Jigar Panchal")
    filemodule.appendFileSync("Jigar/bio.txt","Working "),
    readfile("Jigar")
    rename("Jigar")

    }
else{
    filemodule.mkdirSync("Jigar",function(err){
        console.log(err)
    })
}

