module.exports = function (app) {

	// Get's the JSON object in raw format
	app.get('/api', function (req, res) {
    	let produkter = require('./../data/produkt-data.json');
    	console.log(produkter);
    	res.send({
    		produkter: produkter
    	});
    })
	
	// Displays the products 
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
