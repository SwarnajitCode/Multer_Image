const fs = require('fs');
const a =2;
module.exports = {
    uploadImage : (req,res)=>{
        res.send('<form action = "/preview" method="get" enctype="multipart/form-data"><p>Image uploaded</p><button type="submit">Preview</button></form>');
    },
  

    preview : (req,res) =>{
        res.writeHead(200,{'Content-Type':'image/jpg'});
        const name = localStorage.getItem('name');
        const myReadStream = fs.createReadStream(`./images/${name}`)
        myReadStream.pipe(res);

    }
}