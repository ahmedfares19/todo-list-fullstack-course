const read = require('./src/readDataFromFile');
const write = require('./src/writeDataToFile');
const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
const PORT = 8080;



witeFileFunc = (req , res) => {
    const body = req.body;
    console.log(body);
    if(body.fileName == '' || body.fileName == null || body.data == null){
        res.status(400).send('من فضلك ادخل البيانات الصحيحه')
    } else {
        write(body.fileName , body.data);
        res.status(200).send('تمت اضافة ال')
    }
}
readFileFunc = (req , res) => {
    console.log(req.body);
    if(req.body.fileName == '' ||req.body.fileName  ==null ) {
        res.status(400).send('من فضلك ادخل البيانات الصحيحه')
    } else {
        const data = read(req.body.fileName);
        if(!data) {
            res.status(400).send('ادخل اسم ملف صحيح')
        }
        res.send(data)
    }
}
// write file API 
app.post('/write-file' ,witeFileFunc )
app.post('/read-file',readFileFunc)


app.listen(PORT , () => {
    console.log(`http://localhost:${PORT}`);
})