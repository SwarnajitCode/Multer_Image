const router = require('express').Router();
const{uploadImage,preview} = require('../controllers/controller');
const upload = require('../middlewares/validation')

router.get('/preview',preview);
router.post('/upload',upload.single('image'),uploadImage);
module.exports = router;