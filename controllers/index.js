'use strict';


var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {
        
        res.render('index', model);
        
    });

	router.post('/',function(req,res){
	
	console.log(req.body);
});

};
