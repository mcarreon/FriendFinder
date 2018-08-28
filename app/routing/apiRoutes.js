var friendsArray = require("../data/friends.js");


module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res) {
        
    });
}

//-----
//final compatibility test prototype
var low = [1,1,1,1,1];
var high = [5,5,5,5,5];

function compatibilityProto() {

    var compatibilityScore = 0;
    for (var i = 0; i < low.length; i++) {
        compatibilityScore += Math.abs(low[i] - high[i]);
        console.log(compatibilityScore);
    }
    console.log('Total: ' + compatibilityScore);

}
//-----

function compatibilityFriends(req) {


}

compatibilityProto();