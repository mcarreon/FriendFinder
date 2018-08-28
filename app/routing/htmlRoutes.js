//-----Dependencies-----

var path = require("path");

module.exports = function(app) {
    app.get("/survey", function(req, res) {
        console.log('\n-----');
        console.log(`Do you have time to fill out this quick survey?`);
        console.log('-----\n');
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function(req, res) {
        console.log('\n-----');
        console.log(`Honey I'm home.`);
        console.log('-----\n');
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}