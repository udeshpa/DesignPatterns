var {writeFile, existsSync, readFileSync, unlink} = require('fs');


class LocalStorage {

    constructor() {

        if(existsSync('localStorage.json')) {
            console.log('loading items');
            var txt = readFileSync('localStorage.json');
            this.items = JSON.parse(txt);
        } else {
            this.items = {};
        }
    }

    get length() {
        return Object.keys(this.items).length;

    }

    getItem(key) {
        return this.items[key];
    }

    setItem(key, value) {
        this.items[key] = value;
        writeFile(  'localStorage.json', JSON.stringify(this.items), (err) => {
                if(err)
                    console.log(err);
        });

    }

    clear() {
        this.items = {};
        unlink('localStorage.json', ()=> {
            console.log("localStorage removed");
            
        })
    }
}

module.exports = new LocalStorage();