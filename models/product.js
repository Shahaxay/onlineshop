const products = [];

module.exports=class Procuct{
    constructor(title){
        this.title=title;
    }
    save(){
        products.push(this);
    }
    static fetchAll(){
        return products;
    }
}