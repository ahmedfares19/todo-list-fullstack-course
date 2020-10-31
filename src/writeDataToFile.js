const fs = require('fs');

const writeData = (filename , data)=> {
    fs.writeFileSync(filename+'.txt' , data)
    return true;
}

module.exports = writeData;