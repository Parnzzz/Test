var Db = require('./dboperation')
var Order = require('./order');

const dboperation = require('./dboperation');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request,response,next)=>{
    console.log('GOT it');
    next();

})

router.route('/orders').get((request,response)=>{
    dboperation.getOrders().then(result =>{
        //console.log(result);
        response.json(result);
    })
})

router.route('/orders/:Gender').get((request,response)=>{
    dboperation.getOrder(request.params.Gender).then(result =>{
        response.json(result);
    })
})

router.route('/orders/:Size').get((request,response)=>{
    dboperation.getOrder(request.params.Size).then(result =>{
        response.json(result);
    })
})
router.route('/orders/:Style').get((request,response)=>{
    dboperation.getOrder(request.params.Style).then(result =>{
        response.json(result);
    })
})

router.route('/orders/:Price').get((request,response)=>{
    dboperation.getOrder(request.params.Price).then(result =>{
        response.json(result);
    })
})

router.route('/orders').post((request,response)=>{
    
    let order = {...request.body}
    dboperation.addOrder(order).then(result =>{
        response.status(201).json(result);
    })
})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('port is ' + port);



//dboperation.getOrders().then(result =>{ 
    
    //console.log(result);
