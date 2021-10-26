const getProductsService = require('../services/getProducts');
const addProductService = require('../services/postProduct');

const getProducts = async (_, res) => {
    try {
        const products = await getProductsService();
        res.render("./layouts/agregarProd.ejs", {products});
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
        res.render("index", {products});
    } catch (e) {
        console.log(e);
    }
}

const navigation = async (req, res) => {
    try {
        const products = await getProductsService();
        res.render('index', {products})  
    } catch (error) {
        console.log(error);
    }
}
module.exports = {getProducts, addProduct, navigation};