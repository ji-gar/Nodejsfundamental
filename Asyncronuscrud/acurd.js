const filemodule=require('fs');
if(filemodule.existsSync("Data"))
{
    filemodule.writeFile("Data/bio.txt","My name is Jigar Panchal",(err)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            console.log("File created and sucessfully written")
        }

    })
    filemodule.appendFile("Data/bio.txt","\n"+"it the way of working",(err)=>{
       if(err)
       {
              console.log(err)
       }
       else{
              console.log("Data added sucessfully")
       }
    })
   
    filemodule.rename("Data/bio.txt","Data/mybio.txt",(err)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            console.log("File renamed sucessfully")
            unlinkfiles()
        }
    })
    console.log("Reading file")
   

}
else{
    filemodule.mkdir("Data",(err)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            console.log("Folder created")
        }
    })
}
function unlinkfiles()
{
    filemodule.unlink("Data/mybio.txt",(err)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            console.log("File deleted sucessfully")
        }
    })
}