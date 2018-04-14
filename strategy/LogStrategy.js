var path = require('path');
var {appendFile} = require('fs');
var morse = require('morse');

class LogStrategy {

    static noDate(timeStamp, message) {
            console.log(message);
            
    }

    static toFile(timeStamp, message) {
            var fileName = path.join(__dirname, 'logs.txt');
            appendFile(fileName, `${timeStamp} - ${message}\n`, err=> {
                if(err) {
                    console.log('Error writing to file');
                    console.error(error);
                    
                }
            });
    }

    static toConsole(timeStamp, message) {
        console.log(`${timeStamp} - ${message}\n`);
        

    }

    static toMorseCode(timeStamp, message) {
        var morseCode = morse.encode(message);
        console.log(morseCode);
        
    }

    static none(timeStamp, message) {

    }
};


module.exports = LogStrategy;