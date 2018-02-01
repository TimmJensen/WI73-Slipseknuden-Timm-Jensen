module.exports = function (app) {

	
    app.get('/produkter', function (req, res) {
    	let produkter = require('./../data/produkt-data.json');
    	console.log(produkter);
    	res.render('pages/produkter', {
    		produkter: produkter
    	});
    })

    app.get('/produkt/:varenr', function (req, res) {
    	let produkter = require('./../data/produkt-data.json');
    	console.log(produkter);
    	res.render('pages/produkt', {
    		produkter: produkter [req.params.varenr]
    	});
    })

}
