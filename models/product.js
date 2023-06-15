const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');

module.exports = class Procuct {
    constructor(title) {
        this.title = title;
    }
    save() {
        let products = [];
        fs.readFile(path.join(rootDir, 'data', 'product.json'), (err, datacontent) => {
            if (!err) {
                products = JSON.parse(datacontent);
            }
            products.push(this);
            fs.writeFile(path.join(rootDir, 'data', 'product.json'), JSON.stringify(products), err => {
                if (err) {
                    console.log(err.message);
                } else {
                    console.log("inserted");
                }
            });

        });

    }
    static fetchAll(cb) {
        fs.readFile(path.join(rootDir,'data','product.json'),(err,data)=>{
            if(!err){
                cb(JSON.parse(data));
            }else{
                cb([]);
            }
        });
    }
}