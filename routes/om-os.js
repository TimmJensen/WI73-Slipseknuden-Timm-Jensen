module.exports = function (app) {
    app.get('/om-os', function (req, res) {
    	res.render('pages/om-os');
    });
}
