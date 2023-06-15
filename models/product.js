const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');

const p=path.join(rootDir,'data','product.json');

const getProductsArray=(cb)=>{
    fs.readFile(p,(err,data)=>{
        if(!err){
            cb(JSON.parse(data));
        }else{
            cb([]);
        }
    });
}

module.exports = class Procuct {
    constructor(title) {
        this.title = title;
    }
    save() {
        getProductsArray(products=>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                if (err) {
                    console.log(err.message);
                } else {
                    console.log("inserted");
                }
            });
        })

    }
    static fetchAll(cb) {
        getProductsArray(cb);
    }
}