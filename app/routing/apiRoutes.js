
var friends = require("../data/friends.js");

// Export the information obtained after the survey is complete
module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
     
    // Variables used to post new friend
    
    
    // Post the new friend
    app.post("/api/friends", function(req, res) {
        var diffArr = [];
        var diff = 0;
        var sum = 0;
        
        var test = friends[0].scores[0];
        var newScores = req.body.scores;
        console.log(test);
        console.log("Friends.length: " + friends.length);
        console.log("Friends[0].scores: "+ friends[0].scores.length);
        
        // Loop through the friends array to get the scores
        for (var i = 0; i < friends.length; i++){
            console.log ("Friends[i]: " + friends[i].scores);
            sum = 0;
            for (var j = 0; j < newScores.length; j++) {
                // scoreArr.push(friends[i].scores[j]);
                diff = Math.abs(parseInt(friends[i].scores[j]) - parseInt(newScores[j]));
                console.log("diff: " + diff);
                sum += diff;
                
                console.log("sum: " + sum);
            }
            diffArr.push(sum);
        }
        
        // Loop through the friends array to get the score differences
        // for (var i = 0; i < friends.length; i++) {
        //     for (var j = 0; j < length; j++) {
        //         // Sum up the differences
        //         console.log("diff: " + diff);

        //     }       
        // }
        
            
        console.log("diffArr: " + diffArr);
    
        var index = 0;
        var value = diffArr[0];

        // Search for the lowest difference number
        for (var i = 1; i < diffArr.length; i++) {
            if (diffArr[i] < value) {
                value = diffArr[i];
                index = i;
            }
        }
        
        // Match it to the best friend
        console.log("value: " + value);
        var placeInArr = diffArr.indexOf(value);
        console.log("Place: " + placeInArr);
        var bestFit = friends[placeInArr];
        console.log("best friend: " + bestFit);
    
    res.json(bestFit);

    friends.push(req.body);
    });
};