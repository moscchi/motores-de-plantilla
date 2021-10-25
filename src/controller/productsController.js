const getProductsService = require('../services/getProducts');
const addProductService = require('../services/postProduct');

let isActive = true;

const getProducts = async (_, res) => {
    try {
        const products = await getProductsService();
        res.render("main", {products, isActive: false});
    } catch (e) {
        console.log(e);
    }
};

const addProduct = async (req, res) =>{
    try {
        console.log('Entre al controller');
        const newObj = await addProductService(req);
        const products = await getProductsService();
        console.log(newObj);
        isActive = true;
        res.render("main", {products, isActive: true});
    } catch (e) {
        console.log(e);
    }
}

module.exports = {getProducts, addProduct};