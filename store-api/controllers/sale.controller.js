import SaleService from "../services/sale.service.js";

//controller is responsible for all the validations

async function createSale(req, res, next) {
    try {
        let sale = req.body;
        if (!sale.client_id || !sale.value || !sale.product_id) {
            throw new Error("All data needed");
        }
        res.send(await SaleService.createSale(sale));
        logger.info(`POST /sale - ${JSON.stringify(sale)}`);

    } catch (err) {
        next(err);
    }

}

async function getSales(req, res, next){
    try{
        res.send(await SaleService.getSales());
        logger.info(`GET /sales`);
    }catch(err){
       next(err); 
    }

}

async function getSale(req, res, next){
    try{
        res.send(await SaleService.getSale(req.params.id));
        logger.info(`GET /sale`);
    }catch(err){
       next(err); 
    }
}

async function deleteSale(req, res, next){
    try{
        await SaleService.deleteSale(req.params.id)
        res.end();
        logger.info(`DELETE /sale`);
    }catch(err){
       next(err); 
    }
}

async function updateSale(req, res, next){
    try{
        let sale = req.body;
        if (!sale.sale_id || !sale.client_id || !sale.value || !sale.product_id) {
            throw new Error("All data needed");
        }
        sale = await SaleService.updateSale(sale);
        res.send(sale);
        logger.info(`PUT /sale - ${JSON.stringify(sale)}`);
    }catch(err){
       next(err); 
    }
}

export default {
    createSale,
    getSales,
    getSale,
    deleteSale,
    updateSale
}