var path = require('path');

// Export the routes to use in other files
module.exports = function (app) {

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
}