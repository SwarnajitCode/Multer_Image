const multer = require('multer');
const fs = require('fs');
let  val = "";

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'./images')
    },
    filename: (req,file,cb) =>{
        val = Date.now()+' '+file.originalname;
        cb(null,val);
    }
})
localStorage.setItem('name',val);

const upload = multer({
    storage:storage,
    fileFilter:(req,file,cb) =>{
        if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'){
            cb(null,true)
        }else{
            (null,false)
            return cb(new error('only image files are allowed'));
        }
    }
})

module.exports = upload;