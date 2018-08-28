var friendsArray = require("../data/friends.js");


module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {

        console.log('\n-----');
        console.log(`Data has been served.`);
        console.log('-----\n');

        res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res) {
        //DONE TODO: need to fix dummyUser, so func takes req body
        var specialestFriend = compatibilityFriends(req);
        friendsArray.push(req.body);
        res.json(specialestFriend);

        console.log('\n-----');
        console.log(`Posting survey data.`);
        console.log('-----\n');
        
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
    //DONE TODO: change dummy user to take in req.body with bodyparser
    //var dummyUser = [3, 5, 2, 4, 1, 2, 3, 4, 1, 3];
    //var dummyUser = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];    
    //console.log(friendsArray);

    var userScore = req.body.scores;
    var currentTop;
    var currentTopScore = 404;

    friendsArray.forEach(function (e) {
        
        var compatibilityScore = 0;
        for (var i = 0; i < userScore.length; i++) {
            compatibilityScore += Math.abs(parseInt(userScore[i]) - parseInt(e.scores[i]));
        }
        if (compatibilityScore < currentTopScore) {
            currentTopScore = compatibilityScore;
            currentTop = e;
        }

        console.log('\n-----');
        console.log(`Who's the Specialest Right Now? It's ${currentTop.name}`);
        console.log(`Total Compatibility Score with ${e.name}: ${compatibilityScore}`);
        console.log(`${currentTop.name} has the highlowest score at ${currentTopScore}`);
        console.log('-----\n');
    });

    return currentTop;
}

//compatibilityFriends();