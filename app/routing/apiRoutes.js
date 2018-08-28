var friendsArray = require("../data/friends.js");


module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res) {
        //TODO: need to fix dummyUser, so func takes req body
        var specialestFriend = compatibilityFriends(req);
        friendsArray.push(req.body);
        res.json(specialestFriend);
        
        //console.log(friendsArray);
    });
}

/*
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
//compatibilityProto();
*/


function compatibilityFriends(req) {
    //TODO change dummy user to take in req.body with bodyparser
    var dummyUser = [3, 5, 2, 4, 1, 2, 3, 4, 1, 3];
    //var dummyUser = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];    
    //console.log(friendsArray);

    var currentTop;
    var currentTopScore = 404;

    friendsArray.forEach(function (e) {
        
        var compatibilityScore = 0;
        for (var i = 0; i < dummyUser.length; i++) {
            compatibilityScore += Math.abs(parseInt(dummyUser[i]) - parseInt(e.scores[i]));
        }
        if (compatibilityScore < currentTopScore) {
            currentTopScore = compatibilityScore;
            currentTop = e;
        }
        console.log(`Who's the Specialest Right Now? It's ${currentTop.name}`);
        console.log(`Total Compatibility Score with ${e.name}: ${compatibilityScore}`);
        console.log(`${currentTop.name} has the highlowest score at ${currentTopScore}`);
    });

    return currentTop;
}

//compatibilityFriends();