const express = require('express')
const app = express()
const multer = require('multer')
const path = require('path')
const cors = require('cors')

// setup multer for file upload
const storage = multer.diskStorage({
  destination: '../upload',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname.match(/\..*$/)[0])
  },
})

const upload = multer({storage})

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../upload')))

app.post('/api/v1/uploadfile', upload.array('file', 10), (req, res, next) => {
  console.log(req.files + ' file successfully uploaded !!')
  res.sendStatus(200)
})

app.listen(3000, () => console.log('Listening on port 3000'))
