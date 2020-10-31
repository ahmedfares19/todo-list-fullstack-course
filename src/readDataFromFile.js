const fs = require('fs');

const readFile = (filename) => {
    const isExists = fs.existsSync(filename + '.txt')
    if(isExists) {
      const data = fs.readFileSync(filename+ '.txt')
      return data
    } else {
        return false;
    }
}


module.exports = readFile