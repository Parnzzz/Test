var config = require('./dbconfig');
const sql = require('mssql');


async function getOrders(){
    try{
        let pool = await sql.connect(config);
        let test = await pool.request().query("SELECT * from Orders");
        return test.recordset;
    }
    catch(error){
        console.log(error);
    }
}
async function getOrder(orderGender){
    try{
        let pool = await sql.connect(config);
        let test = await pool.request()
            .input('input_parameter',sql.NVarChar,orderGender,orderSize)
            .query("SELECT * from Orders where Gender  = @input_parameter");
            
        
        return test.recordset;
    }
    catch(error){
        console.log(error);
    }
}
async function getOrder(orderSize){
    try{
        let pool = await sql.connect(config);
        let test = await pool.request()
            .input('input_parameter',sql.NVarChar,orderSize)
            .query("SELECT * from Orders where Size = @input_parameter");
        
        
        return test.recordset;
    }
    catch(error){
        console.log(error);
    }
}

async function getOrder(orderStyle){
    try{
        let pool = await sql.connect(config);
        let test = await pool.request()
            .input('input_parameter',sql.NVarChar,orderStyle)
            .query("SELECT * from Orders where Style = @input_parameter");
        
        
        return test.recordset;
    }
    catch(error){
        console.log(error);
    }
}

async function getOrder(orderPrice){
    try{
        let pool = await sql.connect(config);
        let test = await pool.request()
            .input('input_parameter',sql.Int,orderPrice)
            .query("SELECT * from Orders where Price = @input_parameter");
        
        
        return test.recordset;
    }
    catch(error){
        console.log(error);
    }
}



async function addOrder(order){
    try{
        let pool = await sql.connect(config);
        let inserttest = await pool.request()
            .input('Gender',sql.NVarChar, order.Gender)
            .input('Style',sql.NVarChar, order.Style)
            .input('Size',sql.NVarChar,order.Size)
            .input('Price',sql.Int,order.Price)
            .input('Status',sql.NVarChar, order.Status)
            .input('Amount',sql.NVarChar, order.Amount)
            .input('Date',sql.NVarChar,order.Date)
            .input('Adderss',sql.NVarChar,order.Address)
            .execute('InsertShipping');
        return inserttest.recordsets;
    }
    catch(err){
        console.log(err);
    }

    
}


module.exports ={
    getOrders : getOrders,
    getOrder : getOrder,
    addOrder : addOrder
    
}